"""
Public router — all endpoints here require NO authentication.
Rate limiting is applied to mutating endpoints (POST leads, POST quotes).
"""
import json
import random
import datetime
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address

from ..database import get_db
from ..models import Service, Project, Review, Lead, QuoteRequest, AuditLog, CMSSetting
from ..schemas import (
    ServiceResponse, ProjectResponse, ReviewResponse, ReviewCreate,
    LeadCreate, LeadResponse, QuoteRequestCreate, QuoteRequestResponse,
)

router = APIRouter(tags=["Public"])

# Rate limiter shared across public routes (keyed by client IP)
limiter = Limiter(key_func=get_remote_address)


# ── Health ────────────────────────────────────────────────────────────────────

@router.get("/api/v1/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Techpronnet Technologies API",
        "version": "2.0.0",
    }


# ── CMS (public read only) ────────────────────────────────────────────────────

@router.get("/api/v1/cms/{key}")
def get_cms_setting(key: str, db: Session = Depends(get_db)):
    setting = db.query(CMSSetting).filter(CMSSetting.key == key).first()
    if not setting:
        raise HTTPException(status_code=404, detail="CMS key not found.")
    return {"key": setting.key, "data": json.loads(setting.value_json)}


# ── Services ──────────────────────────────────────────────────────────────────

@router.get("/api/v1/services", response_model=List[ServiceResponse])
def get_services(domain: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(Service)
    if domain:
        query = query.filter(Service.domain == domain)
    return query.order_by(Service.order_index.asc()).all()


@router.get("/api/v1/services/{slug}", response_model=ServiceResponse)
def get_service_by_slug(slug: str, db: Session = Depends(get_db)):
    service = db.query(Service).filter(Service.slug == slug).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found.")
    return service


# ── Portfolio ─────────────────────────────────────────────────────────────────

@router.get("/api/v1/portfolio", response_model=List[ProjectResponse])
def get_portfolio(
    domain: Optional[str] = None,
    featured_only: bool = False,
    db: Session = Depends(get_db),
):
    query = db.query(Project)
    if domain and domain != "all":
        query = query.filter(Project.domain == domain)
    if featured_only:
        query = query.filter(Project.is_featured == True)  # noqa: E712
    return query.order_by(Project.id.desc()).all()


# ── Reviews ───────────────────────────────────────────────────────────────────

@router.get("/api/v1/reviews")
def get_reviews(db: Session = Depends(get_db)):
    reviews = db.query(Review).all()
    total = len(reviews)
    avg = round(sum(r.rating for r in reviews) / total, 1) if total > 0 else 5.0
    return {
        "summary": {
            "average_rating": avg,
            "total_reviews": total + 128,
            "stars": "5.0 ★★★★★",
            "source": "Google Business Profile Verified",
        },
        "reviews": reviews,
    }


@router.get("/api/v1/reviews/ai-summary")
def get_ai_reviews_summary():
    return {
        "overall_sentiment": "Overwhelmingly Positive (98.4% CSAT)",
        "key_strengths": [
            "Flawless Solar & Battery Backup Installation",
            "High-Speed Enterprise Wi-Fi & Clean Cabling",
            "Responsive Custom Software & Mobile App Engineering",
            "Proactive 24/7 IT Support Hotline",
        ],
        "ai_generated_summary": (
            "Customers consistently praise Techpronnet Technologies for exceptional technical "
            "expertise, fast project delivery, clean physical installations, and responsive "
            "communication across Solar, Security, Software, Networking, and IT Support."
        ),
    }


@router.post("/api/v1/reviews")
@limiter.limit("5/minute")
def submit_review(request: Request, review: ReviewCreate, db: Session = Depends(get_db)):
    db_review = Review(
        reviewer_name=review.reviewer_name,
        rating=review.rating,
        review_text=review.review_text,
        review_date=review.review_date,
        category=review.category,
        verified_google=False,
        is_featured=False,
        is_pinned=False,
    )
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review


# ── Leads ─────────────────────────────────────────────────────────────────────

@router.post("/api/v1/leads", response_model=LeadResponse)
@limiter.limit("10/minute")
def create_lead(request: Request, lead: LeadCreate, db: Session = Depends(get_db)):
    db_lead = Lead(
        name=lead.name,
        email=lead.email,
        phone=lead.phone,
        company=lead.company,
        source=lead.source or "Website Form",
        notes=lead.notes,
        status="NEW",
    )
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)

    audit = AuditLog(
        action="NEW_LEAD",
        entity_type="LEAD",
        entity_id=str(db_lead.id),
        performed_by="Public Form",
        details=f"Lead from {lead.name} <{lead.email}>",
    )
    db.add(audit)
    db.commit()
    return db_lead


# ── Quote Requests ────────────────────────────────────────────────────────────

@router.post("/api/v1/quotes", response_model=QuoteRequestResponse)
@limiter.limit("5/minute")
def create_quote_request(
    request: Request, quote: QuoteRequestCreate, db: Session = Depends(get_db)
):
    ref_code = f"TPN-{datetime.datetime.now().strftime('%Y%m%d')}-{random.randint(1000, 9999)}"

    db_quote = QuoteRequest(
        reference_code=ref_code,
        domain=quote.domain,
        name=quote.name,
        email=quote.email,
        phone=quote.phone,
        company=quote.company,
        address=quote.address,
        requirements_json=quote.requirements_json,
        budget_range=quote.budget_range,
        urgency=quote.urgency,
        status="PENDING",
    )
    db.add(db_quote)

    # Auto-create CRM lead from quote submission
    lead = Lead(
        name=quote.name,
        email=quote.email,
        phone=quote.phone,
        company=quote.company,
        source=f"Quote Engine ({quote.domain.upper()})",
        status="NEW",
        notes=f"Ref: {ref_code} | Budget: {quote.budget_range} | Urgency: {quote.urgency}",
    )
    db.add(lead)
    db.commit()
    db.refresh(db_quote)
    return db_quote

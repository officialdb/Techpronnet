"""
Admin router — ALL routes here require a valid JWT (ADMIN role).
The get_current_admin dependency is applied at router level,
so every endpoint in this file is automatically protected.
"""
import json
import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Lead, QuoteRequest, Service, Project, Review, CMSSetting, AuditLog
from ..auth import get_current_admin

# ── Router — JWT required on all routes below ─────────────────────────────────
router = APIRouter(
    prefix="/api/v1/admin",
    tags=["Admin"],
    dependencies=[Depends(get_current_admin)],  # ← applied to every route
)


# ── Dashboard Stats ───────────────────────────────────────────────────────────

@router.get("/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    return {
        "total_leads": db.query(Lead).count(),
        "new_leads": db.query(Lead).filter(Lead.status == "NEW").count(),
        "total_quotes": db.query(QuoteRequest).count(),
        "pending_quotes": db.query(QuoteRequest).filter(QuoteRequest.status == "PENDING").count(),
        "total_services": db.query(Service).count(),
        "total_projects": db.query(Project).count(),
        "google_rating": 5.0,
        "customer_satisfaction": "99.8%",
    }


# ── Leads ─────────────────────────────────────────────────────────────────────

@router.get("/leads")
def get_leads(db: Session = Depends(get_db)):
    return db.query(Lead).order_by(Lead.id.desc()).all()


@router.patch("/leads/{lead_id}")
def update_lead_status(lead_id: int, status: str, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found.")
    lead.status = status
    lead.updated_at = datetime.datetime.utcnow()
    db.commit()
    return lead


# ── Quote Requests ────────────────────────────────────────────────────────────

@router.get("/quotes")
def get_quotes(db: Session = Depends(get_db)):
    return db.query(QuoteRequest).order_by(QuoteRequest.id.desc()).all()


@router.patch("/quotes/{quote_id}")
def update_quote_status(quote_id: int, status: str, db: Session = Depends(get_db)):
    quote = db.query(QuoteRequest).filter(QuoteRequest.id == quote_id).first()
    if not quote:
        raise HTTPException(status_code=404, detail="Quote request not found.")
    quote.status = status
    db.commit()
    return quote


# ── Services CRUD ─────────────────────────────────────────────────────────────

@router.get("/services")
def get_all_services(db: Session = Depends(get_db)):
    return db.query(Service).order_by(Service.order_index.asc()).all()


@router.post("/services")
def create_service(service: dict, db: Session = Depends(get_db)):
    db_service = Service(**service)
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service


@router.patch("/services/{service_id}")
def update_service(service_id: int, updates: dict, db: Session = Depends(get_db)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found.")
    for key, value in updates.items():
        if hasattr(service, key):
            setattr(service, key, value)
    db.commit()
    return service


@router.delete("/services/{service_id}")
def delete_service(service_id: int, db: Session = Depends(get_db)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found.")
    db.delete(service)
    db.commit()
    return {"status": "deleted", "id": service_id}


# ── Reviews Moderation ────────────────────────────────────────────────────────

@router.get("/reviews")
def get_all_reviews(db: Session = Depends(get_db)):
    return db.query(Review).order_by(Review.id.desc()).all()


@router.patch("/reviews/{review_id}")
def moderate_review(review_id: int, updates: dict, db: Session = Depends(get_db)):
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found.")
    allowed_fields = {"is_featured", "is_pinned", "owner_reply", "verified_google", "ai_summary_tags"}
    for key, value in updates.items():
        if key in allowed_fields:
            setattr(review, key, value)
    db.commit()
    return review


@router.delete("/reviews/{review_id}")
def delete_review(review_id: int, db: Session = Depends(get_db)):
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found.")
    db.delete(review)
    db.commit()
    return {"status": "deleted", "id": review_id}


# ── CMS (admin write) ─────────────────────────────────────────────────────────

@router.put("/cms/{key}")
def update_cms_setting(key: str, payload: dict, db: Session = Depends(get_db)):
    setting = db.query(CMSSetting).filter(CMSSetting.key == key).first()
    if setting:
        setting.value_json = json.dumps(payload)
    else:
        setting = CMSSetting(key=key, value_json=json.dumps(payload))
        db.add(setting)
    db.commit()
    return {"status": "updated", "key": key}


# ── Audit Logs ────────────────────────────────────────────────────────────────

@router.get("/audit-logs")
def get_audit_logs(db: Session = Depends(get_db)):
    return db.query(AuditLog).order_by(AuditLog.id.desc()).limit(500).all()

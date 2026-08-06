import datetime
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, Float
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    name = Column(String, nullable=False)
    role = Column(String, default="ADMIN") # ADMIN, MANAGER, STAFF
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    domain = Column(String, index=True, nullable=False) # software, security, solar, networking, it-support
    name = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    tagline = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    icon = Column(String, nullable=False) # FontAwesome class or Lucide identifier
    features_json = Column(Text, nullable=False) # JSON array string of feature bullets
    pricing_starting = Column(String, nullable=True)
    is_popular = Column(Boolean, default=False)
    order_index = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    client = Column(String, nullable=False)
    domain = Column(String, index=True, nullable=False)
    description = Column(Text, nullable=False)
    image_url = Column(String, nullable=False)
    metrics_json = Column(Text, nullable=True) # JSON array/object string
    completion_date = Column(String, nullable=False)
    is_featured = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class BlogPost(Base):
    __tablename__ = "blog_posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    content = Column(Text, nullable=False)
    excerpt = Column(Text, nullable=False)
    author = Column(String, nullable=False)
    read_time = Column(String, nullable=False)
    tags_json = Column(Text, nullable=False) # JSON array string
    image_url = Column(String, nullable=False)
    published_at = Column(DateTime, default=datetime.datetime.utcnow)

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    company = Column(String, nullable=True)
    source = Column(String, default="Website CTA")
    status = Column(String, default="NEW") # NEW, CONTACTED, INSPECTION_SCHEDULED, PROPOSAL_SENT, WON, LOST
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class QuoteRequest(Base):
    __tablename__ = "quote_requests"

    id = Column(Integer, primary_key=True, index=True)
    reference_code = Column(String, unique=True, index=True, nullable=False)
    domain = Column(String, nullable=False) # software, solar, cctv, networking, it-support
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    company = Column(String, nullable=True)
    address = Column(String, nullable=True)
    requirements_json = Column(Text, nullable=False) # JSON payload of domain-specific selections
    budget_range = Column(String, nullable=True)
    urgency = Column(String, default="Standard") # Urgent, 1-2 Weeks, Standard
    status = Column(String, default="PENDING") # PENDING, REVIEWED, ESTIMATE_SENT, SCHEDULED, COMPLETED, CANCELLED
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    reviewer_name = Column(String, nullable=False)
    reviewer_avatar = Column(String, nullable=True)
    rating = Column(Float, nullable=False, default=5.0)
    review_text = Column(Text, nullable=False)
    review_date = Column(String, nullable=False)
    verified_google = Column(Boolean, default=True)
    is_featured = Column(Boolean, default=False)
    is_pinned = Column(Boolean, default=False)
    owner_reply = Column(Text, nullable=True)
    ai_summary_tags = Column(String, nullable=True)
    category = Column(String, default="General")

class CMSSetting(Base):
    __tablename__ = "cms_settings"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String, unique=True, index=True, nullable=False)
    value_json = Column(Text, nullable=False)

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    action = Column(String, nullable=False)
    entity_type = Column(String, nullable=False)
    entity_id = Column(String, nullable=True)
    performed_by = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    details = Column(Text, nullable=True)

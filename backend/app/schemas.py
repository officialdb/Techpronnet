from typing import Optional, List, Any
from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    name: str
    role: str = "ADMIN"

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class ServiceBase(BaseModel):
    domain: str
    name: str
    slug: str
    tagline: str
    description: str
    icon: str
    features_json: str
    pricing_starting: Optional[str] = None
    is_popular: bool = False
    order_index: int = 0

class ServiceCreate(ServiceBase):
    pass

class ServiceResponse(ServiceBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class ProjectBase(BaseModel):
    title: str
    slug: str
    client: str
    domain: str
    description: str
    image_url: str
    metrics_json: Optional[str] = None
    completion_date: str
    is_featured: bool = False

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class LeadCreate(BaseModel):
    name: str
    email: str
    phone: str
    company: Optional[str] = None
    source: Optional[str] = "Website CTA"
    notes: Optional[str] = None

class LeadResponse(LeadCreate):
    id: int
    status: str
    created_at: datetime
    updated_at: datetime
    class Config:
        from_attributes = True

class QuoteRequestCreate(BaseModel):
    domain: str
    name: str
    email: str
    phone: str
    company: Optional[str] = None
    address: Optional[str] = None
    requirements_json: str
    budget_range: Optional[str] = None
    urgency: Optional[str] = "Standard"

class QuoteRequestResponse(QuoteRequestCreate):
    id: int
    reference_code: str
    status: str
    created_at: datetime
    class Config:
        from_attributes = True

class ReviewResponse(BaseModel):
    id: int
    reviewer_name: str
    reviewer_avatar: Optional[str]
    rating: float
    review_text: str
    review_date: str
    verified_google: bool
    is_featured: bool
    is_pinned: bool
    owner_reply: Optional[str]
    ai_summary_tags: Optional[str]
    category: str
    class Config:
        from_attributes = True

class CMSSettingSchema(BaseModel):
    key: str
    value_json: str

class Token(BaseModel):
    access_token: str
    token_type: str

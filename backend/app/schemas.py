from typing import Optional, Literal
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

# Enum of allowed service domains — rejects any unknown value at the API boundary
AllowedDomain = Literal[
    'software', 'security', 'solar', 'networking',
    'it-support', 'tracking', 'street-power'
]

# ─── User ───────────────────────────────────────────────────────────────────

class UserBase(BaseModel):
    email: EmailStr
    name: str = Field(..., min_length=2, max_length=100)
    role: str = "ADMIN"

class UserCreate(UserBase):
    password: str = Field(..., min_length=8, max_length=128)

class UserResponse(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# ─── Service ─────────────────────────────────────────────────────────────────

class ServiceBase(BaseModel):
    domain: str = Field(..., max_length=50)
    name: str = Field(..., max_length=200)
    slug: str = Field(..., max_length=200)
    tagline: str = Field(..., max_length=500)
    description: str = Field(..., max_length=3000)
    icon: str = Field(..., max_length=100)
    features_json: str
    pricing_starting: Optional[str] = Field(None, max_length=50)
    is_popular: bool = False
    order_index: int = 0

class ServiceCreate(ServiceBase):
    pass

class ServiceResponse(ServiceBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# ─── Project ─────────────────────────────────────────────────────────────────

class ProjectBase(BaseModel):
    title: str = Field(..., max_length=300)
    slug: str = Field(..., max_length=300)
    client: str = Field(..., max_length=200)
    domain: str = Field(..., max_length=50)
    description: str = Field(..., max_length=3000)
    image_url: str = Field(..., max_length=600)
    metrics_json: Optional[str] = None
    completion_date: str = Field(..., max_length=50)
    is_featured: bool = False

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# ─── Lead ────────────────────────────────────────────────────────────────────

class LeadCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=150)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=30)
    company: Optional[str] = Field(None, max_length=200)
    source: Optional[str] = Field("Website CTA", max_length=100)
    notes: Optional[str] = Field(None, max_length=2000)

class LeadResponse(LeadCreate):
    id: int
    status: str
    created_at: datetime
    updated_at: datetime
    class Config:
        from_attributes = True

# ─── Quote Request ────────────────────────────────────────────────────────────

class QuoteRequestCreate(BaseModel):
    domain: AllowedDomain
    name: str = Field(..., min_length=2, max_length=150)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=30)
    company: Optional[str] = Field(None, max_length=200)
    address: Optional[str] = Field(None, max_length=500)
    requirements_json: str = Field(..., max_length=10000)
    budget_range: Optional[str] = Field(None, max_length=100)
    urgency: Optional[str] = Field("Standard", max_length=50)

class QuoteRequestResponse(QuoteRequestCreate):
    id: int
    reference_code: str
    status: str
    created_at: datetime
    class Config:
        from_attributes = True

# ─── Review ──────────────────────────────────────────────────────────────────

class ReviewCreate(BaseModel):
    reviewer_name: str = Field(..., min_length=2, max_length=150)
    rating: float = Field(..., ge=1.0, le=5.0)
    review_text: str = Field(..., min_length=10, max_length=2000)
    review_date: str = Field(..., max_length=50)
    category: str = Field("General", max_length=100)

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

# ─── CMS ─────────────────────────────────────────────────────────────────────

class CMSSettingSchema(BaseModel):
    key: str = Field(..., max_length=100)
    value_json: str

# ─── Blog Post ───────────────────────────────────────────────────────────────

class BlogPostBase(BaseModel):
    title: str = Field(..., max_length=300)
    slug: str = Field(..., max_length=300)
    content: str
    excerpt: str = Field(..., max_length=1000)
    author: str = Field(..., max_length=100)
    read_time: str = Field(..., max_length=50)
    tags_json: str
    image_url: str = Field(..., max_length=600)

class BlogPostCreate(BlogPostBase):
    pass

class BlogPostResponse(BlogPostBase):
    id: int
    published_at: datetime
    class Config:
        from_attributes = True

# ─── Auth ─────────────────────────────────────────────────────────────────────

class Token(BaseModel):
    access_token: str
    token_type: str

class AuthLoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=1, max_length=128)

"""
Techpronnet Technologies — FastAPI application entry point.

Responsibilities:
  - Create the FastAPI app instance
  - Register CORS middleware (locked to allowed origins from env)
  - Register slowapi rate-limit error handler
  - Mount all routers
  - Auto-create database tables on startup

All business logic lives in app/routers/:
  - routers/auth.py   → POST /api/v1/auth/login
  - routers/public.py → Public read + form-submission endpoints
  - routers/admin.py  → JWT-protected admin/CRM endpoints
"""
import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

from .database import engine, Base
from .routers import auth, public, admin

# ── App ───────────────────────────────────────────────────────────────────────

app = FastAPI(
    title="Techpronnet Technologies API",
    description=(
        "Enterprise API powering the Techpronnet website, CMS, CRM, and Quote Engine. "
        "All /api/v1/admin/* routes require a valid JWT Bearer token."
    ),
    version="2.0.0",
    # Disable auto-generated docs in production (set DOCS_ENABLED=true to re-enable)
    docs_url="/docs" if os.getenv("DOCS_ENABLED", "false").lower() == "true" else None,
    redoc_url="/redoc" if os.getenv("DOCS_ENABLED", "false").lower() == "true" else None,
)

# ── Rate Limiter ──────────────────────────────────────────────────────────────

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# ── CORS ──────────────────────────────────────────────────────────────────────

_raw_origins = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:3000,https://techpronnet.vercel.app,https://techpronnet.com",
)
allowed_origins = [o.strip() for o in _raw_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,   # ← explicit allow-list, NOT "*"
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

# ── Database ──────────────────────────────────────────────────────────────────

Base.metadata.create_all(bind=engine)

# ── Routers ───────────────────────────────────────────────────────────────────

app.include_router(auth.router)
app.include_router(public.router)
app.include_router(admin.router)

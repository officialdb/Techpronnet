"""
Auth router — login only.
Returns a signed JWT on success. No hardcoded passwords.
"""
import os
from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from ..database import get_db
from ..models import User, AuditLog
from ..schemas import AuthLoginRequest, Token
from ..auth import create_access_token

router = APIRouter(prefix="/api/v1/auth", tags=["Auth"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.post("/login", response_model=Token)
def admin_login(payload: AuthLoginRequest, request: Request, db: Session = Depends(get_db)):
    """
    Authenticates an admin user and returns a signed JWT.
    Credentials are validated against the database only — no hardcoded fallbacks.
    """
    user = db.query(User).filter(User.email == payload.email).first()

    if not user or not pwd_context.verify(payload.password, user.hashed_password):
        # Log failed attempt (without revealing which field was wrong)
        audit = AuditLog(
            action="LOGIN_FAILED",
            entity_type="AUTH",
            entity_id=None,
            performed_by=payload.email,
            details=f"Failed login from IP: {request.client.host if request.client else 'unknown'}",
        )
        db.add(audit)
        db.commit()
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    token = create_access_token(data={"sub": user.email, "role": user.role, "name": user.name})

    # Log successful login
    audit = AuditLog(
        action="LOGIN_SUCCESS",
        entity_type="AUTH",
        entity_id=str(user.id),
        performed_by=user.email,
        details=f"Login from IP: {request.client.host if request.client else 'unknown'}",
    )
    db.add(audit)
    db.commit()

    return {"access_token": token, "token_type": "bearer"}

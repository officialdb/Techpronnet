"""
JWT Authentication utilities.
- create_access_token: signs a payload and returns a signed JWT
- get_current_admin: FastAPI dependency that validates Bearer tokens on protected routes
"""
import os
from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt

# ── Config ────────────────────────────────────────────────────────────────────

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 8

_SECRET_KEY: Optional[str] = None


def _get_secret() -> str:
    """Lazy-load the JWT secret so the module can be imported before .env is parsed."""
    global _SECRET_KEY
    if _SECRET_KEY is None:
        _SECRET_KEY = os.getenv("JWT_SECRET_KEY", "")
        if not _SECRET_KEY or len(_SECRET_KEY) < 32:
            raise RuntimeError(
                "JWT_SECRET_KEY is missing or too short (min 32 chars). "
                "Set it in backend/.env or your hosting provider's environment config."
            )
    return _SECRET_KEY


# ── Token creation ────────────────────────────────────────────────────────────

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS))
    to_encode.update({"exp": expire, "iat": datetime.utcnow()})
    return jwt.encode(to_encode, _get_secret(), algorithm=ALGORITHM)


# ── Token validation dependency ───────────────────────────────────────────────

_bearer = HTTPBearer(auto_error=True)

_CREDENTIALS_EXCEPTION = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid or expired authentication token.",
    headers={"WWW-Authenticate": "Bearer"},
)


def get_current_admin(
    credentials: HTTPAuthorizationCredentials = Depends(_bearer),
) -> dict:
    """
    Validates the Bearer JWT on every admin route.
    Returns the decoded payload on success.
    Raises 401 if the token is missing, expired, or tampered with.
    Raises 403 if the token role is not ADMIN.
    """
    try:
        payload = jwt.decode(
            credentials.credentials,
            _get_secret(),
            algorithms=[ALGORITHM],
        )
        email: str = payload.get("sub", "")
        role: str = payload.get("role", "")
        if not email:
            raise _CREDENTIALS_EXCEPTION
        if role != "ADMIN":
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions — ADMIN role required.",
            )
        return payload
    except JWTError:
        raise _CREDENTIALS_EXCEPTION

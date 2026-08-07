"""
Backend startup script — run with:  python run.py
Or directly:                         uvicorn app.main:app --reload --port 8000
"""
import os
import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    reload = os.getenv("ENV", "development") != "production"

    print(f"🚀 Starting Techpronnet API on http://0.0.0.0:{port}")
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=port,
        reload=reload,
        log_level="info",
    )

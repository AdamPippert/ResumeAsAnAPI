from pathlib import Path

import yaml
from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware

from .models import Resume

app = FastAPI(
    title="Resume as an API",
    version="2.0.0",
    docs_url="/api/docs",          # interactive Swagger UI
    openapi_url="/api/openapi.json"  # raw OpenAPI spec
)

# CORS: open for now—tighten later if needed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_PATH = Path(__file__).parent / "resume.yaml"


@app.get("/api/resume", response_model=Resume, tags=["resume"])
def get_resume():
    """Return the latest résumé in JSON."""
    data = yaml.safe_load(DATA_PATH.read_text())
    return Resume(**data)


@app.get("/healthz", status_code=status.HTTP_204_NO_CONTENT)
def health():
    """Simple liveness probe."""
    return Response(status_code=status.HTTP_204_NO_CONTENT)

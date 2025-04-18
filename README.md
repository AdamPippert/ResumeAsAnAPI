## ResumeAsAnAPI (updated version with FastAPI)

# Why an API for a résumé?

As a Solutions Architect at Red Hat, I spend my days helping large telecoms automate everything from bare‑metal installs to multi‑cluster OpenShift roll‑outs. Yet my own résumé lived in static PDFs scattered across recruiters’ inboxes. That felt… dated.  Not only that, but a classic CV is all tell and no show, and I prefer learning and experiencing technology in a visual and kinesthetic fashion.

I dusted off a decade‑old company-sponsored side project called "ResumeAsAnAPI" and rebuilt it with modern tooling. Now anyone (including my AI‑powered side projects) can pull the latest version of my résumé with a single HTTP request.

# How it works

Backend: FastAPI + Pydantic (Async, auto‑docs, type safety)

Data: resume.yaml (Human‑editable source of truth as a flat file)

Container: Python 3.12‑slim (A basic, reproducible deployment)

CI/CD: GitHub Actions (Test → Build → Push image)

Frontend: Vanilla JS (Fetch & render résumé on this page quickly)

# Endpoint

GET <https://adampippert.com/api/resume>

Example response (truncated):

{
  "name": "Adam Pippert",
  "headline": "Principal Solutions Architect • Red Hat",
  "skills": ["Ansible", "OpenShift", "Python", "AI agent frameworks"],
  "experience": [
    {
      "company": "Red Hat",
      "title": "Principal Solutions Architect",
      "start": "2018-11",
      "end": "Present",
      "highlights": [
        "Delivered multi‑cluster OpenShift CI/CD for a major US cellular carrier"
      ]
    }
  ]
}

You can explore the full schema at the interactive docs: <https://adampippert.com/api/docs>.

# Why this matters

Single source of truth — I update resume.yaml once, and every consumer (website, recruiters, AI agents) stays in sync.

Show, don’t tell — Serving my résumé as code underscores my commitment to open, automated solutions.

Composable data — Future projects—like automated lead‑gen bots or marketing sites—can ingest my career data programmatically.

# Under the hood

The repo is open‑source: <https://github.com/AdamPippert/ResumeAsAnAPI>. It ships with:

Tests (Pytest + HTTPX) ensuring the contract never breaks.

A Dockerfile for local or cloud deploys.

GitHub Actions that build and push an image on every commit.

Feel free to fork it for your own résumé—just swap out the YAML.

What’s next?

I’m experimenting with AI‑powered résumé tailoring: agents that hit the API, apply job‑specific weighting, and draft bespoke cover letters. Stay tuned.

TL;DR

My résumé now lives at /api/resume and renders right here on the Resume tab on <https://adampippert.com>. It’s live, version‑controlled, and ready for whatever automation comes next.

Need an expert in AI‑driven automation, open‑source infrastructure, or DevOps strategy? Let’s talk.

### Quick start (to try this locally yourself)

```bash
# backend (FastAPI)
uvicorn api.app.main:app --reload
# …then open http://localhost:8000/api/resume

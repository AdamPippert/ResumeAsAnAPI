from httpx import AsyncClient
from api.app.main import app
import pytest

@pytest.mark.asyncio
async def test_resume_endpoint():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        r = await ac.get("/api/resume")
    assert r.status_code == 200
    body = r.json()
    assert body["name"] == "Adam Pippert"

from typing import List, Optional
from pydantic import BaseModel, EmailStr, HttpUrl

class Contact(BaseModel):
    email: EmailStr
    phone: str
    location: str = "Portland, Oregon, USA"
    website: HttpUrl

class Experience(BaseModel):
    company: str
    title: str
    start: str  # YYYY‑MM
    end: Optional[str]  # "Present" allowed
    summary: str
    highlights: List[str]

class Education(BaseModel):
    institution: str
    degree: str
    field: str

class Resume(BaseModel):
    name: str
    headline: str
    contact: Contact
    summary: str
    skills: List[str]
    experience: List[Experience]
    education: List[Education]

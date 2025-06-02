from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Claim(BaseModel):
    id: str
    issue: str
    score: int
    note: str

@app.get("/claims")
def get_claims():
    return [
        {"id": "#10221", "issue": "Duplicate Invoice Detected", "score": 91, "note": "Cross-reference with claim #10119."},
        {"id": "#10235", "issue": "Excessive Claim Frequency", "score": 88, "note": "5 claims in 10 days from same provider."}
    ]

@app.get("/automation-rate")
def get_rate():
    return {"rate": random.randint(70, 90)}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename, "status": "Received"}
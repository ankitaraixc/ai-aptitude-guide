from fastapi import FastAPI, HTTPException, Depends, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
import io
import json

from services.ai_resume import analyze_and_score_resume, provide_career_counseling

app = FastAPI()

origins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users_db = {}
jobs_db = []

def get_current_user(token: str):
    if token != "your-jwt-token":
        raise HTTPException(status_code=401, detail="Unauthorized")
    return {"id": 1, "is_employer": True, "name": "John Doe"}

@app.post("/api/auth/signup")
async def signup(user_data: Dict[str, str]):
    user_id = len(users_db) + 1
    users_db[user_id] = user_data
    return {"message": "User created successfully", "user_id": user_id}

@app.post("/api/auth/login")
async def login(credentials: Dict[str, str]):
    if credentials.get("email") == "test@example.com" and credentials.get("password") == "password":
        return {"message": "Login successful", "token": "your-jwt-token"}
    raise HTTPException(status_code=400, detail="Invalid credentials")

@app.get("/api/jobs")
async def get_jobs():
    return {"jobs": jobs_db}

@app.post("/api/jobs")
async def post_job(job_data: dict, current_user: dict = Depends(get_current_user)):
    if not current_user.get("is_employer"):
        raise HTTPException(status_code=403, detail="Not authorized")
    job_id = len(jobs_db) + 1
    job_data["id"] = job_id
    jobs_db.append(job_data)
    return {"message": "Job posted successfully", "job": job_data}

@app.post("/api/resumes/analyze")
async def analyze_resume_endpoint(resume_file: UploadFile = File(...)):
    """
    Endpoint to upload a resume file and get back an AI analysis.
    """
    try:
        file_contents = await resume_file.read()
        file_stream = io.BytesIO(file_contents)
        
        analysis_result = analyze_and_score_resume(file_stream)
        
        return {"analysis": analysis_result}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/ai/job-match")
async def job_match_endpoint(resume_data: dict, job_description: str):
    match_score = 95
    return {"match_score": match_score}

@app.post("/api/ai/career-counseling")
async def career_counseling_endpoint(analysis_result: Dict[str, Any]):
    """
    Provides career counseling based on a previously obtained analysis result.
    """
    try:
        counseling_advice = provide_career_counseling(analysis_result)
        return {"counseling": counseling_advice}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to provide counseling: {e}")

@app.post("/api/career-counseling/contact")
async def contact_career_advisor(contact_data: Dict[str, str]):
    """
    Endpoint to handle career advisor contact form submission.
    """
    # In a real application, you would implement logic to send an email or notification
    # to a career advisor with the contact_data.
    print(f"Received message for career advisor from {contact_data.get('name')} ({contact_data.get('email')}):")
    print(f"Message: {contact_data.get('message')}")
    
    return {"message": "Your message has been sent to a career advisor. They will get back to you shortly."}
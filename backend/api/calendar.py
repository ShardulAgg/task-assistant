from fastapi import APIRouter
from service_modules import calendar
 
calendar_router = APIRouter()

@calendar_router.get("/")
def fetch_calendar():
    return {"message": "Calendar service is running"}

@calendar_router.post("/date")
def fetch_events(date: str):
    return f"Events for {date}"
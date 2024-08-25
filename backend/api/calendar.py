from fastapi import APIRouter
from service_modules import calendar
 
calendar_router = APIRouter()

@calendar_router.get("/")
def fetch_calendar():
    
    
    return {"status": "ok"}

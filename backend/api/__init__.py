from core import *
from fastapi import APIRouter
from .calendar import calendar_router
from .tasks import assistant_router

app_router = APIRouter()

# Include the calendar and tasks routers
app_router.include_router(calendar_router, prefix="/calendar")
app_router.include_router(assistant_router, prefix="/chat")

@app_router.get("/")
def health_check():
    return {"status": "ok"}

__all__ = ["app_router"]
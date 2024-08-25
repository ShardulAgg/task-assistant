from fastapi import APIRouter
from service_modules import assistant

assistant_router = APIRouter()

@assistant_router.get("/")
def health_check():
    return {"status": "ok"}


@assistant_router.post("chat")
async def chat(user_message: str):
    return await assistant.chat(user_message)
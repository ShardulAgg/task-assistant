from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from service_modules import assistant
from fastapi.responses import JSONResponse

class ChatRequest(BaseModel):
    user_message: str

class ChatResponse(BaseModel):
    response_message: str


assistant_router = APIRouter()

@assistant_router.post("/")
async def chat_endpoint(chat_request: ChatRequest):
    user_message = chat_request.user_message

    # Simple response logic for illustration
    if user_message.lower() == "hello":
        response_message = "Hi there! How can I help you today?"
    else:
        response_message = "I'm not sure how to respond to that."

    return ChatResponse(response_message=response_message)

@assistant_router.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail},
    )
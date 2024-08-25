from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from service_modules import assistant
from fastapi.responses import JSONResponse
from typing import List

class ChatRequest(BaseModel):
    tools: list
    messages: list

class ChatResponse(BaseModel):
    # response_message: str
    messages: List[dict]  # Add this line to include messages in the response

assistant_router = APIRouter()

@assistant_router.post("/")
async def chat_endpoint(chat_request: ChatRequest):
    # Check if there are any messages
    if not chat_request.messages:
        return ChatResponse(response_message="No messages provided.", messages=[])

    # Get the last message
    last_message = chat_request.messages[-1]

    # Extract the content from the last message
    if isinstance(last_message, dict) and 'content' in last_message:
        last_message_content = last_message['content']
    elif isinstance(last_message, list):
        # If it's a list, join all elements into a single string
        last_message_content = ' '.join(map(str, last_message))
    else:
        last_message_content = str(last_message)

    # Simple response logic for illustration
    if isinstance(last_message_content, str) and last_message_content.lower() == "hello":
        response_message = "Hi there! How can I help you today?"
    else:
        response_message = "I'm not sure how to respond to that."

    # Add the new response to the messages
    chat_request.messages.append({"role": "assistant", "content": response_message})

    # Return the response message and the updated messages array
    return JSONResponse(content={"messages": chat_request.messages})


# @assistant_router.exception_handler(HTTPException)
# async def http_exception_handler(request: Request, exc: HTTPException):
#     return JSONResponse(
#         status_code=exc.status_code,
#         content={"message": exc.detail},
#     )
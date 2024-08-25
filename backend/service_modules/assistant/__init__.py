import openai
from .calendar import cal


tools = [
    {
        "type": "function",
        "function": {
            "name": "create_event",
            "description": "Create a new event in the calendar.",
            "parameters": {
                "type": "object",
                "properties": {
                    "event_name": {
                        "type": "string",
                        "description": "The name of the event.",
                    },
                    "event_date": {
                        "type": "string",
                        "description": "The date of the event.",
                    },
                },
                "required": ["event_name", "event_date"],
                "additionalProperties": False,
            },
        }
    },
    {
        "type": "function",
        "function": {
            "name": "update_event",
            "description": "Update an existing event in the calendar.",
            "parameters": {
                "type": "object",
                "properties": {
                    "event_id": {
                        "type": "string",
                        "description": "The ID of the event to update.",
                    },
                    "new_event_name": {
                        "type": "string",
                        "description": "The new name of the event.",
                    },
                    "new_event_date": {
                        "type": "string",
                        "description": "The new date of the event.",
                    },
                },
                "required": ["event_id"],
                "additionalProperties": False,
            },
        }
    },
    {
        "type": "function",
        "function": {
            "name": "rearrange_tasks",
            "description": "Rearrange tasks in the calendar.",
            "parameters": {
                "type": "object",
                "properties": {
                    "task_list": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description": "The list of tasks to rearrange.",
                        },
                    },
                },
                "required": ["task_list"],
                "additionalProperties": False,
            },
        }
    }
]



async def chat(messages: list[str], user_id: str) -> str:
    response = await openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": messages[-1]}
        ]
    )

    function_call = response['choices'][0]['message'].get('function_call')
    
    if function_call:
        function_name = function_call['name']
        function_args = function_call['arguments']

        if function_name == "create_event":
            return cal.create_event(**function_args)
        elif function_name == "update_event":
            function_args['event_id'] = user_id  # Derive event_id from user_id
            return cal.update_event(**function_args)
        elif function_name == "rearrange_tasks":
            return cal.rearrange_tasks(**function_args)
        else:
            return "Function not recognized"
    else:
        return response['choices'][0]['message']['content']


__all__ = ["chat"]
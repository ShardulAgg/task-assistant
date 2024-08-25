from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials

class Calendar:
    def __init__(self):
        pass
    
    async def create_event(event_name: str, date_time: str, token: str):
        credentials = Credentials(token)
        service = build('calendar', 'v3', credentials=credentials)
        
        event = {
            'summary': event_name,
            'start': {
                'dateTime': date_time,
                'timeZone': 'UTC',
            },
            'end': {
                'dateTime': date_time,  # You might want to add duration logic
                'timeZone': 'UTC',
            },
            'location': 'Conference Room',
        }
        
        created_event = await service.events().insert(calendarId='primary', body=event).execute()
        
        return {
            "event_name": created_event['summary'],
            "start_date": created_event['start']['dateTime'],
            "event_type": "Meeting",
            "location": created_event['location']
        }

cal = Calendar()

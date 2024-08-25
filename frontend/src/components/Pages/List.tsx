import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

interface Event {
  id: number;
  time: string;
  title: string;
}

const DailySchedule: React.FC = () => {
  const events: Event[] = [
    { id: 1, time: '09:00', title: 'Morning Meeting' },
    { id: 2, time: '11:30', title: 'Project Review' },
    { id: 3, time: '14:00', title: 'Client Call' },
    { id: 4, time: '16:30', title: 'Team Sync' },
  ];

  return (
    <Paper elevation={3} style={{ maxWidth: 400, margin: 'auto', padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Today's Schedule
      </Typography>
      <List>
        {events.map((event) => (
          <ListItem key={event.id}>
            <ListItemText
              primary={event.title}
              secondary={event.time}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default DailySchedule;
import React from 'react';
import { List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Event } from './types';

interface TaskListProps {
    events: Event[];
    onDeleteEvent: (id: number) => void;
    onAddTaskClick: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ events, onDeleteEvent, onAddTaskClick }) => {
    return (
        <List>
            <ListItem>
                <Button
                    startIcon={<AddIcon />}
                    onClick={onAddTaskClick}
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{marginBottom: 5}}
                >
                    Add Task
                </Button>
            </ListItem>
            {events.map((event) => (
                <ListItem key={event.id} sx={{boxShadow:4}}>
                    <ListItemText
                        primary={event.name}
                        secondary={`${event.type} - ${event.duration} min - ${event.priority} priority - Due: ${event.due_date.format('MM/DD/YYYY')}`}
                    />
                    <IconButton edge="end" aria-label="delete" onClick={() => onDeleteEvent(event.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
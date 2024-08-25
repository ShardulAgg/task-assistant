import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import { Event } from './types';

interface TaskListProps {
    events: Event[];
    onDeleteEvent: (id: number) => void;
    onAddTaskClick: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ events, onDeleteEvent, onAddTaskClick }) => {

    const [sortOption, setSortOption] = useState<'priority' | 'dueDate'>('priority');

    const sortedEvents = [...events].sort((a, b) => {
        if (sortOption === 'priority') {
            const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        } else {
            return a.due_date.diff(b.due_date);
        }
    });


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
            {/* <ListItem>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginBottom: 2 }}>
                    <FormControl sx={{ minWidth: 120, marginRight: 2 }}>
                        <InputLabel>Task Type</InputLabel>
                        <Select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as 'priority' | 'dueDate')}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="work">Work</MenuItem>
                            <MenuItem value="personal">Personal</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as 'priority' | 'dueDate')}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="low">Low</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </ListItem> */}
            {events
                .sort((a, b) => {
                    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
                    return priorityOrder[b.priority] - priorityOrder[a.priority];
                })
                .map((event) => (
                <ListItem 
                key={event.id} 
                sx={{
                    boxShadow: 4,
                    backgroundColor: event.priority === 'High' ? '#ffcccb' :
                                     event.priority === 'Medium' ? '#ffffcc' :
                                     '#ccffcc'
                }}
            >
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
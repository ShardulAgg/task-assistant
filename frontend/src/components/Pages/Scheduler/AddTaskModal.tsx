import React, { useState } from 'react';
import { Typography, TextField, Select, MenuItem, Button, Modal, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Event, TaskType, PriorityLevel, taskTypes, priorityLevels } from './types';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddEvent: (event: Event) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAddEvent }) => {
    const [newEvent, setNewEvent] = useState<Event>({
        id: 0,
        duration: 0,
        priority: 'Medium',
        name: '',
        type: 'Code',
        due_date: dayjs(),
    });

    const handleAddEvent = () => {
        onAddEvent(newEvent);
        setNewEvent({ ...newEvent, name: '', type: 'Code', duration: 0 });
        onClose();
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="add-task-modal"
            aria-describedby="modal-to-add-new-task"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Add New Task
                </Typography>
                <TextField
                    label="Task Name"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <Select
                    label="Task Type"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as TaskType })}
                    fullWidth
                    margin="dense"
                >
                    {taskTypes.map((type) => (
                        <MenuItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</MenuItem>
                    ))}
                </Select>
                <TextField
                    label="Duration (minutes)"
                    type="number"
                    value={newEvent.duration}
                    onChange={(e) => setNewEvent({ ...newEvent, duration: parseInt(e.target.value) })}
                    fullWidth
                    margin="normal"
                />
                <Select
                    value={newEvent.priority}
                    onChange={(e) => setNewEvent({ ...newEvent, priority: e.target.value as PriorityLevel })}
                    fullWidth
                    margin="dense"
                >
                    {priorityLevels.map((priority) => (
                        <MenuItem key={priority} value={priority}>{priority}</MenuItem>
                    ))}
                </Select>
                <DatePicker
                    label="Due Date"
                    value={newEvent.due_date}
                    onChange={(newValue) => setNewEvent({ ...newEvent, due_date: newValue || dayjs() })}
                    sx={{ mt: 2, mb: 2 }}
                />
                <Button onClick={handleAddEvent} variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
                    Add Task
                </Button>
            </Box>
        </Modal>
    );
};

export default AddTaskModal;
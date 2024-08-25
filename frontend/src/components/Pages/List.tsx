import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Button, TextField, Select, MenuItem, IconButton, Modal, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import dayjs, { Dayjs } from 'dayjs';

const taskTypes = ['Code', 'Research', 'Chore', 'Message', 'Marketing', 'Learn', 'Design', 'Sales'] as const;
const priorityLevels = ['Low', 'Medium', 'High'] as const;

type TaskType = typeof taskTypes[number];
type PriorityLevel = typeof priorityLevels[number];

interface Event {
    id: number;
    duration: number;
    priority: PriorityLevel;
    name: string;
    type: TaskType;
    due_date: Dayjs;
}

const DailySchedule: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [events, setEvents] = useState<Event[]>([]);
    const [newEvent, setNewEvent] = useState<Event>({
        id: 0,
        duration: 0,
        priority: 'Medium',
        name: '',
        type: 'Code',
        due_date: dayjs(),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddEvent = () => {
        setEvents([...events, { ...newEvent, id: Date.now() }]);
        setNewEvent({ ...newEvent, name: '', type: 'Code', duration: 0 });
        setIsModalOpen(false);
    };

    const handleDeleteEvent = (id: number) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                />
            </Box>
            <Paper elevation={3} style={{ maxWidth: 1600, margin: 'auto', padding: 16 }}>
                <Typography variant="h6" gutterBottom>
                    Today's Schedule
                </Typography>
                <List>
                    <ListItem>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={() => setIsModalOpen(true)}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Add Task
                        </Button>
                    </ListItem>
                    {events.map((event) => (
                        <ListItem key={event.id}>
                            <ListItemText
                                primary={event.name}
                                secondary={`${event.type} - ${event.duration} min - ${event.priority} priority - Due: ${event.due_date.format('MM/DD/YYYY')}`}
                            />
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEvent(event.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
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
        </LocalizationProvider>
    );
};

export default DailySchedule;
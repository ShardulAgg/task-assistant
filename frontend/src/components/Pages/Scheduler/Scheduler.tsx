import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import Header from './Header';
import TaskList from './Tasks';
import AddTaskModal from './AddTaskModal';
import { Event } from './types';

const Scheduler: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [events, setEvents] = useState<Event[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddEvent = (newEvent: Event) => {
        setEvents([...events, { ...newEvent, id: Date.now() }]);
        setIsModalOpen(false);
    };

    const handleDeleteEvent = (id: number) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <Paper elevation={3} style={{ maxWidth: 1600, margin: 'auto', padding: 16 }}>
                <TaskList 
                    events={events} 
                    onDeleteEvent={handleDeleteEvent} 
                    onAddTaskClick={() => setIsModalOpen(true)} 
                />
            </Paper>
            <AddTaskModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onAddEvent={handleAddEvent} 
            />
        </LocalizationProvider>
    );
};

export default Scheduler;
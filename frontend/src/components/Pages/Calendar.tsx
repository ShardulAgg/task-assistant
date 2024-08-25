import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Paper, Typography, IconButton } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import EditIcon from '@mui/icons-material/Edit';

interface Event {
    id: number;
    title: string;
    date: Date;
    color: string;
}

const events: Event[] = [
    { id: 1, title: 'Meeting', date: new Date(2024, 7, 5), color: '#ff9800' },
    { id: 2, title: 'Lunch', date: new Date(2024, 7, 5), color: '#4caf50' },
    { id: 3, title: 'Project Deadline', date: new Date(2024, 7, 12), color: '#f44336' },
];

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

    const filteredEvents = events.filter(
        (event) => dayjs(event.date).isSame(selectedDate, 'day')
    );

    const handleEditEvent = (id: number) => {
        // Implement edit functionality here
        console.log(`Editing event with id: ${id}`);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <StaticDatePicker
                    value={selectedDate}
                    onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
                    orientation="landscape"
                    slots={{
                        day: (dayProps: PickersDayProps<Dayjs>) => {
                            const day = dayProps.day;
                            const eventCount = events.filter(event => dayjs(event.date).isSame(day, 'day')).length;
                            return (
                                <Box sx={{ position: 'relative' }}>
                                    <PickersDay {...dayProps} />
                                    {eventCount > 0 && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                bgcolor: '#ff7961',
                                                color: 'white',
                                                borderRadius: '10%',
                                                width: 24,
                                                height: 12,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.5rem',
                                            }}
                                        >
                                            {eventCount}
                                        </Box>
                                    )}
                                </Box>
                            );
                        }
                    }}
                />
                <Paper elevation={3} sx={{ mt: 2, p: 2, width: '100%', maxWidth: 1600 }}>
                    <Typography variant="h6">Events for {selectedDate?.format('MMMM D, YYYY')}</Typography>
                    <List>
                        {filteredEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{ bgcolor: event.color, mb: 1, borderRadius: 1 }}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEditEvent(event.id)}>
                                        <EditIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={event.title} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </LocalizationProvider>
    );
};
export default Calendar;
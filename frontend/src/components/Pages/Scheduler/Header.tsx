import React from 'react';
import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
interface HeaderProps {
    selectedDate: Dayjs | null;
    setSelectedDate: (date: Dayjs | null) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedDate, setSelectedDate }) => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                />
            </Box>
            <Typography variant="h6" gutterBottom>
                Today's Schedule
            </Typography>
        </>
    );
};

export default Header;
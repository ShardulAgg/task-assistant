import { 
    Toolbar, 
    Typography, 
  } from '@mui/material';
  import { styled } from '@mui/system';
  import { Route, Routes } from 'react-router-dom';
  
import DailySchedule from '../Pages/List';
import Calendar from '../Pages/Calendar';
import Scheduler from '../Pages/Scheduler/Scheduler';
  const StyledContent = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 0,
    backgroundColor: '#f9f9f9', // Very light grey background
  }));
  
  function Home() {
    return <Typography paragraph>Home content goes here.</Typography>;
  }
  
  function About() {
    return <Typography paragraph>About content goes here.</Typography>;
  }
  
  function Content() {
    return (
      <StyledContent>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Scheduler />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </StyledContent>
    );
  }
  
  export default Content;
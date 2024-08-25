import { 
    Toolbar, 
    Typography, 
  } from '@mui/material';
  import { styled } from '@mui/system';
  import { Route, Routes } from 'react-router-dom';
  
import DailySchedule from '../Pages/List';
import Calendar from '../Pages/Calendar';

  const StyledContent = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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
          <Route path="/" element={<DailySchedule />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </StyledContent>
    );
  }
  
  export default Content;
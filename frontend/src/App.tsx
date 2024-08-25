import {
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/system';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './components/Layout/AppHeader';
import SideDrawer from './components/Layout/SideDrawer';
import Content from './components/Layout/Content';
import Assistant from './components/Layout/Assistant';

const Root = styled('div')({
  display: 'flex',
});





function App() {
  return (
    <Root>
      <Router>
        <CssBaseline />
        <AppHeader />
        {/* <SideDrawer /> */}
        <Content />
        <Assistant />
      </Router>
    </Root>
  );
}

export default App;
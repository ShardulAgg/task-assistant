import React from 'react';
import { 
    AppBar, Toolbar, IconButton, Typography
  } from '@mui/material';
import { styled } from '@mui/system';
import { Theme, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

function AppHeader() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const location = useLocation();
    const AppBarStyled = styled(AppBar)<{ theme: Theme }>(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
      }));
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };
    
    const getHeaderText = () => {
      switch(location.pathname) {
        case '/calendar':
          return 'Calendar';
        case '/':
          return 'Task List App';
        default:
          return 'My App';
      }
    }

    return (
        <AppBarStyled position="fixed" theme={theme}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {getHeaderText()}
          </Typography>
        </Toolbar>
      </AppBarStyled>
  );
}

export default AppHeader;
import React, { useState, useEffect } from 'react';
import { 
    AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, TextField, Button
  } from '@mui/material';
import { styled } from '@mui/system';
import { Theme, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation } from 'react-router-dom';

function AppHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mongoDbUri, setMongoDbUri] = useState('');
    const [openAiKey, setOpenAiKey] = useState('');
    const theme = useTheme();
    const location = useLocation();
    const AppBarStyled = styled(AppBar)<{ theme: Theme }>(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
      }));

    useEffect(() => {
      const savedMongoDbUri = localStorage.getItem('mongoDbUri');
      const savedOpenAiKey = localStorage.getItem('openAiKey');
      if (savedMongoDbUri) setMongoDbUri(savedMongoDbUri);
      if (savedOpenAiKey) setOpenAiKey(savedOpenAiKey);
    }, []);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    
    const handleConfigureClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleConfigureClose = () => {
      setAnchorEl(null);
    };

    const handleSaveConfig = () => {
      localStorage.setItem('mongoDbUri', mongoDbUri);
      localStorage.setItem('openAiKey', openAiKey);
      handleConfigureClose();
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
          <IconButton
            color="inherit"
            aria-label="configure"
            onClick={handleConfigureClick}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleConfigureClose}
            PaperProps={{
              style: {
                width: '250px',
              },
            }}
          >
            <MenuItem>
              <TextField
                label="MongoDB URI"
                value={mongoDbUri}
                onChange={(e) => setMongoDbUri(e.target.value)}
                fullWidth
                margin="dense"
                size="small"
              />
            </MenuItem>
            <MenuItem>
              <TextField
                label="OpenAI API Key"
                value={openAiKey}
                onChange={(e) => setOpenAiKey(e.target.value)}
                fullWidth
                margin="dense"
                size="small"
              />
            </MenuItem>
            <MenuItem>
              <Button
                onClick={handleSaveConfig}
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBarStyled>
  );
}

export default AppHeader;
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListIcon from "@mui/icons-material/List";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

function SideDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
      
    const DrawerStyled = styled(Drawer)({
      width: drawerWidth,
      flexShrink: 0,
    });

    const drawer = (
        <div>
          <Toolbar />
          <List>
            {[
              { text: 'Task List', icon: <TodayIcon />, path: '/' },
              { text: 'Calendar', icon: <CalendarMonthIcon />, path: '/calendar' },
              { text: 'Starred', icon: <ListIcon />, path: '/starred' }
            ].map((item) => (
              <ListItem button key={item.text} component={RouterLink} to={item.path}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
    );
    
    return (
        <div>
          <DrawerStyled
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            {drawer}
          </DrawerStyled>
          <DrawerStyled
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
            open
          >
            {drawer}
          </DrawerStyled>
        </div>
    );
}

export default SideDrawer;
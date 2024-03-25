import {
  AccountBoxOutlined,
  Home,
  HomeOutlined,
  Inbox,
  ModeNightOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const MuiFirstItem = ({ icon, url, text }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <MuiFirstItem icon={<HomeOutlined />} url="#home" text="Home" />
          <MuiFirstItem
            icon={<SettingsOutlined />}
            url="#settings"
            text="Settings"
          />
          <MuiFirstItem
            icon={<AccountBoxOutlined />}
            url="#profile"
            text="Profile"
          />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNightOutlined />
              </ListItemIcon>
              <Switch
                onChange={() =>
                  setMode((mode) => (mode === "light" ? "dark" : "light"))
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

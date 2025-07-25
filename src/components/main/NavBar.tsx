'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavBar({ open, onClose }: DrawerProps) {
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Tab' || e.key === 'Shift') return;
        onClose();
      }}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, idx) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, idx) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose} >
      {list}
    </Drawer>
  );
}

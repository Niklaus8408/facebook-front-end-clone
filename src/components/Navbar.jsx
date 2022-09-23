import { AppBar, Box, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "Center"
}))

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Facebook</Typography>
        <FacebookIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search ..." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <MailIcon color="white" />
          </Badge>

          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white" />
          </Badge>

          <Avatar 
          alt="Aniket Tayade" 
          src="/assets/avatar.jpg" 
          style={{width:"30px", height:"30px" }} 
          onClick={(e) => setOpen(true)}
          />

        </Icons>
      </StyledToolbar>

      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}

      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Friends</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
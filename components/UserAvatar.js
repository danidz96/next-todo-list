import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core';
import { logoutUser } from '../firebase/firebase';

const useStyles = makeStyles(() => ({
  displayName: {
    fontSize: '16px',
    marginRight: '5px',
  },
}));

const UserAvatar = ({ user }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logoutUser();
    handleClose();
  };

  return (
    <>
      <ButtonBase
        aria-label="current user account"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {user.photoURL ? (
          <>
            <p className={classes.displayName}>{user.displayName}</p>
            <Avatar alt={user.displayName} src={user.photoURL} />
          </>
        ) : (
          <Avatar>{user.displayName}</Avatar>
        )}
      </ButtonBase>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;

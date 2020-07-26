import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import ContentLoader from 'react-content-loader';
import { makeStyles } from '@material-ui/core';
import { logoutUser } from '../firebase/firebase';
import { useAuth } from '../hooks/useAuth';

const useStyles = makeStyles(() => ({
  displayName: {
    fontSize: '16px',
    marginRight: '5px',
  },
}));

const UserAvatar = ({ user, loading }) => {
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
      {loading ? (
        <ContentLoader
          rtl
          height={60}
          width={207}
          speed={2}
          foregroundColor="rgba(255, 255, 255, 0.2)"
          backgroundOpacity="0.1"
        >
          <circle cx="31.400000000000002" cy="29.53" r="23.400000000000002" />
          <rect x="19" y="26.27" rx="2" ry="2" width="0" height="0" />
          <rect x="66" y="19.27" rx="2" ry="2" width="124" height="22" />
        </ContentLoader>
      ) : (
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
      )}
    </>
  );
};

export default UserAvatar;

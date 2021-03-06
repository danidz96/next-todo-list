import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Router from 'next/router';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import UserAvatar from '../components/UserAvatar';
import { useAuth } from '../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  title: {
    cursor: 'pointer',
    display: 'flex',
  },
  icon: {
    fontSize: theme.typography.h4.fontSize,
    alignSelf: 'center',
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [user, loading] = useAuth();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <Typography variant="h6" className={classes.title}>
            <Icon className={classes.icon}>list_alt</Icon>
            Next.js Todo List
          </Typography>
        </Link>
        {!user && !loading ? (
          <Button onClick={() => Router.push('/')} color="inherit">
            Login
          </Button>
        ) : (
          <UserAvatar user={user} loading={loading} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

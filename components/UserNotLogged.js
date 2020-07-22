import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    padding: '15px 20px',
    margin: theme.spacing(3, 0),
  },
}));

const UserNotLogged = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop="50px"
      >
        <h1 className={classes.title}>You&apos;re not logged</h1>
        <img width="100%" src="/login.svg" alt="login" />
        <Button
          onClick={() => Router.push('/login')}
          className={classes.loginButton}
          variant="contained"
          color="primary"
        >
          <span>Login</span>
        </Button>
        <p className={classes.info}>
          Join to Next TODO List and plan your pending tasks.
        </p>
        <p className={classes.info}>
          You can assign tasks to your team or do it yourself.
        </p>
      </Box>
    </Container>
  );
};

export default UserNotLogged;

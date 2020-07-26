import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 150px)',
  },
  loader: {
    margin: theme.spacing(4),
  },
}));

const Spinner = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      {children}
      <div className={classes.loader}>
        <CircularProgress color="primary" {...props} />
      </div>
    </div>
  );
};

export default Spinner;

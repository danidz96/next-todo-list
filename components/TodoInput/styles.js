import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  addProgress: {
    position: 'absolute',
    top: 3,
    left: 0,
    zIndex: 1,
  },
  inputTodo: {
    padding: 20,
    width: '100%',
  },
}));

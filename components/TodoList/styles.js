import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  todoListItem: {
    padding: '10px 0',
    width: '100%',
    '&:before': {
      borderBottom: '0px',
    },
  },
  todoCompleted: {
    textDecoration: 'line-through',
  },
}));

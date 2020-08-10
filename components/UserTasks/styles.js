import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  userTasksContainer: {
    backgroundColor: 'white',
  },
  totalItemsText: {
    paddingLeft: 10,
    marginRight: 6,
    color: '#999999',
    textAlign: 'start',
  },
  footer: {
    display: 'flex',
  },
}));

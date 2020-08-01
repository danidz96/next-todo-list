import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const TodoList = ({ items }) => (
  <div>
    <List className="classes.root">
      {items.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;
        return (
          <ListItem key={todo.id} role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <Input
              id={labelId}
              value={todo.todo}
              placeholder="Edit todo item.."
              inputProps={{ 'aria-label': 'description' }}
            />
            <ListItemSecondaryAction>
              <Tooltip title="Delete">
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon color="error" />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  </div>
);

TodoList.propTypes = {
  items: PropTypes.array,
};

export default TodoList;

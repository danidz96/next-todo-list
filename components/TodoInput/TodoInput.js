import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SendRounded from '@material-ui/icons/SendRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useInputValue } from '../../hooks/useInputValue';
import { useStyles } from './styles';

const TodoInput = ({ addLoading, onAdd }) => {
  const classes = useStyles();
  const { value: todo, onChange } = useInputValue(null);

  const handleAddTodo = (e) => {
    onAdd(todo);
    onChange('');
  };

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="todo-input">
        Type here to add a new task...
      </InputLabel>
      <Input
        id="todo-input"
        onChange={onChange}
        onKeyPress={(event) => event.key === 'Enter' && handleAddTodo()}
        value={todo}
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title="Send Todo">
              <IconButton aria-label="Send Todo" onClick={handleAddTodo}>
                <div>
                  <SendRounded>list_alt</SendRounded>
                  {addLoading && (
                    <CircularProgress
                      size={42}
                      className={classes.addProgress}
                    />
                  )}
                </div>
              </IconButton>
            </Tooltip>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

TodoInput.propTypes = {
  addLoading: PropTypes.bool,
  onAdd: PropTypes.func,
};

export default TodoInput;

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SendRounded from '@material-ui/icons/SendRounded';

const TodoInput = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="todo-input">Type here to add a new task...</InputLabel>
    <Input
      id="todo-input"
      endAdornment={
        <InputAdornment position="end">
          <Tooltip title="Send Todo">
            <IconButton aria-label="Send Todo">
              <div>
                <SendRounded>list_alt</SendRounded>
              </div>
            </IconButton>
          </Tooltip>
        </InputAdornment>
      }
    />
  </FormControl>
);

export default TodoInput;

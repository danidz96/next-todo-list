import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SendRounded from '@material-ui/icons/SendRounded';
import { useInputValue } from '../../hooks/useInputValue';
import { saveData } from '../../firebase/firebase';

const TodoInput = () => {
  const { value: todo, onChange } = useInputValue(null);

  const handleClick = async () => {
    try {
      const a = await saveData({
        collection: 'todos',
        data: { todo },
      });
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="todo-input">
        Type here to add a new task...
      </InputLabel>
      <Input
        id="todo-input"
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title="Send Todo">
              <IconButton aria-label="Send Todo" onClick={handleClick}>
                <div>
                  <SendRounded>list_alt</SendRounded>
                </div>
              </IconButton>
            </Tooltip>
          </InputAdornment>
        }
      />
      {todo}
    </FormControl>
  );
};

export default TodoInput;

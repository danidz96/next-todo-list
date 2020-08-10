import { useState, useEffect, useCallback } from 'react';
import { Box } from '@material-ui/core';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import { saveData, getData, deleteData } from '../../firebase/firebase';
import { useStyles } from './styles';

const UserTasks = () => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userTodos, setUserTodos] = useState([]);

  const classes = useStyles();

  const fetchTodosData = async () => {
    setLoading(true);
    const todos = await getData({ collection: 'todos' });
    setUserTodos(todos);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodosData();
  }, []);

  const handleAdd = async (todo) => {
    setLoadingAdd(true);
    try {
      const todoResponse = await saveData({
        collection: 'todos',
        data: { todo },
      });
      setUserTodos([...userTodos, todoResponse]);

      setLoadingAdd(false);
    } catch (error) {
      console.log(error);
      setLoadingAdd(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData({
        collection: 'todos',
        id,
      });
      const updatedUserTodos = userTodos.filter((todo) => todo.id !== id);
      setUserTodos(updatedUserTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleComplete = async (id) => {
    const updatedUserTodos = userTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setUserTodos(updatedUserTodos);
    const selectedTodo = userTodos.find((todo) => todo.id === id);
    try {
      await saveData({
        collection: 'todos',
        data: { ...selectedTodo, completed: !selectedTodo.completed },
        id,
      });

      setLoadingAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompletedTodoCount = useCallback(
    () => userTodos.filter((todo) => todo.completed === true).length,
    [userTodos]
  );

  return (
    <Box
      className={classes.userTasksContainer}
      boxShadow={2}
      borderRadius="5px"
    >
      <TodoInput onAdd={handleAdd} addLoading={loadingAdd} />
      <TodoList
        items={userTodos}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
      <Box className={classes.footer}>
        <p className={classes.totalItemsText}>
          Total tasks: {userTodos.length}
        </p>
        <p className={classes.totalItemsText}>
          Completed tasks: {getCompletedTodoCount()}
        </p>
      </Box>
    </Box>
  );
};

export default UserTasks;

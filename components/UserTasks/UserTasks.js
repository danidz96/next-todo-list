import { useState, useEffect } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import { saveData, getData, deleteData } from '../../firebase/firebase';

const UserTasks = () => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userTodos, setUserTodos] = useState([]);

  const fetchTodosData = async () => {
    setLoading(true);
    const todos = await getData({ collection: 'todos' });
    console.log({ todos });
    setUserTodos(todos);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodosData();
  }, []);

  const handleAdd = async (todo) => {
    setLoadingAdd(true);
    try {
      await saveData({
        collection: 'todos',
        data: { todo },
      });
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

  return (
    <div>
      <TodoInput onAdd={handleAdd} addLoading={loadingAdd} />
      <TodoList items={userTodos} onDelete={handleDelete} />
    </div>
  );
};

export default UserTasks;

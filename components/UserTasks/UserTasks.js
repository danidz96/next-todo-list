import { useState } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import { saveData } from '../../firebase/firebase';

const UserTasks = () => {
  const [loading, setLoading] = useState(false);

  const handleAdd = async (todo) => {
    setLoading(true);
    try {
      await saveData({
        collection: 'todos',
        data: { todo },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <TodoInput onAdd={handleAdd} addLoading={loading} />
    </div>
  );
};

export default UserTasks;

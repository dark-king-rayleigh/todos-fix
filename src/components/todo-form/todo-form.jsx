import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAddTodo = () => {
    // Fin an ability to add new task
    if (task.trim().length === 0) {
      setError('Task is required');
      return;
    }
    setTodos([...todos, { id: todos.length, label: task, checked: false }]);
    setTask('');
    setError('');
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  React.useEffect(() => {
    if (task.trim().length > 0) {
      setError('');
    }
  }, [task]);

  return (
    <>
      <div className="todo-form">
        <div>
          <input
            placeholder="Enter new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyUp={handleKeyUp}
            className={`${error && 'error-input'}`}
          />
          {error && <div className="error-text">{error}</div>}
        </div>
        <button type="button" onClick={handleAddTodo}>
          Add task
        </button>
      </div>
    </>
  );
};

import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = React.useCallback(() => {
    // Fix an ability to calculate completed tasks
    const completedTasks = todos.filter((todo) => todo.checked);
    return completedTasks.length;
  }, [todos]);

  React.useEffect(() => {
    calculateChecked();
  }, [calculateChecked]);

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};

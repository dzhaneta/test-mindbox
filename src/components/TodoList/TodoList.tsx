import {Todo} from '../TodoApp/TodoApp';

interface TodoListProps {
  todos: Todo[];
  toggleTodoStatus: (id: number) => void;
}

function TodoList({ todos, toggleTodoStatus }: TodoListProps) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={todo.completed}
              onChange={() => toggleTodoStatus(todo.id)}
            />
            <label
              className={`form-check-label ${todo.completed ? 'completed' : ''}`}
            >
              {todo.task}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

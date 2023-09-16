import { useState, useEffect } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            return JSON.parse(storedTodos);
        }
        return [];
    }
    );
    const [filter, setFilter] = useState<string | null>(() => {
        const savedFilter = localStorage.getItem('filter');
        return savedFilter || null;
    });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (filter) {
      localStorage.setItem('filter', filter);
    } else {
      localStorage.removeItem('filter');
    }
  }, [filter]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const itemCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="container mt-5">
      <h1>todos</h1>
      <TodoInput addTodo={addTodo} />
      <div className="my-2">
        <button className={`btn btn-primary mx-1 ${filter === null ? 'active' : ''}`} onClick={() => setFilter(null)}>
          All
        </button>
        <button
          className={`btn btn-primary mx-1 ${filter === 'incomplete' ? 'active' : ''}`}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
        <button
          className={`btn btn-primary mx-1 ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button className="btn btn-danger mx-1" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
      <p className="mt-2">{itemCount} item{itemCount !== 1 ? 's' : ''} left</p>
      <TodoList todos={filteredTodos()} toggleTodoStatus={toggleTodoStatus} />
    </div>
  );
}

export default TodoApp;

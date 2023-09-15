import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (task: string) => void;
}

function TodoInput({ addTodo }: TodoInputProps) {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoInput;

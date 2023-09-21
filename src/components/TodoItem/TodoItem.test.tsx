import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

const mockTodo = {
  id: 1,
  task: 'Test Task',
  completed: false,
};

describe('TodoItem Component', () => {
  it('renders the task label correctly', () => {
    render(<TodoItem todo={mockTodo} toggleTodoStatus={() => {}} />);
    const taskLabel = screen.getByText('Test Task');

    expect(taskLabel).toBeInTheDocument();
  });

  it('calls the toggleTodoStatus function when the checkbox is clicked', () => {
    const toggleTodoStatusMock = jest.fn();
    render(<TodoItem todo={mockTodo} toggleTodoStatus={toggleTodoStatusMock} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(toggleTodoStatusMock).toHaveBeenCalledWith(mockTodo.id);
  });

  it('applies a line-through style to the task label when the task is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(<TodoItem todo={completedTodo} toggleTodoStatus={() => {}} />);
    const taskLabel = screen.getByDisplayValue('Test Task');

    const computedStyle = window.getComputedStyle(taskLabel);
    expect(computedStyle).toBe('line-through');
  });

  it('does not apply a line-through style to the task label when the task is not completed', () => {
    render(<TodoItem todo={mockTodo} toggleTodoStatus={() => {}} />);
    const taskLabel = screen.getByText('Test Task');

    expect(taskLabel).not.toHaveStyle('text-decoration: line-through');
  });
});

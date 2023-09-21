import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

const mockTodo = {
  id: 1,
  task: 'Test Task',
  completed: false,
};

describe('TodoItem Component', () => {
  it('renders task label correctly', () => {
    render(<TodoItem todo={mockTodo} toggleTodoStatus={() => {}} />);
    const taskLabel = screen.getByText('Test Task');

    expect(taskLabel).toBeInTheDocument();
  });

  it('calls toggleTodoStatus function when the checkbox is clicked', () => {
    const toggleTodoStatusMock = jest.fn();
    render(<TodoItem todo={mockTodo} toggleTodoStatus={toggleTodoStatusMock} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(toggleTodoStatusMock).toHaveBeenCalledWith(mockTodo.id);
  });
});

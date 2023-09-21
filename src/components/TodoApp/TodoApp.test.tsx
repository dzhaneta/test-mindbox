import { render, fireEvent, screen } from '@testing-library/react';
import TodoApp from './TodoApp';

beforeEach(() => {
  localStorage.clear();
});

describe('TodoApp Component', () => {
  it('adds a new todo when a task is submitted', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByLabelText('submit');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('New Task');
    expect(todoItem).toBeInTheDocument();
  });

  it('toggles the completed status of a todo when clicked', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByLabelText('submit');

    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox');

    fireEvent.click(taskCheckbox);

    expect(taskCheckbox).toBeChecked();

    fireEvent.click(taskCheckbox);

    expect(taskCheckbox).not.toBeChecked();
  });

  it('clears completed todos when "Clear completed" button is clicked', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByLabelText('submit');

    fireEvent.change(input, { target: { value: 'Completed Task' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('Completed Task');
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);

    expect(todoItem).not.toBeInTheDocument();
  });

  it('filters todos when filter buttons are clicked', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByLabelText('submit');
    const incompleteButton = screen.getByTestId('filter-incomplete');
    const completedButton = screen.getByTestId('filter-completed');

    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);

    // const todoItem = screen.getByText('Test Task');
    const checkbox = screen.getByRole('checkbox');

    // Помечаем задачу как выполненную
    fireEvent.click(checkbox);

    // Включаем фильтр "невыполненные"
    fireEvent.click(incompleteButton);

    // Ожидается, что элемент больше не будет найден
    expect(screen.queryByText('Test Task')).toBeNull();

    // Включаем фильтр "выполненные"
    fireEvent.click(completedButton);

    // Ожидается, что элемент будет найден
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});

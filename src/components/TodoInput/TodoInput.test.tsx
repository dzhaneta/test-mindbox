import { render, fireEvent, screen } from '@testing-library/react';
import TodoInput from './TodoInput';

describe('TodoInput Component', () => {
  it('renders input with the correct placeholder', () => {
    render(<TodoInput addTodo={() => {}} />);
    const inputElement = screen.getByPlaceholderText('What needs to be done?');

    expect(inputElement).toBeInTheDocument();
  });

  it('calls addTodo function when the form is submitted with a non-empty input', () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);
    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    const submitButton = screen.getByLabelText('submit');

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.click(submitButton);

    expect(addTodoMock).toHaveBeenCalledWith('Test Task');
  });

  it('does not call addTodo function when the form is submitted with an empty input', () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);
    const submitButton = screen.getByLabelText('submit');

    fireEvent.click(submitButton);

    expect(addTodoMock).not.toHaveBeenCalled();
  });
});

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import type { Todo } from '../TodoApp/TodoApp';
import baseTheme from '../../styles/theme';
import CheckIcon from '../../vendor/images/icon-check-green.svg';

const StyledTodoItem = styled(Form.Check)`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 12px;
  align-items: center;

  & .form-check-input {
    margin-top: 0;
    margin-left: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    &:checked {
      background-color: transparent;
      background: url(${CheckIcon}) center/16px no-repeat;
      border-color: ${baseTheme.colors.successGreen};
    }

    &:focus,
    :active {
      border-color: ${baseTheme.colors.accentPink};
      outline: none;
      box-shadow: none;
    }
  }

  & label {
    display: flex;
    flex-direction: column;
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
    word-break: break-all;
  }
`;

interface TodoItemProps {
  todo: Todo;
  toggleTodoStatus: (id: number) => void;
}

function TodoItem({ todo, toggleTodoStatus }: TodoItemProps) {
  return (
    <StyledTodoItem
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodoStatus(todo.id)}
      label={todo.task}
    />
  );
}

export default TodoItem;

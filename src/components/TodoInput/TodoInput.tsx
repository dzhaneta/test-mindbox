import styled from 'styled-components';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ArrowIcon from '../../vendor/images/icon-arrow-down.svg';
import ArrowIconHover from '../../vendor/images/icon-arrow-down-hover.svg';
import baseTheme from '../../styles/theme';

const StyledForm = styled(Form)`
  display: flex;
  min-height: 100%;
  gap: 12px;

  & button {
    background-color: transparent;
    background: url(${ArrowIcon}) center/24px no-repeat;
    outline: none;
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;

    &:hover {
      background: url(${ArrowIconHover}) center/24px no-repeat;
    }

    &:focus {
      background: url(${ArrowIconHover}) center/24px no-repeat;
      outline: none;
      box-shadow: none;
    }
  }

  & input {
    width: 100%;
    display: flex;
    outline: none;
    border: none;
    border-radius: 3px;

    &:focus {
      border: solid 1px ${baseTheme.colors.accentPink};
    }

    &:active {
      border: solid 1px ${baseTheme.colors.bgLightGrey};
    }

    &::placeholder {
      color: ${baseTheme.colors.fontLightGrey};
      vertical-align: middle;
    }
  }
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <Button type="submit" aria-label="submit" />
      <input type="text" placeholder="What needs to be done?" value={task} onChange={(e) => setTask(e.target.value)} />
    </StyledForm>
  );
}

export default TodoInput;

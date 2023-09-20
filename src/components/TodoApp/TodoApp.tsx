import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import baseTheme from '../../styles/theme';
import TodoInput from '../TodoInput/TodoInput';
import TodoItem from '../TodoItem/TodoItem';
import TodoSort from '../TodoSort/TodoSort';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${baseTheme.colors.bgLightGrey};
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 540px;
  font-size: 23px;
  line-height: 1;

  & h1 {
    margin: 0;
    text-align: center;
    font-size: 90px;
    line-height: 1;
    color: ${baseTheme.colors.accentPink};
  }
`;

const StyledListItem = styled(ListGroup.Item)`
  padding: 16px;
  max-height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    min-height: 40px;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${baseTheme.colors.fontDarkGrey};

  p {
    margin: 0;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  border: none;

  &:hover {
    color: ${baseTheme.colors.accentPink};
  }
`;

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
  });
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

  const filteredTodos = useMemo(() => {
    console.log('filter started');
    switch (filter) {
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id: number) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const todosList = filteredTodos.map((el) => (
    <StyledListItem key={el.id}>
      <TodoItem todo={el} toggleTodoStatus={toggleTodoStatus} />
    </StyledListItem>
  ));

  const itemCount = todos.filter((todo) => !todo.completed).length;

  return (
    <AppWrapper>
      <StyledContainer>
        <h1>todos</h1>
        <ListGroup variant="flush">
          <StyledListItem>
            <TodoInput addTodo={addTodo} />
          </StyledListItem>
          {todosList}
          <StyledListItem>
            <ControlContainer>
              <p>
                {itemCount} item{itemCount !== 1 ? 's' : ''} left
              </p>
              <TodoSort filter={filter} onFilter={setFilter} />
              <StyledButton onClick={clearCompleted}>Clear completed</StyledButton>
            </ControlContainer>
          </StyledListItem>
        </ListGroup>
      </StyledContainer>
    </AppWrapper>
  );
}

export default TodoApp;

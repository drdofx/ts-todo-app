import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </div>
);
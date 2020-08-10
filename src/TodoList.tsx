import React from 'react';
import { TodoListItem } from './TodoListItem';

import './App.css';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
  <div className='todo-list'>
    {todos.map(todo => (
      <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </div>
);
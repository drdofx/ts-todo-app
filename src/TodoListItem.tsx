import React from 'react';

import './App.css';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => (
  <div className='item'>
    <label 
      style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
    >
      <input 
        type="checkbox" 
        checked={todo.completed}
        onClick={() => {
          toggleTodo(todo);
        }}
      /> {todo.text}
    </label>
  </div>
);
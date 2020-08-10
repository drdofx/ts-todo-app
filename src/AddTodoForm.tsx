import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <form>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button 
        type="submit"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};
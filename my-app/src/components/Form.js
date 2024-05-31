// src/components/Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = ({ addRecord }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter some text"
      />
      <button type="submit">Add Record</button>
    </form>
  );
};

export default Form;

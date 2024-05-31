// src/components/Records.js
import React from 'react';
import './Records.css';

const Records = ({ records }) => {
  return (
    <div>
      <h2>Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default Records;
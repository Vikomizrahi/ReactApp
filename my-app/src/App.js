import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import Clock from './components/Clock';
import './App.css';
import Form from './components/Form';
import Records from './components/Records';

function App() {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const expenses = [
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },
  ];

  return (
    <div className="App">
      <h1>My React App</h1>
      <Clock />
      <Form addRecord={addRecord} />
      <Records records={records} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

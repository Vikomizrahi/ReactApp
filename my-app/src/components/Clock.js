import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <h2 className="clock-title">Current Time</h2>
      <div className="clock-time">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;

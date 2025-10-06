// TIMER & INTERVALS dengan useEffect cleanup
import { useState, useEffect } from 'react';

const TimerCounter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Timer effect dengan cleanup
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Dependency: isRunning

  const reset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div style={{ border: '2px solid #7B1FA2', borderRadius: '10px', padding: '20px', backgroundColor: '#fff' }}>
      <h3>⏱️ Timer & Cleanup</h3>
      
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '20px 0',
        color: '#7B1FA2'
      }}>
        {count}s
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            padding: '10px 20px',
            backgroundColor: isRunning ? '#F44336' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {isRunning ? '⏸️ Pause' : '▶️ Start'}
        </button>

        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#666', textAlign: 'center' }}>
        {isRunning ? 'Timer running...' : 'Timer paused'}
        <br />
        useEffect cleanup mencegah memory leaks!
      </div>
    </div>
  );
};

export default TimerCounter;
// STATE DEMO - Component dengan state
import { useState } from 'react';

const StateDemo = () => {
  // useState hook - data yang bisa berubah
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Budi');
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div style={{
      border: '3px solid #4CAF50',
      borderRadius: '15px',
      padding: '25px',
      margin: '20px',
      backgroundColor: '#F1F8E9'
    }}>
      <h2>🔥 Day 3: State & Events</h2>
      
      {/* COUNTER EXAMPLE */}
      <div style={{ margin: '20px 0' }}>
        <h3>🎯 Counter: {counter}</h3>
        <button 
          onClick={() => setCounter(counter + 1)}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            margin: '5px',
            cursor: 'pointer'
          }}
        >
          ➕ Increment
        </button>
        
        <button 
          onClick={() => setCounter(counter - 1)}
          style={{
            backgroundColor: '#FF5722',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            margin: '5px',
            cursor: 'pointer'
          }}
        >
          ➖ Decrement
        </button>
        
        <button 
          onClick={() => setCounter(0)}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            margin: '5px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>

      {/* NAME EXAMPLE */}
      <div style={{ margin: '20px 0' }}>
        <h3>👤 Name: {name}</h3>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name..."
          style={{
            padding: '10px',
            border: '2px solid #4CAF50',
            borderRadius: '5px',
            margin: '5px',
            width: '200px'
          }}
        />
      </div>

      {/* TOGGLE EXAMPLE */}
      <div style={{ margin: '20px 0' }}>
        <h3>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</h3>
        <button 
          onClick={() => setIsOnline(!isOnline)}
          style={{
            backgroundColor: isOnline ? '#FF5722' : '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {isOnline ? 'Go Offline' : 'Go Online'}
        </button>
      </div>
    </div>
  );
};

export default StateDemo;
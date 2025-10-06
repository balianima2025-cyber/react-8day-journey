// DAY 8: CUSTOM HOOKS DEMO
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';
import useTimer from './useTimer';

const Day8Demo = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#7E57C2',
        color: 'white',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1>🎯 Day 8: Custom Hooks</h1>
        <p><strong>Reusable Logic & Cleaner Components!</strong></p>
        <p>🚀 Extract Logic • Share Stateful Logic • Better Organization</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '25px'
      }}>
        
        <LocalStorageDemo />
        <ApiFetchDemo />
        <TimerDemo />
        <CustomHooksBenefits />

      </div>
    </div>
  );
};

// Demo 1: Local Storage Hook
const LocalStorageDemo = () => {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');
  const [notes, setNotes] = useLocalStorage('user-notes', '');

  return (
    <div style={{
      border: '2px solid #7E57C2',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? 'white' : 'black'
    }}>
      <h3>💾 useLocalStorage Hook</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            padding: '10px 15px',
            backgroundColor: '#7E57C2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Toggle Theme ({theme})
        </button>
      </div>

      <div>
        <label><strong>Notes (Auto-save):</strong></label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="3"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px',
            border: '2px solid #7E57C2',
            borderRadius: '5px',
            backgroundColor: theme === 'dark' ? '#555' : '#fff',
            color: theme === 'dark' ? 'white' : 'black'
          }}
        />
      </div>

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#7E57C2' }}>
        ✅ Data persists after refresh! No useEffect needed!
      </div>
    </div>
  );
};

// Demo 2: API Fetch Hook
const ApiFetchDemo = () => {
  const [userId, setUserId] = useState(1);
  const { data: user, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return (
    <div style={{
      border: '2px solid #2196F3',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      <h3>🌐 useFetch Hook</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label>User ID: </label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(parseInt(e.target.value) || 1)}
          min="1"
          max="10"
          style={{
            padding: '5px',
            border: '2px solid #2196F3',
            borderRadius: '5px',
            marginLeft: '10px'
          }}
        />
      </div>

      {loading && <div>🔄 Loading user #{userId}...</div>}
      {error && <div style={{ color: 'red' }}>❌ Error: {error}</div>}
      
      {user && (
        <div style={{
          padding: '15px',
          backgroundColor: '#E3F2FD',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <h4>{user.name}</h4>
          <p>📧 {user.email}</p>
          <p>🏢 {user.company?.name}</p>
        </div>
      )}

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#2196F3' }}>
        ✅ Clean API calls dengan loading & error states!
      </div>
    </div>
  );
};

// Demo 3: Timer Hook
const TimerDemo = () => {
  const timer = useTimer(0);

  return (
    <div style={{
      border: '2px solid #FF9800',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <h3>⏱️ useTimer Hook</h3>
      
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#FF9800',
        margin: '20px 0'
      }}>
        {timer.formattedTime}
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={timer.start}
          disabled={timer.isRunning}
          style={{
            padding: '10px 15px',
            backgroundColor: timer.isRunning ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: timer.isRunning ? 'not-allowed' : 'pointer'
          }}
        >
          Start
        </button>
        
        <button
          onClick={timer.pause}
          disabled={!timer.isRunning}
          style={{
            padding: '10px 15px',
            backgroundColor: !timer.isRunning ? '#ccc' : '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: !timer.isRunning ? 'not-allowed' : 'pointer'
          }}
        >
          Pause
        </button>
        
        <button
          onClick={timer.reset}
          style={{
            padding: '10px 15px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#FF9800' }}>
        Status: {timer.isRunning ? 'Running' : 'Paused'}
      </div>
    </div>
  );
};

// Demo 4: Benefits Explanation
const CustomHooksBenefits = () => {
  return (
    <div style={{
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      <h3>🎯 Why Custom Hooks?</h3>
      
      <div style={{ textAlign: 'left' }}>
        <h4>✅ Benefits:</h4>
        <ul>
          <li><strong>Reusable Logic</strong> - Use across multiple components</li>
          <li><strong>Cleaner Components</strong> - Less boilerplate code</li>
          <li><strong>Better Testing</strong> - Test logic separately</li>
          <li><strong>Organization</strong> - Logical separation of concerns</li>
          <li><strong>Sharing</strong> - Share between team members</li>
        </ul>

        <h4>🎯 When to Use:</h4>
        <ul>
          <li>API calls & data fetching</li>
          <li>Form handling & validation</li>
          <li>Local storage management</li>
          <li>Timers & intervals</li>
          <li>Authentication logic</li>
          <li>Any repeated stateful logic</li>
        </ul>

        <h4>📝 Naming Convention:</h4>
        <p>Always start with <code>use</code> prefix: <code>useSomething</code></p>
      </div>
    </div>
  );
};

export default Day8Demo;
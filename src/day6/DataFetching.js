// DATA FETCHING dengan useEffect
import { useState, useEffect } from 'react';

const DataFetching = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data.slice(0, 5)); // Ambil 5 user pertama
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array = run once on mount

  return (
    <div style={{ border: '2px solid #0288D1', borderRadius: '10px', padding: '20px', backgroundColor: '#fff' }}>
      <h3>📡 Data Fetching (API)</h3>
      
      {loading && <div>🔄 Loading users...</div>}
      {error && <div style={{ color: 'red' }}>❌ Error: {error}</div>}
      
      <div style={{ marginTop: '15px' }}>
        {users.map(user => (
          <div key={user.id} style={{
            padding: '10px',
            margin: '5px 0',
            backgroundColor: '#E1F5FE',
            borderRadius: '5px',
            border: '1px solid #B3E5FC'
          }}>
            <strong>{user.name}</strong> - {user.email}
          </div>
        ))}
      </div>

      <button 
        onClick={() => window.open('https://jsonplaceholder.typicode.com/users', '_blank')}
        style={{
          marginTop: '15px',
          padding: '8px 16px',
          backgroundColor: '#0288D1',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        🔗 View API
      </button>
    </div>
  );
};

export default DataFetching;
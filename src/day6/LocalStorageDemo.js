// LOCAL STORAGE dengan useEffect
import { useState, useEffect } from 'react';

const LocalStorageDemo = () => {
  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState('');

  // Load dari localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    const savedNotes = localStorage.getItem('user-notes');
    
    if (savedTheme) setTheme(savedTheme);
    if (savedNotes) setNotes(savedNotes);
  }, []); // Run once on component mount

  // Save ke localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]); // Run when theme changes

  useEffect(() => {
    localStorage.setItem('user-notes', notes);
  }, [notes]); // Run when notes change

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{
      border: '2px solid #388E3C',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? 'white' : 'black'
    }}>
      <h3>💾 Local Storage</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: '8px 16px',
            backgroundColor: theme === 'dark' ? '#FFA000' : '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <span style={{ marginLeft: '10px', fontSize: '14px' }}>
          Theme saved automatically!
        </span>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <strong>Notes (auto-save):</strong>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
          style={{
            width: '100%',
            padding: '10px',
            border: '2px solid #388E3C',
            borderRadius: '5px',
            backgroundColor: theme === 'dark' ? '#555' : '#fff',
            color: theme === 'dark' ? 'white' : 'black'
          }}
          placeholder="Ketik di sini... tersimpan otomatis!"
        />
      </div>

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#4CAF50' }}>
        ✅ Data persist setelah refresh browser!
      </div>
    </div>
  );
};

export default LocalStorageDemo;
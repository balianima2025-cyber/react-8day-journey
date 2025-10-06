import './App.css';
import { useState } from 'react';

// Import semua day components
import Day1Demo from './day1/Day1Demo';
import Day2Demo from './day2/Day2Demo';
import Day3Demo from './day3/Day3Demo';
import Day4Demo from './day4/Day4Demo';
import Day5Demo from './day5/Day5Demo';
import Day6Demo from './day6/Day6Demo';
import Day7Demo from './day7/Day7Demo';
import Day8Demo from './day8/Day8Demo';
// import Day5Demo from './day5/Day5Demo'; // Nanti

function App() {
  const [currentDay, setCurrentDay] = useState(3); // Default day 3

  // Navigation component
  const DayNavigator = () => (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderBottom: '2px solid #ddd',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap'
    }}>
      {[1, 2, 3, 4, 5, 6, 7,8].map(day => (
        <button
          key={day}
          onClick={() => setCurrentDay(day)}
          style={{
            backgroundColor: currentDay === day ? '#4CAF50' : '#fff',
            color: currentDay === day ? 'white' : '#333',
            padding: '10px 20px',
            border: `2px solid ${currentDay === day ? '#4CAF50' : '#ddd'}`,
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          {day === 3 ? `🔥 Day ${day}` : `Day ${day}`}
        </button>
      ))}
    </div>
  );

  // Render component berdasarkan day yang dipilih
  const renderCurrentDay = () => {
    switch(currentDay) {
      case 1:
        return <Day1Demo />;
      case 2:
        return <Day2Demo />;
      case 3:
        return <Day3Demo />;
      case 4:
        return <Day4Demo />;
      case 5:
        return <Day5Demo />;
      case 6:
        return <Day6Demo />;
      case 7:
        return <Day7Demo />;
        case 8:
        return <Day8Demo />;
  default:
        return <Day3Demo />;
    }
  };

  return (
    <div className="App">
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>🚀 RAPP - React Learning Journey</h1>
        <p>30 Days to React Mastery! Day by Day Progress! 💪</p>
      </header>
      
      {/* Navigation Bar */}
      <DayNavigator />
      
      {/* Current Day Content */}
      {renderCurrentDay()}
      
      {/* Footer */}
      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '1px solid #ddd'
      }}>
        <p><strong>🔥 Current Focus: Day {currentDay}</strong></p>
        <p>React Fundamentals → State Management → Real Projects!</p>
      </footer>
    </div>
  );
}

export default App;
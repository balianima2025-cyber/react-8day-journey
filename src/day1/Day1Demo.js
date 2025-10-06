// DAY 1 MAIN COMPONENT
const Day1Demo = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🧱 Day 1: Components & JSX</h1>
      <p>Building blocks of React!</p>
      
      <div style={{
        border: '2px solid #2196F3',
        borderRadius: '10px',
        padding: '30px',
        margin: '20px auto',
        maxWidth: '500px',
        backgroundColor: '#E3F2FD'
      }}>
        <h2>My First Component</h2>
        <p>This is a simple functional component</p>
        <button style={{
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Day1Demo;
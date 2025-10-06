// DAY 6 MAIN - useEffect & APIs
import DataFetching from './DataFetching';
import TimerCounter from './TimerCounter';
import LocalStorageDemo from './LocalStorageDemo';
import ApiIntegration from './ApiIntegration';

const Day6Demo = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#E1F5FE',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        border: '3px solid #0288D1'
      }}>
        <h1>⚡ Day 6: useEffect & APIs (SPEED RUN!)</h1>
        <p><strong>Side effects, data fetching, and real-world integrations!</strong></p>
        <p>✅ useEffect • API Calls • Timers • Local Storage • Cleanup</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '25px'
      }}>
        
        <DataFetching />
        <TimerCounter />
        <LocalStorageDemo />
        <ApiIntegration />

      </div>
    </div>
  );
};

export default Day6Demo;
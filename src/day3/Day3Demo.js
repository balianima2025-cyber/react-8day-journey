// DAY 3 MAIN COMPONENT
import StateDemo from './StateDemo';
import ProfileCardWithState from './ProfileCardWithState';

const Day3Demo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        backgroundColor: '#E8F5E9',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1>🎯 Day 3: State & Events</h1>
        <p><strong>Data yang BISA BERUBAH dan INTERACTIVE!</strong></p>
        <p>✅ useState Hook • Event Handling • Dynamic Updates</p>
      </div>

      {/* State Demo */}
      <StateDemo />

      {/* Interactive Profile Cards */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center' }}>🚀 Interactive Profile Cards</h2>
        <p style={{ textAlign: 'center' }}>Klik, ubah status, tambah likes - semuanya REAL-TIME!</p>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: '20px',
          marginTop: '30px'
        }}>
          <ProfileCardWithState 
            name="Budi Santoso"
            role="Frontend Developer"
          />
          
          <ProfileCardWithState 
            name="Sari Wijaya" 
            role="UI/UX Designer"
          />
          
          <ProfileCardWithState 
            name="Rizky Pratama"
            role="Backend Developer" 
          />
        </div>
      </div>

      {/* Learning Points */}
      <div style={{
        backgroundColor: '#FFF3E0',
        padding: '25px',
        borderRadius: '10px',
        marginTop: '40px'
      }}>
        <h3>📚 Day 3 Learning Points:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '15px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4>🎮 useState Hook</h4>
            <ul>
              <li>const [state, setState] = useState(initialValue)</li>
              <li>State bisa number, string, boolean, object, array</li>
              <li>setState trigger re-render</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4>⚡ Event Handling</h4>
            <ul>
              <li>onClick untuk button clicks</li>
              <li>onChange untuk input changes</li>
              <li>Arrow functions untuk event handlers</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4>🔄 State Updates</h4>
            <ul>
              <li>Always use setState (never modify directly)</li>
              <li>State updates are asynchronous</li>
              <li>Multiple states for different data</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day3Demo;
// DAY 4 MAIN COMPONENT - FORMS & USER INPUT
import ContactForm from './ContactForm';
import LoginForm from './LoginForm';
import MultiStepForm from './MultiStepForm';
import FormValidation from './FormValidation';

const Day4Demo = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#E3F2FD',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        border: '3px solid #2196F3'
      }}>
        <h1>📝 Day 4: Forms & User Input</h1>
        <p><strong>Handle user input like a PRO! Controlled components, validation, and complex forms!</strong></p>
        <p>✅ Controlled Inputs • Form Validation • Multi-step Forms • Real-time Feedback</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        
        {/* Contact Form */}
        <div>
          <h2>📧 Contact Form</h2>
          <ContactForm />
        </div>

        {/* Login Form */}
        <div>
          <h2>🔐 Login Form</h2>
          <LoginForm />
        </div>

        {/* Form Validation */}
        <div>
          <h2>✅ Form Validation</h2>
          <FormValidation />
        </div>

        {/* Multi-step Form */}
        <div style={{ gridColumn: '1 / -1' }}>
          <h2>🚀 Multi-step Form</h2>
          <MultiStepForm />
        </div>

      </div>

      {/* Learning Points */}
      <div style={{
        backgroundColor: '#F3E5F5',
        padding: '25px',
        borderRadius: '10px',
        marginTop: '40px',
        border: '3px solid #9C27B0'
      }}>
        <h3>📚 Day 4 Learning Points:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>🎮 Controlled Components</h4>
            <ul>
              <li>Input value dikontrol React state</li>
              <li>onChange handler untuk updates</li>
              <li>Single source of truth</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>⚡ Form Handling</h4>
            <ul>
              <li>onSubmit untuk form submission</li>
              <li>preventDefault() untuk hindari refresh</li>
              <li>Form data collection</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>🛡️ Validation</h4>
            <ul>
              <li>Real-time validation</li>
              <li>Error messages</li>
              <li>Disabled states</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day4Demo;
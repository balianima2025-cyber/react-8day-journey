// MULTI-STEP FORM - Complex form state
import { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: { name: '', email: '' },
    address: { street: '', city: '' },
    preferences: { newsletter: false, updates: true }
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!\n' + JSON.stringify(formData, null, 2));
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <h3>Step 1: Personal Information</h3>
            <div style={{ marginBottom: '15px' }}>
              <label>Name:</label>
              <input
                type="text"
                value={formData.personal.name}
                onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                style={inputStyle}
                placeholder="Enter your name"
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Email:</label>
              <input
                type="email"
                value={formData.personal.email}
                onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                style={inputStyle}
                placeholder="Enter your email"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h3>Step 2: Address Information</h3>
            <div style={{ marginBottom: '15px' }}>
              <label>Street:</label>
              <input
                type="text"
                value={formData.address.street}
                onChange={(e) => handleInputChange('address', 'street', e.target.value)}
                style={inputStyle}
                placeholder="Enter your street address"
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>City:</label>
              <input
                type="text"
                value={formData.address.city}
                onChange={(e) => handleInputChange('address', 'city', e.target.value)}
                style={inputStyle}
                placeholder="Enter your city"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h3>Step 3: Preferences</h3>
            <div style={{ marginBottom: '15px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={formData.preferences.newsletter}
                  onChange={(e) => handleInputChange('preferences', 'newsletter', e.target.checked)}
                  style={{ marginRight: '10px' }}
                />
                Subscribe to newsletter
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={formData.preferences.updates}
                  onChange={(e) => handleInputChange('preferences', 'updates', e.target.checked)}
                  style={{ marginRight: '10px' }}
                />
                Receive product updates
              </label>
            </div>
            
            {/* Summary */}
            <div style={{ 
              backgroundColor: '#E8F5E9', 
              padding: '15px', 
              borderRadius: '5px',
              marginTop: '20px'
            }}>
              <h4>Summary:</h4>
              <p><strong>Name:</strong> {formData.personal.name}</p>
              <p><strong>Email:</strong> {formData.personal.email}</p>
              <p><strong>Address:</strong> {formData.address.street}, {formData.address.city}</p>
              <p><strong>Newsletter:</strong> {formData.preferences.newsletter ? 'Yes' : 'No'}</p>
              <p><strong>Updates:</strong> {formData.preferences.updates ? 'Yes' : 'No'}</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '5px'
  };

  return (
    <div style={{
      border: '2px solid #9C27B0',
      borderRadius: '10px',
      padding: '30px',
      backgroundColor: '#fff',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      {/* Progress Bar */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: step >= s ? '#9C27B0' : '#ddd',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 5px',
                fontWeight: 'bold'
              }}>
                {s}
              </div>
              <div style={{ fontSize: '12px' }}>
                {s === 1 && 'Personal'}
                {s === 2 && 'Address'}
                {s === 3 && 'Preferences'}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          height: '4px',
          backgroundColor: '#ddd',
          position: 'relative',
          top: '-45px',
          zIndex: -1
        }}>
          <div style={{
            height: '100%',
            backgroundColor: '#9C27B0',
            width: `${((step - 1) / 2) * 100}%`,
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '30px'
        }}>
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 1}
            style={{
              backgroundColor: step === 1 ? '#ccc' : '#9C27B0',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: step === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            ⬅️ Previous
          </button>
          
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              style={{
                backgroundColor: '#9C27B0',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Next ➡️
            </button>
          ) : (
            <button
              type="submit"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              ✅ Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
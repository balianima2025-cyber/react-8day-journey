// CONTACT FORM - Basic form handling
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      border: '2px solid #2196F3',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          📨 Send Message
        </button>
      </form>

      {/* Live Preview */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#E3F2FD',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <strong>Live Preview:</strong>
        <div>Name: {formData.name || 'Empty'}</div>
        <div>Email: {formData.email || 'Empty'}</div>
        <div>Message: {formData.message || 'Empty'}</div>
      </div>
    </div>
  );
};

export default ContactForm;
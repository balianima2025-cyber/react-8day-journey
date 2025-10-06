// FORM VALIDATION - Real-time validation
import { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    website: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      
      case 'phone':
        if (!value) return 'Phone is required';
        if (!/^\d{10,12}$/.test(value)) return 'Phone must be 10-12 digits';
        return '';
      
      case 'website':
        if (value && !/^https?:\/\/.+\..+/.test(value)) return 'Invalid website URL';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation after user has touched the field
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({
      email: true,
      phone: true,
      website: true
    });

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ email: '', phone: '', website: '' });
      setTouched({});
    }
  };

  const isFormValid = Object.keys(errors).every(key => !errors[key]);

  return (
    <div style={{
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '10px',
              border: `2px solid ${errors.email ? '#f44336' : '#4CAF50'}`,
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <div style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              ⚠️ {errors.email}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '10px',
              border: `2px solid ${errors.phone ? '#f44336' : '#4CAF50'}`,
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="081234567890"
          />
          {errors.phone && (
            <div style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              ⚠️ {errors.phone}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '10px',
              border: `2px solid ${errors.website ? '#f44336' : '#4CAF50'}`,
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="https://example.com"
          />
          {errors.website && (
            <div style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              ⚠️ {errors.website}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            backgroundColor: isFormValid ? '#4CAF50' : '#ccc',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            width: '100%'
          }}
        >
          ✅ Submit Form
        </button>
      </form>

      {/* Validation Status */}
      <div style={{ 
        marginTop: '15px',
        fontSize: '14px',
        textAlign: 'center',
        color: isFormValid ? '#4CAF50' : '#f44336'
      }}>
        {isFormValid ? '✅ Form is valid and ready to submit!' : '❌ Please fix errors above'}
      </div>
    </div>
  );
};

export default FormValidation;
// LOGIN FORM - With validation & feedback
import { useState } from 'react';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!loginData.username) {
      newErrors.username = 'Username is required';
    } else if (loginData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    } else if (loginData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Login successful! Welcome ${loginData.username}`);
      setLoginData({ username: '', password: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div style={{
      border: '2px solid #FF9800',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: `2px solid ${errors.username ? '#f44336' : '#ddd'}`,
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter your username"
          />
          {errors.username && (
            <div style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              ⚠️ {errors.username}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: `2px solid ${errors.password ? '#f44336' : '#ddd'}`,
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter your password"
          />
          {errors.password && (
            <div style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              ⚠️ {errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: isSubmitting ? '#ccc' : '#FF9800',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            width: '100%',
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? '🔐 Logging in...' : '🚀 Login'}
        </button>
      </form>

      {/* Form Status */}
      <div style={{ 
        marginTop: '15px',
        fontSize: '14px',
        textAlign: 'center',
        color: '#666'
      }}>
        {isSubmitting && '⏳ Authenticating...'}
      </div>
    </div>
  );
};

export default LoginForm;
// ProfileCard sekarang bisa terima props!
const ProfileCard = (props) => {
  return (
    <div style={{
      border: '3px solid #FF6B6B',
      borderRadius: '15px',
      padding: '25px',
      margin: '10px',
      maxWidth: '350px',
      backgroundColor: '#FFF5F5',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      textAlign: 'center'
    }}>
      {/* Avatar dengan inisial dari props */}
      <div style={{
        width: '80px',
        height: '80px',
        backgroundColor: '#FF6B6B',
        borderRadius: '50%',
        margin: '0 auto 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: 'white',
        fontWeight: 'bold'
      }}>
        {props.name ? props.name.charAt(0) : 'U'}
      </div>
      
      {/* Data dari props */}
      <h2 style={{ color: '#333', margin: '10px 0' }}>
        {props.name || 'Unknown User'} 🔥
      </h2>
      <p style={{ 
        color: '#666', 
        margin: '5px 0',
        fontSize: '14px' 
      }}>
        🚀 {props.role || 'No Role Specified'}
      </p>
      
      <div style={{ 
        backgroundColor: '#E9ECEF', 
        padding: '10px',
        borderRadius: '8px',
        margin: '15px 0'
      }}>
        <p style={{ margin: '5px 0', fontSize: '12px' }}>
          <strong>📍 Location:</strong> {props.location || 'Unknown'}
        </p>
        <p style={{ margin: '5px 0', fontSize: '12px' }}>
          <strong>🎯 Skills:</strong> {props.skills || 'React, JavaScript'}
        </p>
        <p style={{ margin: '5px 0', fontSize: '12px' }}>
          <strong>⭐ Level:</strong> {props.level || 'Beginner'}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button style={{
          backgroundColor: '#FF6B6B',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '25px',
          margin: '5px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          👋 Follow
        </button>
        
        <button style={{
          backgroundColor: 'transparent',
          color: '#FF6B6B',
          padding: '10px 20px',
          border: '2px solid #FF6B6B',
          borderRadius: '25px',
          margin: '5px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          📧 Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
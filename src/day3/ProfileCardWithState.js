// PROFILE CARD dengan STATE - Upgrade dari Day 2!
import { useState } from 'react';

const ProfileCardWithState = (props) => {
  // State untuk data yang bisa berubah
  const [isFollowing, setIsFollowing] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [likes, setLikes] = useState(0);

  return (
    <div style={{
      border: `3px solid ${isOnline ? '#4CAF50' : '#FF6B6B'}`,
      borderRadius: '15px',
      padding: '25px',
      margin: '15px',
      maxWidth: '350px',
      backgroundColor: isOnline ? '#F1F8E9' : '#FFEBEE',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    }}>
      {/* Avatar dengan status online/offline */}
      <div style={{
        position: 'relative',
        width: '80px',
        height: '80px',
        backgroundColor: isOnline ? '#4CAF50' : '#FF6B6B',
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
        
        {/* Online indicator */}
        <div style={{
          position: 'absolute',
          bottom: '5px',
          right: '5px',
          width: '15px',
          height: '15px',
          backgroundColor: isOnline ? '#4CAF50' : '#FF6B6B',
          border: '2px solid white',
          borderRadius: '50%'
        }} />
      </div>
      
      {/* User Info */}
      <h2 style={{ color: '#333', margin: '10px 0' }}>
        {props.name || 'Unknown User'} {isOnline ? '🟢' : '🔴'}
      </h2>
      <p style={{ color: '#666', margin: '5px 0', fontSize: '14px' }}>
        🚀 {props.role || 'No Role Specified'}
      </p>

      {/* Likes Counter */}
      <div style={{ margin: '15px 0' }}>
        <p style={{ fontSize: '14px', color: '#666' }}>
          ❤️ Likes: {likes}
        </p>
        <button 
          onClick={() => setLikes(likes + 1)}
          style={{
            backgroundColor: '#FF6B6B',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          👍 Like
        </button>
      </div>
      
      {/* Action Buttons dengan STATE */}
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setIsFollowing(!isFollowing)}
          style={{
            backgroundColor: isFollowing ? '#6B6B6B' : '#FF6B6B',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '25px',
            margin: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.3s ease'
          }}
        >
          {isFollowing ? '✅ Following' : '👋 Follow'}
        </button>
        
        <button 
          onClick={() => setIsOnline(!isOnline)}
          style={{
            backgroundColor: 'transparent',
            color: isOnline ? '#FF6B6B' : '#4CAF50',
            padding: '10px 20px',
            border: `2px solid ${isOnline ? '#FF6B6B' : '#4CAF50'}`,
            borderRadius: '25px',
            margin: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {isOnline ? '🔴 Go Offline' : '🟢 Go Online'}
        </button>
      </div>
    </div>
  );
};

export default ProfileCardWithState;
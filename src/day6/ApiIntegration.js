// REAL API INTEGRATION dengan loading states
import { useState, useEffect } from 'react';

const ApiIntegration = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postId, setPostId] = useState(1);

  // Fetch data ketika postId berubah
  useEffect(() => {
    const fetchPost = async () => {
      if (postId < 1 || postId > 100) return;
      
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await response.json();
        setPosts(prev => [data, ...prev.slice(0, 4)]); // Keep last 5 posts
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); // Dependency: postId

  return (
    <div style={{ border: '2px solid #E65100', borderRadius: '10px', padding: '20px', backgroundColor: '#fff' }}>
      <h3>🌐 Real API Integration</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Post ID (1-100):</label>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(parseInt(e.target.value) || 1)}
          min="1"
          max="100"
          style={{
            padding: '5px',
            border: '2px solid #E65100',
            borderRadius: '5px',
            width: '60px'
          }}
        />
        <button
          onClick={() => setPostId(prev => Math.min(100, prev + 1))}
          style={{
            marginLeft: '10px',
            padding: '5px 10px',
            backgroundColor: '#E65100',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Next Post ➡️
        </button>
      </div>

      {loading && <div>🔄 Loading post #{postId}...</div>}

      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {posts.map(post => (
          <div key={post.id} style={{
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#FFF3E0',
            borderRadius: '8px',
            border: '1px solid #FFCCBC'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#E65100' }}>
              #{post.id}: {post.title}
            </h4>
            <p style={{ margin: 0, fontSize: '14px' }}>{post.body}</p>
          </div>
        ))}
      </div>

      {posts.length === 0 && !loading && (
        <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
          Click "Next Post" untuk load data dari API!
        </div>
      )}
    </div>
  );
};

export default ApiIntegration;
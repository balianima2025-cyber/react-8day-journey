import TodoApp from './TodoApp';

const Day7Demo = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1>🎉 DAY 7: TODO LIST PROJECT!</h1>
        <p><strong>Combine ALL React Concepts Mastered!</strong></p>
        <p>🚀 From Zero to React Developer in 7 Days!</p>
      </div>

      <TodoApp />
    </div>
  );
};

// PASTIKAN INI ADA!
export default Day7Demo;
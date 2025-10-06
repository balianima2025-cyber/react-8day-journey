// MAIN TODO APP - Combine ALL concepts
import { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('react-todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString('id-ID')
      };
      setTodos([newTodo, ...todos]);
      setInput('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Clear all completed
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filtered and searched todos
  const filteredTodos = todos.filter(todo => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'active' && !todo.completed) ||
                         (filter === 'completed' && todo.completed);
    
    const matchesSearch = todo.text.toLowerCase().includes(search.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div style={{
      border: '3px solid #4CAF50',
      borderRadius: '15px',
      padding: '30px',
      backgroundColor: '#fff',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ color: '#4CAF50', margin: '0 0 10px 0' }}>
          🚀 My Todo List
        </h2>
        <p style={{ color: '#666', margin: 0 }}>
          Built with React in 7 Days!
        </p>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            style={{
              flex: 1,
              padding: '15px',
              border: '2px solid #4CAF50',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '15px 25px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Add +
          </button>
        </div>
      </form>

      {/* Search & Filter Controls */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginBottom: '25px',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search todos..."
          style={{
            flex: 1,
            minWidth: '200px',
            padding: '12px',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            fontSize: '14px'
          }}
        />
        
        <div style={{ display: 'flex', gap: '5px' }}>
          {['all', 'active', 'completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '12px 20px',
                backgroundColor: filter === f ? '#2196F3' : '#f0f0f0',
                color: filter === f ? 'white' : '#333',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                textTransform: 'capitalize'
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Todo List */}
      <div style={{ 
        maxHeight: '400px', 
        overflowY: 'auto',
        marginBottom: '25px'
      }}>
        {filteredTodos.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#999',
            fontSize: '18px'
          }}>
            {search ? 'No todos match your search' : 'No todos yet. Add one above!'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                marginBottom: '12px',
                backgroundColor: todo.completed ? '#E8F5E9' : '#f8f9fa',
                border: `2px solid ${todo.completed ? '#4CAF50' : '#FF9800'}`,
                borderRadius: '10px',
                transition: 'all 0.3s ease'
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{
                  marginRight: '15px',
                  transform: 'scale(1.3)',
                  cursor: 'pointer'
                }}
              />
              
              <div style={{ flex: 1 }}>
                <div style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#666' : '#333',
                  fontSize: '16px',
                  fontWeight: todo.completed ? 'normal' : '500',
                  marginBottom: '5px'
                }}>
                  {todo.text}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#999'
                }}>
                  Created: {todo.createdAt}
                </div>
              </div>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  marginLeft: '10px'
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Statistics & Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        border: '2px solid #e9ecef'
      }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          <strong>Total:</strong> {totalTodos} | 
          <strong style={{ color: '#2196F3', marginLeft: '10px' }}>Active:</strong> {activeTodos} | 
          <strong style={{ color: '#4CAF50', marginLeft: '10px' }}>Completed:</strong> {completedTodos}
        </div>
        
        {completedTodos > 0 && (
          <button
            onClick={clearCompleted}
            style={{
              padding: '8px 16px',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Clear Completed
          </button>
        )}
      </div>

      {/* Auto-save Notice */}
      <div style={{
        marginTop: '15px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#4CAF50'
      }}>
        ✅ Auto-saved to browser storage
      </div>
    </div>
  );
};

export default TodoApp;
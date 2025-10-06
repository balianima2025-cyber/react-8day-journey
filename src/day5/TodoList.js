// TODO LIST - Dynamic list rendering dengan CRUD
import { useState } from 'react';
import { todos as initialTodos } from './data/mockData';

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo,
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div style={{
      border: '2px solid #FF9800',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff'
    }}>
      {/* Add Todo Form */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add new todo..."
            style={{
              flex: 1,
              padding: '10px',
              border: '2px solid #FF9800',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
          <button
            onClick={addTodo}
            style={{
              backgroundColor: '#FF9800',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              backgroundColor: filter === f ? '#FF9800' : '#f0f0f0',
              color: filter === f ? 'white' : '#333',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px',
              textTransform: 'capitalize'
            }}
          >
            {f} ({f === 'all' ? totalCount : f === 'active' ? totalCount - completedCount : completedCount})
          </button>
        ))}
      </div>

      {/* Todo List */}
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {filteredTodos.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
            No todos found
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: todo.completed ? '#E8F5E9' : '#f8f9fa',
                border: `2px solid ${todo.completed ? '#4CAF50' : '#FF9800'}`,
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{
                  marginRight: '15px',
                  transform: 'scale(1.2)'
                }}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#666' : '#333',
                  fontSize: '16px'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Statistics */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#FFF3E0',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <strong>Progress: </strong>
        {completedCount} of {totalCount} completed 
        ({totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%)
      </div>
    </div>
  );
};

export default TodoList;
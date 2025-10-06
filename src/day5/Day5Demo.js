// DAY 5 MAIN COMPONENT - LISTS & RENDERING
import TodoList from './TodoList';
import ProductGrid from './ProductGrid';
import UserTable from './UserTable';
import FilterSearch from './FilterSearch';

const Day5Demo = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#FFF3E0',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px',
        textAlign: 'center',
        border: '3px solid #FF9800'
      }}>
        <h1>📋 Day 5: Lists & Rendering</h1>
        <p><strong>Render dynamic data like a PRO! Lists, grids, tables, filtering, and search!</strong></p>
        <p>✅ Array.map() • Key Props • Filtering • Sorting • Search • Dynamic Rendering</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        
        {/* Todo List */}
        <div>
          <h2>✅ Todo List</h2>
          <TodoList />
        </div>

        {/* Product Grid */}
        <div>
          <h2>🛍️ Product Grid</h2>
          <ProductGrid />
        </div>

        {/* User Table */}
        <div style={{ gridColumn: '1 / -1' }}>
          <h2>👥 User Table</h2>
          <UserTable />
        </div>

        {/* Filter & Search */}
        <div style={{ gridColumn: '1 / -1' }}>
          <h2>🔍 Advanced Filter & Search</h2>
          <FilterSearch />
        </div>

      </div>

      {/* Learning Points */}
      <div style={{
        backgroundColor: '#E8F5E9',
        padding: '25px',
        borderRadius: '10px',
        marginTop: '40px',
        border: '3px solid #4CAF50'
      }}>
        <h3>📚 Day 5 Learning Points:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>🔄 Array.map()</h4>
            <ul>
              <li>Transform arrays into JSX elements</li>
              <li>Dynamic rendering based on data</li>
              <li>Essential for list rendering</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>🔑 Key Props</h4>
            <ul>
              <li>Unique identifiers for list items</li>
              <li>Performance optimization</li>
              <li>Required for dynamic lists</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>🎯 Filter & Search</h4>
            <ul>
              <li>Array.filter() for data filtering</li>
              <li>Real-time search functionality</li>
              <li>Combined filtering logic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day5Demo;
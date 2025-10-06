// FILTER & SEARCH - Advanced filtering dengan multiple criteria
import { useState, useMemo } from 'react';
import { products } from './data/mockData';
import { users } from './data/mockData';

const FilterSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [minRating, setMinRating] = useState(0);

  // Combined filtering logic menggunakan useMemo untuk performance
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [searchTerm, categoryFilter, priceRange, minRating]);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div style={{
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff'
    }}>
      <h3 style={{ marginBottom: '25px', textAlign: 'center' }}>
        🔍 Advanced Product Search ({filteredProducts.length} products found)
      </h3>

      {/* Filter Controls */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Search Input */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Search Products:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #4CAF50',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Category Filter */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Category:
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #4CAF50',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span>${priceRange[0]}</span>
            <input
              type="range"
              min="0"
              max="3000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              style={{ flex: 1 }}
            />
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Minimum Rating */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Minimum Rating: {minRating}+ ⭐
          </label>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span>0</span>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              style={{ flex: 1 }}
            />
            <span>5</span>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {filteredProducts.length === 0 ? (
          <div style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '40px',
            color: '#666'
          }}>
            🔍 No products match your filters
          </div>
        ) : (
          filteredProducts.map(product => (
            <div
              key={product.id}
              style={{
                border: '2px solid #E8F5E9',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: '#fff',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#C8E6C9',
                borderRadius: '50%',
                margin: '0 auto 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                {product.category === 'laptop' && '💻'}
                {product.category === 'phone' && '📱'}
                {product.category === 'tablet' && '📟'}
                {product.category === 'audio' && '🎧'}
                {product.category === 'wearable' && '⌚'}
              </div>
              
              <h4 style={{ margin: '10px 0', fontSize: '16px' }}>{product.name}</h4>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                {product.category}
              </div>
              
              <div style={{ 
                backgroundColor: '#FFEB3B', 
                color: '#333',
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '12px',
                display: 'inline-block',
                marginBottom: '10px'
              }}>
                ⭐ {product.rating}
              </div>
              
              <div style={{ 
                fontSize: '18px', 
                fontWeight: 'bold',
                color: '#4CAF50'
              }}>
                ${product.price}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Filter Summary */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#E8F5E9',
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <strong>Active Filters:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
          {searchTerm && (
            <span style={{ 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              padding: '4px 8px', 
              borderRadius: '12px',
              fontSize: '12px'
            }}>
              Search: "{searchTerm}"
            </span>
          )}
          {categoryFilter !== 'all' && (
            <span style={{ 
              backgroundColor: '#2196F3', 
              color: 'white', 
              padding: '4px 8px', 
              borderRadius: '12px',
              fontSize: '12px'
            }}>
              Category: {categoryFilter}
            </span>
          )}
          <span style={{ 
            backgroundColor: '#FF9800', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px',
            fontSize: '12px'
          }}>
            Price: ${priceRange[0]} - ${priceRange[1]}
          </span>
          {minRating > 0 && (
            <span style={{ 
              backgroundColor: '#9C27B0', 
              color: 'white', 
              padding: '4px 8px', 
              borderRadius: '12px',
              fontSize: '12px'
            }}>
              Rating: {minRating}+ ⭐
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
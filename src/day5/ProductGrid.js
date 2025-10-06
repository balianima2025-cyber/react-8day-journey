// PRODUCT GRID - Grid layout rendering
import { useState } from 'react';
import { products as initialProducts } from './data/mockData';

const ProductGrid = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState('name'); // name, price, rating

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const addToCart = (productId) => {
    alert(`Added ${products.find(p => p.id === productId)?.name} to cart!`);
  };

  return (
    <div style={{
      border: '2px solid #2196F3',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: '#fff'
    }}>
      {/* Sort Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>Products ({products.length})</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '2px solid #2196F3',
            borderRadius: '5px',
            fontSize: '14px'
          }}
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {sortedProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: '2px solid #E3F2FD',
              borderRadius: '10px',
              padding: '15px',
              backgroundColor: '#fff',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#E3F2FD',
              borderRadius: '50%',
              margin: '0 auto 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              {product.category === 'laptop' && '💻'}
              {product.category === 'phone' && '📱'}
              {product.category === 'tablet' && '📟'}
              {product.category === 'audio' && '🎧'}
              {product.category === 'wearable' && '⌚'}
            </div>
            
            <h4 style={{ margin: '10px 0', fontSize: '16px' }}>{product.name}</h4>
            
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
              color: '#2196F3',
              marginBottom: '15px'
            }}>
              ${product.price}
            </div>
            
            <button
              onClick={() => addToCart(product.id)}
              style={{
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 16px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
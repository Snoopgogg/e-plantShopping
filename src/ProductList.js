import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice.js';
import { ShoppingCart, Check } from 'lucide-react';

export const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement Plants', price: 24, emoji: '🌿', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85', description: 'Bold split leaves for a bright corner.' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy Care', price: 18, emoji: '🪴', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=800&q=85', description: 'Architectural leaves and an easygoing nature.' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Trailing Plants', price: 14, emoji: '🍃', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85', description: 'A trailing favourite for shelves and hangers.' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy Care', price: 22, emoji: '🌱', image: 'https://images.unsplash.com/photo-1632207691143-643e2e4a4d2d?auto=format&fit=crop&w=800&q=85', description: 'Glossy green foliage with minimal fuss.' },
  { id: 'peace', name: 'Peace Lily', category: 'Flowering Plants', price: 20, emoji: '🌼', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85', description: 'Elegant leaves and graceful white blooms.' },
  { id: 'rubber', name: 'Rubber Plant', category: 'Statement Plants', price: 26, emoji: '🌳', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85', description: 'Deep green leaves with a polished look.' }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <section className="catalog-section" id="plants">
      <div className="section-heading">
        <div><div className="section-kicker">THE GREENHOUSE</div><h2>Find your new favourite.</h2></div>
        <p>Six leafy companions to brighten your everyday.</p>
      </div>
      {categories.map(category => (
        <div className="plant-category" key={category}>
          <h3>{category}</h3>
          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => {
              const added = cartItems.some(item => item.id === plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-photo">
                    <img src={plant.image} alt={plant.name} loading="lazy" onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('photo-fallback'); }} />
                    <span className="plant-emoji" aria-hidden="true">{plant.emoji}</span>
                  </div>
                  <div className="plant-info">
                    <span className="plant-category-label">{plant.category}</span>
                    <h4>{plant.name}</h4><p>{plant.description}</p>
                    <div className="plant-buy"><strong>${plant.price.toFixed(2)}</strong>
                      <button className="button button-small" disabled={added} onClick={() => dispatch(addToCart(plant))}>
                        {added ? <><Check size={15}/> Added</> : <><ShoppingCart size={15}/> Add to Cart</>}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

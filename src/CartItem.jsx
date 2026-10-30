import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart, clearCart } from './CartSlice.js';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function CartItem({ onContinue }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-section" id="cart">
      <button className="text-button" onClick={onContinue}><ArrowLeft size={16}/> Continue shopping</button>
      <div className="cart-heading"><div><div className="section-kicker">YOUR SELECTION</div><h2>Shopping cart</h2></div><span>{totalCount} {totalCount === 1 ? 'item' : 'items'}</span></div>
      {items.length === 0 ? (
        <div className="empty-cart"><ShoppingBag size={44}/><h3>Your cart is looking a little leafy-less.</h3><p>Add a plant you love and it will show up here.</p><button className="button" onClick={onContinue}>Explore plants</button></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">{items.map(item => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} onError={e => { e.currentTarget.style.display = 'none'; }}/>
              <div className="cart-product"><h3>{item.name}</h3><p>${item.price.toFixed(2)} each</p><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14}/> Remove</button></div>
              <div className="quantity-control"><button aria-label={`Decrease ${item.name}`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14}/></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14}/></button></div>
              <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
            </article>
          ))}</div>
          <aside className="order-summary"><h3>Order summary</h3><div><span>Plants ({totalCount})</span><strong>${totalCost.toFixed(2)}</strong></div><div><span>Delivery</span><span>Calculated later</span></div><hr/><div className="summary-total"><span>Total</span><strong>${totalCost.toFixed(2)}</strong></div><button className="button checkout-button" onClick={() => window.alert('Thanks for your interest! Checkout is coming soon.')}>Checkout</button><p className="checkout-note">Checkout coming soon — this demo does not process payments.</p><button className="text-button clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button></aside>
        </div>
      )}
    </section>
  );
}

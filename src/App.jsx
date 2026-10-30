import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingBag, ArrowRight, Sprout } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.js';
import CartItem from './CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const go = next => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={e => { e.preventDefault(); go('home'); }}><span className="brand-mark"><Leaf size={22}/></span><span>Paradise <b>Nursery</b><small>GROW YOUR OWN WAY</small></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => go('home')}>Home</button>
          <button className="nav-link" onClick={() => go('plants')}>Plants</button>
          <button className="nav-link" onClick={() => go('about')}>About Us</button>
          <button className="nav-link cart-nav" onClick={() => go('cart')}><ShoppingBag size={18}/> Cart <span className="cart-count">{count}</span></button>
        </nav>
      </header>
      {page === 'home' && <>
        <main id="home">
          <section className="hero">
            <div className="hero-content"><span className="eyebrow"><Sprout size={15}/> A LITTLE MORE GREEN</span><h1>Make room for<br/><em>something living.</em></h1><p>Thoughtfully chosen houseplants for calmer corners, brighter rooms, and everyday growth.</p><button className="button hero-button" onClick={() => go('plants')}>Get Started <ArrowRight size={17}/></button><div className="hero-note"><span>✦</span> Good things grow here.</div></div>
            <div className="hero-art" role="img" aria-label="Decorative houseplants"><div className="sun-disc"></div><div className="plant-pot pot-one"><div className="stem stem-one"></div><div className="stem stem-two"></div><div className="stem stem-three"></div><div className="leaf-shape l1"></div><div className="leaf-shape l2"></div><div className="leaf-shape l3"></div><div className="leaf-shape l4"></div><div className="pot-body"></div></div><div className="plant-pot pot-two"><div className="stem stem-four"></div><div className="leaf-shape l5"></div><div className="leaf-shape l6"></div><div className="pot-body"></div></div><div className="art-label">YOUR INDOOR OASIS</div></div>
          </section>
          <section className="home-intro"><div><span className="section-kicker">A FRESH START</span><h2>Find a plant that feels like you.</h2></div><p>From easy-care favourites to statement greenery, discover a plant to make your space feel more alive.</p><button className="text-button" onClick={() => go('plants')}>Shop all plants <ArrowRight size={16}/></button></section>
        </main><AboutUs/><ProductList/>
      </>}
      {page === 'plants' && <><div className="page-banner"><span className="section-kicker">SHOP THE COLLECTION</span><h1>Bring the outside in.</h1><p>Find your next leafy companion.</p></div><ProductList/></>}
      {page === 'about' && <><div className="page-banner"><span className="section-kicker">OUR STORY</span><h1>Rooted in good things.</h1></div><AboutUs/></>}
      {page === 'cart' && <CartItem onContinue={() => go('plants')}/>}
      <footer className="site-footer"><div className="footer-brand"><Leaf size={20}/><span>Paradise Nursery</span></div><p>Small plants. Big difference.</p><span>© {new Date().getFullYear()} Paradise Nursery</span></footer>
      <button className="floating-home" aria-label="Back to home" title="Home" onClick={() => go('home')}>⌂</button>
    </div>
  );
}

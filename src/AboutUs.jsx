import React from 'react';
import { Leaf, HeartHandshake, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="section-kicker">OUR ROOTS</div>
      <h2>Plants make a place feel like home.</h2>
      <p className="about-lead">
        Paradise Nursery helps you bring the calm and character of nature indoors.
        We curate approachable houseplants for first-time plant parents and experienced
        collectors alike.
      </p>
      <div className="values-grid">
        <article className="value-card"><Leaf size={25}/><h3>Thoughtfully chosen</h3><p>Popular, versatile plants selected to suit a range of spaces.</p></article>
        <article className="value-card"><HeartHandshake size={25}/><h3>Helpful guidance</h3><p>Clear product details help you choose a plant that fits your routine.</p></article>
        <article className="value-card"><Sprout size={25}/><h3>Grow at your pace</h3><p>Start small, learn as you go, and build your own green corner.</p></article>
      </div>
    </section>
  );
}

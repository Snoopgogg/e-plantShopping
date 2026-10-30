import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.js';
import './App.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving air quality.', cost: '$15' },
      { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: '$12' },
      { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and purifies the air.', cost: '$18' },
      { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114339_1280.jpg', description: 'Adds humidity to the air and removes toxins.', cost: '$20' },
      { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/01/05/03/rubber-plant-4809757_1280.jpg', description: 'Easy to grow and removes toxins from the air.', cost: '$17' },
      { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'Purifies air and has healing properties.', cost: '$14' }
    ]
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=800&q=80', description: 'Calming scent, great for relaxation.', cost: '$20' },
      { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=800&q=80', description: 'Sweet fragrance, promotes restful sleep.', cost: '$18' },
      { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&w=800&q=80', description: 'Invigorating scent, also great for cooking.', cost: '$15' },
      { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg', description: 'Refreshing aroma, perfect for teas.', cost: '$12' },
      { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/07/25/18/58/lemon-balm-4363718_1280.jpg', description: 'Citrusy scent that calms the mind.', cost: '$14' },
      { name: 'Eucalyptus', image: 'https://cdn.pixabay.com/photo/2015/02/06/16/51/eucalyptus-626417_1280.jpg', description: 'Fresh menthol scent, clears sinuses.', cost: '$22' }
    ]
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Citronella', image: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/greenhouse-1084228_1280.jpg', description: 'Natural mosquito repellent.', cost: '$16' },
      { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/01/11/07/flower-6986274_1280.jpg', description: 'Repels mosquitoes and other insects.', cost: '$10' },
      { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2016/01/13/15/48/basil-1138920_1280.jpg', description: 'Repels flies and mosquitoes.', cost: '$12' },
      { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/05/13/44/cat-832259_1280.jpg', description: 'Repels insects, loved by cats.', cost: '$13' },
      { name: 'Chrysanthemum', image: 'https://cdn.pixabay.com/photo/2019/10/10/17/49/chrysanthemum-4539247_1280.jpg', description: 'Contains natural insecticide pyrethrin.', cost: '$18' },
      { name: 'Lemongrass', image: 'https://cdn.pixabay.com/photo/2015/01/13/16/39/lemongrass-598653_1280.jpg', description: 'Strong citrus scent deters mosquitoes.', cost: '$15' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Our Plants</h1>
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h2 className="category-title">{category.category}</h2>
          <div className="product-grid">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p className="price">{plant.cost}</p>
                <button
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

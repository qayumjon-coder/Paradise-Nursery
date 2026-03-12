import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", price: 15, description: "Produces oxygen at night, improving air quality.", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg" },
      { name: "Spider Plant", price: 12, description: "Filters formaldehyde and xylene from the air.", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg" },
      { name: "Peace Lily", price: 18, description: "Removes mold spores and purifies the air.", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg" },
      { name: "Boston Fern", price: 16, description: "Adds humidity to the air and removes toxins.", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg" },
      { name: "Rubber Plant", price: 20, description: "Easy to care for and absorbs indoor air pollutants.", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg" },
      { name: "Aloe Vera", price: 10, description: "Purifies air and has healing properties for skin.", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg" }
    ]
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      { name: "Lavender", price: 20, description: "Calming scent, used in aromatherapy.", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop" },
      { name: "Jasmine", price: 25, description: "Sweet fragrance, promotes relaxation.", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop" },
      { name: "Rosemary", price: 15, description: "Invigorating scent, often used in cooking.", image: "https://cdn.pixabay.com/photo/2019/11/29/19/46/rosemary-4661879_1280.jpg" },
      { name: "Mint", price: 12, description: "Refreshing aroma, used in teas and foods.", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg" },
      { name: "Lemon Balm", price: 14, description: "Citrusy scent, relieves stress and anxiety.", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg" },
      { name: "Hyacinth", price: 22, description: "Beautiful blooming plant with strong sweet fragrance.", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { name: "Jade Plant", price: 12, description: "Succulent with fleshy, oval-shaped leaves.", image: "https://cdn.pixabay.com/photo/2014/08/04/21/07/jade-410080_1280.jpg" },
      { name: "Echeveria", price: 10, description: "Rosette-forming succulent, comes in various colors.", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg" },
      { name: "Haworthia", price: 14, description: "Small houseplant with textured leaves.", image: "https://cdn.pixabay.com/photo/2016/02/09/09/58/haworthia-1188555_1280.jpg" },
      { name: "Sedum", price: 10, description: "Hardy succulent, perfect for small pots.", image: "https://cdn.pixabay.com/photo/2018/06/25/11/30/stonecrop-3496666_1280.jpg" },
      { name: "Burro's Tail", price: 15, description: "Trailing succulent with bead-like leaves.", image: "https://cdn.pixabay.com/photo/2020/07/04/14/03/succulent-5369523_1280.jpg" },
      { name: "Zebra Plant", price: 12, description: "Striking succulent with white striped leaves.", image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/zebra-plant-2072008_1280.jpg" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.price }));
  };

  const isAddedToCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div>
      <Navbar />
      <div className="product-list-container">
        {plantsArray.map((categoryObj, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{categoryObj.category}</h2>
            <div className="product-grid">
              {categoryObj.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <h3 className="product-name">{plant.name}</h3>
                  <p className="product-description" style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>{plant.description}</p>
                  <p className="product-price">${plant.price}</p>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAddedToCart(plant.name)}
                  >
                    {isAddedToCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

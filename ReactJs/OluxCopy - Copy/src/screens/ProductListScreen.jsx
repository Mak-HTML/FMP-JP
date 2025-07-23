import React from 'react';
import products from '../data/product';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

function ProductListScreen() {
  const categories = [
    { name: '3D Printers', image: '/images/categories/3D Printers.webp' },
    { name: 'Casserole Pots', image: '/images/categories/Casserole Pots.webp' },
    { name: 'Dog Cat Electric Clippers', image: '/images/categories/Dog Cat Electric Clippers.webp' },
    { name: 'Dining Sets', image: '/images/categories/Dining Sets.webp' },
    { name: 'DressUp Kids', image: '/images/categories/DressUp Kids.webp' },
    { name: 'Education', image: '/images/categories/Education.webp' },
    { name: 'Pasta', image: '/images/categories/Pasta.webp' },
    { name: 'Screen Protectors', image: '/images/categories/Screen Protectors.webp' },
    { name: 'Sim Tools', image: '/images/categories/Sim Tools.webp' },
  ];

  return (
    <>
    
      <Slider />

    
      <div className="container mb-5">
        <h4 className="mb-3">Explore Categories</h4>
        <div className="row">
          {categories.map((cat, idx) => (
            <div key={idx} className="col-4 col-md-2 mb-3 text-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid border rounded mb-1"
                style={{ height: '100px', objectFit: 'cover' }}
              />
              <small>{cat.name}</small>
            </div>
          ))}
        </div>
      </div>

     
      <div className="container">
        <div className="row">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductListScreen;

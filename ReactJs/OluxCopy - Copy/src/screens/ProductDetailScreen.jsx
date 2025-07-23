import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/product';

function ProductDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h3 className="text-center mt-5">Product not found</h3>;

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: '800px' }}>
        <img
          src={product.image}
          className="card-img-top p-4"
          alt={product.title}
          style={{ height: '400px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text text-muted">{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
          <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailScreen;

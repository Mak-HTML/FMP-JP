import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="text-muted">${product.price}</p>
          <button
            className="btn btn-primary mt-auto"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

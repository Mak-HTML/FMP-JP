import React from "react";

function CategoryCard({ title, image }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img
          src={image}
          className="card-img-top p-3"
          alt={title}
          style={{ height: "150px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;

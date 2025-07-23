import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Electronics", image: "/images/categories/electronics.jpg" },
  { title: "Fashion", image: "/images/categories/fashion.jpg" },
  { title: "Mobiles", image: "/images/categories/mobiles.jpg" },
  { title: "Watches", image: "/images/categories/watches.jpg" },
  { title: "Beauty", image: "/images/categories/beauty.jpg" },
  { title: "Appliances", image: "/images/categories/appliances.jpg" },
  { title: "Groceries", image: "/images/categories/groceries.jpg" },
  { title: "Kids", image: "/images/categories/kids.jpg" },
];

function ExploreCategories() {
  return (
    <div className="mt-5">
      <h4 className="mb-4">📦 Explore Categories</h4>
      <div className="row">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} title={cat.title} image={cat.image} />
        ))}
      </div>
    </div>
  );
}

export default ExploreCategories;

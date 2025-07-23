import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.search.value.trim();
    if (keyword) {
      alert(`Search for: ${keyword}`); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
      
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Daraz.PK
        </Link>

       
        <form className="d-flex me-3 ms-auto" onSubmit={handleSearch}>
          <input
            className="form-control form-control-sm me-2"
            type="search"
            name="search"
            placeholder="Search products"
            aria-label="Search"
          />
          <button className="btn btn-sm btn-outline-light" type="submit">
            Search
          </button>
        </form>

      
        <div className="d-flex align-items-center">
          <span className="text-white me-3">Online Shopping</span>
          <button className="btn btn-outline-light btn-sm">زبان تبدیل کریں</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("User fetch error", err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Detail</h2>
      <ul>
      <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Name:</strong> {user.firstName} {user.lastName}</li>
        <li><strong>Age:</strong> {user.age}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Phone:</strong> {user.phone}</li>
        <li><strong>Birth Date:</strong> {user.birthDate}</li>
        <li><strong>City:</strong> {user.city}</li>
        <li><strong>Country:</strong> {user.country}</li>
      </ul>
      <Link to="/" className="action-btn view">← Back</Link>
    </div>
  );
}

export default EmployeeDetail;

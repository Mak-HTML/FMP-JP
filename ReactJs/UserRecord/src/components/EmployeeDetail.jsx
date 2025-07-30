import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('User Fetch Error:', err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Detail</h2>
      <ul>
        <li><strong>Full Name:</strong> {user.firstName} {user.lastName}</li>
        <li><strong>Age:</strong> {user.age}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Phone:</strong> {user.phone}</li>
        <li><strong>Gender:</strong> {user.gender}</li>
        <li><strong>Birth Date:</strong> {user.birthDate}</li>
        <li><strong>City:</strong> {user.address?.city}</li>
        <li><strong>University:</strong> {user.university}</li>
      </ul>
      <Link to="/" className="action-btn view">← Back</Link>
    </div>
  );
}

export default EmployeeDetail;

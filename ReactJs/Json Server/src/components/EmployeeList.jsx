import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

function EmployeeList() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: ''
  });

  // Fetch data from JSON Server
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Failed to load users:", err));
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;
  
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.error("Delete failed:", err));
  };

  // Handle Edit Click
  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditForm({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      phone: user.phone
    });
  };

  // Handle Edit Form Change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit Edit Form
  const handleEditSave = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...editForm })
    })
      .then(res => res.json())
      .then(updatedUser => {
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
        setEditingId(null);
      })
      .catch(err => console.error("Update failed:", err));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="7">No users found or API not loaded.</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                {editingId === user.id ? (
                  <>
                    <td><input name="firstName" value={editForm.firstName} onChange={handleEditChange} /></td>
                    <td><input name="lastName" value={editForm.lastName} onChange={handleEditChange} /></td>
                    <td><input name="age" value={editForm.age} onChange={handleEditChange} /></td>
                    <td><input name="email" value={editForm.email} onChange={handleEditChange} /></td>
                    <td><input name="phone" value={editForm.phone} onChange={handleEditChange} /></td>
                    <td>
                      <button className="action-btn view" onClick={() => handleEditSave(user.id)}>Save</button>
                      <button className="action-btn delete" onClick={() => setEditingId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/employee/${user.id}`} className="action-btn view">View</Link>
                      <button className="action-btn edit" onClick={() => handleEditClick(user)}>Edit</button>
                      <button className="action-btn delete" onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Frm.css';

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [salary, setSalary] = useState('');
  const [designation, setDesignation] = useState('');
  const [allRecords, setAllRecords] = useState(
    JSON.parse(localStorage.getItem('employees')) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !city || !salary || !designation) {
      alert('All fields are required.');
      return;
    }

    const newRecord = {
      id: Math.floor(Math.random() * 100000),
      name,
      email,
      password,
      city,
      salary,
      designation,
    };

    const updatedRecords = [...allRecords, newRecord];
    localStorage.setItem('employees', JSON.stringify(updatedRecords));
    alert('Employee added successfully!');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" className="form-control" onChange={(e) => setSalary(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" className="form-control" onChange={(e) => setDesignation(e.target.value)} />
        </div>
      <div className='d-flex'>
      <button type="submit" className="btn btn-primary mb-3">Add </button>
      <Link to="/" className="btn btn-secondary ms-2 mb-3">View </Link>
      </div>
      </form>
    </div>
  );
};

export default Form;

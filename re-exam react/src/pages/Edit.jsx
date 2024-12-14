import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(location.state);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let allEmployees = JSON.parse(localStorage.getItem('employees'));
    allEmployees = allEmployees.map(emp => emp.id === employee.id ? employee : emp);
    localStorage.setItem('employees', JSON.stringify(allEmployees));
    alert('Employee updated successfully!');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(employee).map(([key, value]) => (
          key !== 'id' && (
            <div className="mb-3" key={key}>
              <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input type="text" className="form-control" name={key} value={value} onChange={handleChange} />
            </div>
          )
        ))}
        <button type="submit" className="btn btn-primary">Update Employee</button>
      </form>
    </div>
  );
};

export default Edit;

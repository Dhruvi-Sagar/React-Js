import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import './table.css';
import "bootstrap/dist/css/bootstrap.min.css";   

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    alert('Employee deleted successfully!');
  };

  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      <Link to="/add" className="btn btn-success mb-3">Add Employee</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.city}</td>
              <td>{emp.salary}</td>
              <td>{emp.designation}</td>
              <td>
                <button className="btn btn-danger me-2" onClick={() => deleteEmployee(emp.id)}>
                  <MdDelete />
                </button>
                <button className="btn btn-primary" onClick={() => navigate('/edit', { state: emp })}>
                  <FaEdit />
                </button>
              </td>
            </tr>
          )) : <tr><td colSpan="7" className="text-center">No records found.</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

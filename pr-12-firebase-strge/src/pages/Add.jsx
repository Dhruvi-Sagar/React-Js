import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../Redux/Action/TodoAction";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name cannot be empty.");
      return;
    }
    const obj = { name };
    dispatch(addUser(obj));
    alert("Record added successfully.");
    setName("");
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column align-items-center py-4"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2f4f8", // Light gray background
        color: "#2c3e50", // Dark slate blue text for contrast
      }}
    >
      {/* Header */}
      <h1 className="mb-4" style={{ color: "#1a252f" }}> {/* Dark title */}
        Add New Todo
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="shadow-lg p-4 rounded"
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "#ffffff", // White background for the form
          border: "1px solid #d1d5db", // Light gray border
        }}
      >
        <div className="mb-3">
          <label htmlFor="todoName" className="form-label" style={{ color: "#1a252f" }}>
            Todo Name
          </label>
          <input
            type="text"
            id="todoName"
            className="form-control"
            placeholder="Enter todo name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{
              borderColor: "#b0bec5", // Cool gray border
              borderRadius: "4px",
              backgroundColor: "#f8f9fa", // Light off-white input field
            }}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#34495e", // Dark slate blue button
              color: "#ecf0f1", // Light text on dark button
              border: "none",
              borderRadius: "4px",
              padding: "0.5rem 1rem",
            }}
          >
            Add
          </button>
          <Link
            to="/"
            className="btn"
            style={{
              backgroundColor: "#2c3e50", // Even darker button for View
              color: "#ecf0f1",
              border: "none",
              borderRadius: "4px",
              padding: "0.5rem 1rem",
            }}
          >
            View
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
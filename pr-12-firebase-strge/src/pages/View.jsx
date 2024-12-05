import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdAssignmentAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { deleteUse, view } from "../Redux/Action/TodoAction";

const View = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(view());
    }, [dispatch]);

    const users = useSelector((state) => state.crud.user);

    const deleteRecord = (id) => {
        dispatch(deleteUse(id));
        alert("Record deleted successfully.");
    };

    return (
        <div
            className="d-flex flex-column align-items-center py-4"
            style={{
                minHeight: "100vh",
                backgroundColor: "#e8eff4", // Light blue-gray background
                color: "#2a2d34", // Dark charcoal text
            }}
        >
            {/* Header */}
            <header
                className="d-flex"
                style={{
                  
                    color: "darkblue", // Very light gray text
                    fontFamily: "sans-serif",
                }}
            >
                <h2 className="mb-3" align="center" style={{ fontSize: "40px",fontWeight:"900",}}>
                    TODO LIST
                </h2>
            </header>

            {/* User List */}
            <div
                className="container shadow-sm p-4 rounded"
                style={{
                    maxWidth: "900px",
                    backgroundColor: "#f0f4f8", // Light cool gray
                    border: "1px solid #d3dce6", // Soft gray border
                }}
            >
                {users.map((val) => (
                    <div
                        className="d-flex align-items-center justify-content-between border-bottom py-3"
                        key={val.id}
                        style={{
                            borderColor: "#cbd2da", // Muted border color
                        }}
                    >
                        <span className="fs-5" style={{ color: "#2a2d34" }}>
                            {val.name}
                        </span>
                        <button
                            onClick={() => deleteRecord(val.id)}
                            className="btn"
                            style={{
                                backgroundColor: "#e94e77", // Soft red button
                                color: "#fff",
                                fontSize: "16px",
                                border: "none",
                                borderRadius: "4px",
                            }}
                        >
                            <MdDelete size={24} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Button */}
            <div className="mt-4">
                <Link
                    to="/add"
                    className="btn d-flex align-items-center justify-content-center"
                    style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#3e4b5b", // Muted navy button
                        color: "#f3f6f9", // Very light text
                        fontSize: "24px",
                        border: "none",
                        borderRadius: "50%",
                    }}
                >
                    <MdAssignmentAdd />
                </Link>
            </div>
        </div>
    );
};

export default View;
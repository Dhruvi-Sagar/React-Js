import React, { useEffect, useState } from "react";
import Axios from "axios";
import './Stle.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Method() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const getRecipes = async () => {
    try {
      const response = await Axios("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load recipes. Please try again later.");
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <header
        className="text-center py-4 bg-dark text-white"
        style={{ fontFamily: "serif" }}
      >
        <h1>Recipes Axios</h1>
        <p>Discover a collection of recipes fetched using Axios API</p>
      </header>

      <main className="container my-5">
        {/* Error Message */}
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {/* Recipes Grid */}
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5"
                key={recipe.id}
              >
                <div className="card shadow-sm h-100">
                  <img
                    src={recipe.image || "https://via.placeholder.com/300"}
                    className="card-img-top"
                    alt={recipe.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.25rem",
                      borderTopRightRadius: "0.25rem",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-truncate"
                      title={recipe.name}
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {recipe.name}
                    </h5>
                    <p className="card-text">
                      <strong>Ingredients:</strong>{" "}
                      {recipe.ingredients.join(", ")}
                    </p>
                  </div>
                  <div className="card-footer bg-light text-center">
                    <button className="btn btn-primary btn-sm">
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : !error ? (
            <div className="text-center w-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Fetching recipes...</p>
            </div>
          ) : null}
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; {new Date().getFullYear()} Recipe App</p>
      </footer>
    </div>
  );
}

export default Method;

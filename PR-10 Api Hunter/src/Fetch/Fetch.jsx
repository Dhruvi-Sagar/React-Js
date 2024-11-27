import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style2.css";

function Fetch() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app-container" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-5">
        <h1
          className="text-center mb-5"
          style={{
            fontFamily: "serif",
            fontWeight: "700",
            paddingTop: "30px",
          }}
        >
          Products Fetch
        </h1>
        {/* Error Handling */}
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}
        {/* Product Grid */}
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={product.id}
              >
                <div className="card product-card shadow-sm border-0 h-100">
                  <img
                    src={product.thumbnail || "https://via.placeholder.com/300"}
                    alt={product.title}
                    className="card-img-top product-card-img"
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-truncate"
                      title={product.title}
                    >
                      {product.title}
                    </h5>
                   
                  
                    </div>
                  </div>
                </div>
            
            ))
          ) : (
            !error && (
              <div className="text-center w-100">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading products...</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Fetch;

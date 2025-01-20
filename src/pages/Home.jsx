import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
     const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) throw new Error("Failed to fetch products.");
        const data = await response.json();
          setProducts(data);
          setData(data);
          setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
    
     const debouce = (func, delay) => {
       let timeout;
       return (...args) => {
         clearTimeout(timeout);
         setTimeout(() => {
           func(...args);
         }, delay);
       };
     };
     
     const handlesearch = debouce((query) => {
    setProducts(
     data.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase()))
   );

  }, 300)
    
     
  const handlechange = (event) => {
    const query = event.target.value;
    setQuery(query);
    handlesearch(query);
    };
    

  return (
    <div className="home">
      <header className="header">
        <h3 className="title">Home</h3>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search a product"
            value={query}
            onChange={handlechange}
            className="search-bar"
          />
        </div>
      </header>

      <main className="products">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading products. Please try again later.</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img
                  src={product.images?.[0] || "https://via.placeholder.com/150"}
                  alt={product.title || "Product"}
                />
                <button className="add-to-cart">+</button>
              </div>
              <div className="product-details">
                <p className="product-title">
                  {product.title || "Unknown Product"}
                </p>
                <span className="product-price">{product.price || "0"}$</span>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Home;

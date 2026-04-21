// ProductCard.jsx
import React from "react";

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      
      <h2>{name}</h2>
      <p style={styles.price}>₹{price}</p>
      <p>{description}</p>

      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  price: {
    color: "green",
    fontWeight: "bold"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default ProductCard;
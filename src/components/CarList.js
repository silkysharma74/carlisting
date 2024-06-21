import React from "react";
import { Link } from "react-router-dom";

const CarList = ({ cars }) => {
  return (
    <div style={styles.container}>
      <h1>Car Listing</h1>
      <div style={styles.grid}>
        {cars.map((car) => (
          <div key={car.id} style={styles.card}>
            <Link to={`/car/${car.id}`} style={styles.link}>
              <img
                src={`https://via.placeholder.com/300x200?text=${car.title}`}
                alt={car.title}
                style={styles.image}
              />
              <div style={styles.cardContent}>
                <h2 style={styles.carTitle}>{car.title}</h2>
                <p style={styles.carBrandModel}>
                  {car.brand} {car.model} ({car.year})
                </p>
                <p style={styles.carPrice}>${car.price}</p>
                <p style={styles.carDescription}>{car.description}</p>
                <div style={styles.carMoreInfo}>
                  <p>
                    <strong>Fuel Type:</strong> {car.fuelType}
                  </p>
                  <p>
                    <strong>Capacity:</strong> {car.capacity} seats
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "20px",
  },
  carTitle: {
    fontSize: "20px",
    margin: "0 0 10px 0",
    color: "#333",
  },
  carBrandModel: {
    fontSize: "16px",
    margin: "0 0 10px 0",
    color: "#555",
  },
  carPrice: {
    fontSize: "18px",
    margin: "0 0 10px 0",
    color: "#007bff",
  },
  carDescription: {
    fontSize: "14px",
    margin: "0 0 10px 0",
    color: "#777",
  },
  carMoreInfo: {
    fontSize: "14px",
    color: "#555",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
};

export default CarList;

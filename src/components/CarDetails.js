import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CarDetails = ({ cars, updateCarDetails }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const carData = cars.find((car) => car.id === parseInt(id));
    setCar(carData);
  }, [id, cars]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      updateCarDetails(car);
    }
    setIsEditing(!isEditing);
  };

  if (!car) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={`https://via.placeholder.com/400x300?text=${car.title}`}
          alt={car.title}
          style={styles.image}
        />
        <div style={styles.buttonContainer}>
          <button onClick={handleEditToggle} style={styles.button}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button onClick={handleBack} style={styles.button}>
            Back
          </button>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <h1 style={styles.title}>Car Details</h1>
        <div style={styles.detail}>
          <label style={styles.label}>
            Title:
            <input
              type="text"
              name="title"
              value={car.title}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Description:
            <textarea
              name="description"
              value={car.description}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.textarea}
            />
          </label>
          <label style={styles.label}>
            Price:
            <input
              type="number"
              name="price"
              value={car.price}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Fuel Type:
            <input
              type="text"
              name="fuelType"
              value={car.fuelType}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Capacity:
            <input
              type="number"
              name="capacity"
              value={car.capacity}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Brand:
            <input
              type="text"
              name="brand"
              value={car.brand}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Model:
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Year:
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Color:
            <input
              type="text"
              name="color"
              value={car.color}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
  },
  imageContainer: {
    flex: "0 0 30%",
    marginRight: "20px",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "20px",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  detailsContainer: {
    flex: "1 1 70%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  textarea: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "0 10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default CarDetails;

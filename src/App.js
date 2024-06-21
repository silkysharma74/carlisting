import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import carsData from "../src/components/carData"; // Adjust the path as necessary
import Autocomplete from "./components/autocomplete";

const App = () => {
  const [cars, setCars] = useState(carsData);

  const updateCarDetails = (updatedCar) => {
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList cars={cars} />} />
        <Route
          path="/car/:id"
          element={
            <CarDetails cars={cars} updateCarDetails={updateCarDetails} />
          }
        />
        <Route path="/autocomplete" element={<Autocomplete />} />
      </Routes>
    </Router>
  );
};

export default App;

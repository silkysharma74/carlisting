import React, { useState } from "react";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "El Paso",
  "Nashville",
  "Detroit",
  "Oklahoma City",
  "Portland",
  "Las Vegas",
  "Memphis",
  "Louisville",
  "Baltimore",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Sacramento",
  "Kansas City",
  "Long Beach",
  "Mesa",
  "Atlanta",
  "Colorado Springs",
  "Virginia Beach",
  "Raleigh",
  "Omaha",
  "Miami",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Arlington",
  "New Orleans",
  "Wichita",
  "Cleveland",
  "Tampa",
  "Bakersfield",
  "Aurora",
  "Honolulu",
  "Anaheim",
  "Santa Ana",
  "Corpus Christi",
  "Riverside",
  "Lexington",
  "St. Louis",
  "Stockton",
  "Pittsburgh",
  "Saint Paul",
  "Cincinnati",
  "Anchorage",
  "Henderson",
  "Greensboro",
  "Plano",
  "Newark",
  "Toledo",
  "Lincoln",
  "Orlando",
  "Chula Vista",
  "Jersey City",
  "Chandler",
  "Fort Wayne",
  "Buffalo",
  "Durham",
  "St. Petersburg",
  "Irvine",
  "Laredo",
  "Lubbock",
  "Madison",
  "Gilbert",
  "Norfolk",
  "Reno",
  "Winston-Salem",
  "Glendale",
  "Hialeah",
  "Garland",
  "Scottsdale",
  "Irving",
  "Chesapeake",
  "North Las Vegas",
  "Fremont",
  "Baton Rouge",
  "Richmond",
  "Boise",
  "San Bernardino",
];

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    outline: "none",
  },
  dropdown: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "5px",
    maxHeight: "150px",
    overflowY: "auto",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
  },
  dropdownItemHover: {
    backgroundColor: "#f0f0f0",
  },
};

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      const filtered = cities
        .filter(
          (city) =>
            city.toLowerCase().startsWith(value.toLowerCase()) ||
            city.toLowerCase().endsWith(value.toLowerCase()) ||
            city.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 10);

      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && hoverIndex < filteredCities.length - 1) {
      setHoverIndex(hoverIndex + 1);
    } else if (e.key === "ArrowUp" && hoverIndex > 0) {
      setHoverIndex(hoverIndex - 1);
    } else if (e.key === "Enter" && hoverIndex >= 0) {
      setQuery(filteredCities[hoverIndex]);
      setFilteredCities([]);
    }
  };

  const handleItemClick = (city) => {
    setQuery(city);
    setFilteredCities([]);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search cities..."
        style={styles.input}
      />
      {filteredCities.length > 0 && (
        <div style={styles.dropdown}>
          {filteredCities.map((city, index) => (
            <div
              key={city}
              onClick={() => handleItemClick(city)}
              onMouseEnter={() => setHoverIndex(index)}
              style={{
                ...styles.dropdownItem,
                ...(hoverIndex === index ? styles.dropdownItemHover : {}),
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;

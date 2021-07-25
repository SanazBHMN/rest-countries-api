import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Searchbox from "../components/Searchbox";

function Homepage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <Header />
      <Searchbox />
      <Dropdown />
      {countries.map((country) => (
        <Card
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      ))}
    </div>
  );
}

export default Homepage;

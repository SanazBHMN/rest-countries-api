import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Searchbox from "../components/Searchbox";

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");

  // console.log(countryName, countries);

  useEffect(() => {
    console.log(`searching for ${countryName}`);
    if (countryName === "") {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => setCountries(data));
    } else {
      fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return [];
          }
        })
        .then((data) => setCountries(data));
    }
  }, [countryName]);

  function handleSearch(e) {
    setCountryName(e.target.value);
  }
  // console.log(countryName)

  return (
    <div>
      <Header />
      <Searchbox input={countryName} search={handleSearch} />
      <Dropdown />
      <div className="container">
        {countries.map((country) => {
          // console.log(country);
          return <Card key={country.name} country={country} />;
        })}
      </div>
    </div>
  );
}

export default Homepage;

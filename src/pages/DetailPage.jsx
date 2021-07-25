import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function DetailPage(props) {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  return (
    <div className="country-card">
      <div className="country-flag">
        <img src={country.flag} alt="country-flag" />
      </div>
      <div className="country-info">
        <h3 className="country-name">{name}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}

export default DetailPage;

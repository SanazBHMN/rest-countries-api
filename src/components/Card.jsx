import React from "react";

function Card(props) {
  let { flag, name, population, region, capital } = props.country;

  function fetchDetails() {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="country-card" onClick={fetchDetails}>
      <div className="country-flag">
        <img src={flag} alt="country-flag" />
      </div>
      <div className="country-info">
        <h3 className="country-name">{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

export default Card;

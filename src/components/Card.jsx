import React from "react";

function Card(props) {
  let { flag, name, population, region, capital } = props.country;

  return (
    <a href={`/detail/${name}`}>
      <div className="country-card">
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
    </a>
  );
}

export default Card;

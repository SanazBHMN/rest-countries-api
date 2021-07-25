import React from "react";

function Card(props) {
  // console.log(props.region)
  return (
    <div className="country-card">
      <div className="country-flag">
        <img src={props.flag} alt="country-flag" />
      </div>
      <div className="country-info">
        <h3 className="country-name">{props.name}</h3>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { useHistory } from "react-router-dom";

function Card(props) {
  let { flag, name, population, region, capital } = props.country;
  const history = useHistory();

  // function fetchDetails() {
  //   fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }

  return (
    // <a href={`/detail/${name}`} >
    <div
      className="country-card"
      onClick={(e) => {
        props.selectCountry(props.country);
        history.push(`/detail/${name}`);
      }}
    >
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
    // </a>
  );
}

export default Card;

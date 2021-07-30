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
  console.log(country);

  return (
    <div className="detail-page">
      <div className="btnBack">
        <button className="btn">
          <i className="fas fa-arrow-left"></i>
          <a href={`/`}>Back</a>
        </button>
      </div>

      <div className="country-flag">
        <img src={country.flag} alt="country-flag" />
      </div>
      <div className="details">
        <h2>{country.name}</h2>
        <p>Native Name: {country.nativeName}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
        <p>Top Level Domain: {country.topLevelDomain}</p>
        <p>Currencies: {country.currencies?.[0].name}</p>
        <p>Languages: {country.languages?.map(language => <span>{language.name}</span>)}</p>
        <p>
          Borders:{" "}
          {country.borders?.map((border) => (
            <span>{border}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default DetailPage;

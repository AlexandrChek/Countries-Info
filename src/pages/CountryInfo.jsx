import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import CountryLink from '../components/CountryLink';
import PopulationChart from '../components/PopulationChart';
import styles from '../styles/pages/CountryInfo.module.css';

const CountryInfo = () => {
  const { state } = useLocation();
  const [countryData, setCountryData] = useState(null);
  const { flag, borderCountries, population } = countryData || {};
  const SERVER = import.meta.env.VITE_SERVER;

  useEffect(() => {
    fetch(`${SERVER}/api/country-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((error) => {
        alert('There is no information available about this country yet');
        console.error('Error retrieving country data:', error);
      });
  }, [state]);

  return (
    <>
      <h2 className={styles.title}>
        {state.name}
        {flag && <img src={flag} alt="flag" className={styles.flag} />}
      </h2>
      {!countryData && <Loading />}
      {borderCountries && borderCountries.length ? (
        <>
          <h4>Border Countries</h4>
          <ul className={styles.countryList}>
            {borderCountries.map((borderCountry, index) => (
              <li key={index}>
                <CountryLink
                  to={`/country/${borderCountry.countryCode}`}
                  state={{
                    name: borderCountry.commonName,
                    countryCode: borderCountry.countryCode,
                  }}
                >
                  {borderCountry.commonName}
                </CountryLink>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {population && (
        <>
          <h4>Population Over Time</h4>
          {population && population.length ? (
            <PopulationChart population={population} />
          ) : (
            <p>No data</p>
          )}
        </>
      )}
    </>
  );
};

export default CountryInfo;

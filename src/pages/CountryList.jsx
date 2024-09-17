import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import LinkList from '../components/LinkList';
import styles from '../styles/pages/CountryList.module.css';

const CountryList = () => {
  const [countries, setCountries] = useState(null);
  const SERVER = import.meta.env.VITE_SERVER;

  useEffect(() => {
    fetch(`${SERVER}/api/countries`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error('Error getting list of countries:', error);
        alert('Temporary server problems. Please try again later.');
      });
  }, []);

  return (
    <>
      <h1 className={styles.title}>Country List</h1>
      {!countries ? <Loading /> : <LinkList countries={countries} />}
    </>
  );
};

export default CountryList;

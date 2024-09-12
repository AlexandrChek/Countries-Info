import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CountryList = () => {
  const [countries, setCountries] = useState([])
  const SERVER = import.meta.env.VITE_SERVER

  useEffect(() => {
    fetch(`${SERVER}/api/countries`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error getting list of countries:', error))
  }, [])

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link
                to={`/country/${country.countryCode}`}
                state={country}
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountryList

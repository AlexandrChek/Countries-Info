import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

const CountryList = () => {
  const [countries, setCountries] = useState(null)
  const SERVER = import.meta.env.VITE_SERVER

  useEffect(() => {
    fetch(`${SERVER}/api/countries`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error('Error getting list of countries:', error)
        alert('Temporary server problems. Please try again later.')
      })
  }, [])

  return (
    <>
      <h1>Country List</h1>
      {!countries
        ? <Loading />
        : (
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
        )
      }
    </>
  )
}

export default CountryList

import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Chart } from 'chart.js/auto'

const CountryInfo = () => {
  const { state } = useLocation()
  const [countryData, setCountryData] = useState(null)
  const SERVER = import.meta.env.VITE_SERVER

  useEffect(() => {
    fetch(`${SERVER}/api/country-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data)
        
        if (data.population) {
          const ctx = document.getElementById('populationChart').getContext('2d')
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: data.population.map((item) => item.year),
              datasets: [{
                label: 'Population Over Time',
                data: data.population.map((item) => item.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
              }]
            }
          })
        }
      })
      .catch((error) => console.error('Error retrieving country data:', error))
  }, [])

  if (!countryData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>
        {countryData.name}
        <img src={countryData.flag} alt="flag" />
      </h1>
      <h2>Border Countries</h2>
      <ul>
        {countryData.borderCountries.map((borderCountry) => (
          <li key={borderCountry}>
            <Link to={`/country/${borderCountry}`}>{borderCountry}</Link>
          </li>
        ))}
      </ul>
      <h2>Population Over Time</h2>
      <canvas id="populationChart"></canvas>
    </div>
  )
}

export default CountryInfo

import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Chart } from 'chart.js/auto'
import styles from '../styles/CountryInfo.module.css'

const CountryInfo = () => {
  const { state } = useLocation()
  const [countryData, setCountryData] = useState(null)
  const chartRef = useRef(null)
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
      .then((data) => setCountryData(data))
      .catch((error) => console.error('Error retrieving country data:', error))
  }, [state])

  useEffect(() => {
    if (countryData) {
      const canvas = document.getElementById('populationChart')

      if (canvas) {
        const ctx = canvas.getContext('2d')

        // Destroying the previous chart
        if (chartRef.current) {
          chartRef.current.destroy()
        }

        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: countryData.population.map((item) => item.year),
            datasets: [{
              label: 'Population Over Time',
              data: countryData.population.map((item) => item.value),
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
            }]
          }
        })
      }
    }
  }, [countryData])

  // Destroying the chart when unmounting the component
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  if (!countryData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1 className={styles.title}>
        {state.name}
        <img src={countryData.flag} alt="flag" className={styles.flag} />
      </h1>
      {countryData.borderCountries.length
        ? (
          <>
            <h4>Border Countries</h4>
            <ul>
              {countryData.borderCountries.map((borderCountry, index) => (
                <li key={index}>
                  <Link
                    to={`/country/${borderCountry.countryCode}`} 
                    state={{name: borderCountry.commonName, countryCode: borderCountry.countryCode}}
                  >
                    {borderCountry.commonName}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )
        : null
      }
      <h4>Population Over Time</h4>
      <canvas id="populationChart"></canvas>
    </div>
  )
}

export default CountryInfo

import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

const PopulationChart = ({ population }) => {
    const chartRef = useRef(null)

    useEffect(() => {
        if (population && population.length) {
          const canvas = document.getElementById('populationChart')
          const ctx = canvas.getContext('2d')
    
          chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
              labels: population.map((item) => item.year),
              datasets: [{
                label: 'Population Over Time',
                data: population.map((item) => item.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
              }]
            }
          })
        }
    
        return () => {
          if (chartRef.current) {
            chartRef.current.destroy()
          }
        }
    }, [population])

    return <canvas id="populationChart"></canvas>
}

export default PopulationChart
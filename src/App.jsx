import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  console.log(process.env.VITE_BASE_URL)
  return (
    <Router>
      <AppRoutes/>
    </Router>
  )
}

export default App

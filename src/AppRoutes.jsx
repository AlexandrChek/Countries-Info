import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import CountryList from './pages/CountryList'
const CountryInfo = lazy(() => import('./pages/CountryInfo'))

const AppRoutes = () => {
    return (
        <Routes>
             <Route path="/" element={<CountryList />} />
             <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
    )
}

export default AppRoutes
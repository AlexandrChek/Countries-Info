import { Routes, Route } from 'react-router-dom'
import CountryList from './pages/CountryList'
import CountryInfo from './pages/CountryInfo'

const AppRoutes = () => {
    return (
        <Routes>
             <Route path="/" element={<CountryList />} />
             <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
    )
}

export default AppRoutes
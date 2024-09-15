import AppRoutes from './AppRoutes'
import HomeLink from './components/HomeLink'

function App() {
  const setHeight = () => {
    const vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${vh}`)
  }

  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    window.addEventListener('load', setHeight)
    window.addEventListener('resize', setHeight)
  }

  return (
    <>
      <HomeLink />
      <AppRoutes />
    </>
  )
}

export default App

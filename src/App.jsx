import AppRoutes from './AppRoutes'

function App() {
  const setHeight = () => {
    const vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${vh}`)
  }

  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    window.addEventListener('load', setHeight)
    window.addEventListener('resize', setHeight)
  }

  return <AppRoutes/>
}

export default App

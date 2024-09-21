import useSetMinHeight from './hooks/useSetMinHeight';
import AppRoutes from './AppRoutes';
import HomeLink from './components/HomeLink';

function App() {
  useSetMinHeight();

  return (
    <>
      <HomeLink />
      <AppRoutes />
    </>
  );
}

export default App;

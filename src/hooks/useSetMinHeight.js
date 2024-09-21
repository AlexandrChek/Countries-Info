import { useEffect } from 'react';

const useSetMinHeight = () => {
  useEffect(() => {
    const setMinHeight = () => {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      window.addEventListener('load', setMinHeight);
      window.addEventListener('resize', setMinHeight);
    }

    return () => {
      window.removeEventListener('load', setMinHeight);
      window.removeEventListener('resize', setMinHeight);
    };
  }, []);
};

export default useSetMinHeight;

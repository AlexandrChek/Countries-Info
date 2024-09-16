import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import base from '../base.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router basename={base}>
    <App />
  </Router>,
);

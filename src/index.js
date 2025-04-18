// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Dynamically set basename based on host (GitHub Pages vs Vercel)
const getBaseName = () => {
  return window.location.hostname === 'shahriarjahin.github.io' ? '/quiz' : '/';
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={getBaseName()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

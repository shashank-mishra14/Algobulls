import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const express = require('express');
const app= express();
app.listen(8800, () => {
  console.log("server is ready")
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


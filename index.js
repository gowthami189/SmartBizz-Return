import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import './index.css'; // Import global styles

// Create a root element for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

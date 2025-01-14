import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './themes/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <AuthProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
            </AuthProvider>
        </CartProvider>
    </React.StrictMode>
);

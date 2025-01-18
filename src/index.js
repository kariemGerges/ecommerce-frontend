import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './themes/style.css';

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // How many times to retry a failed request
            retry: 2,
            // Exponential backoff or custom function
            retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
            // Don't refetch on window focus (personal preference)
            refetchOnWindowFocus: false,
            // Keep data fresh for 60 seconds before it becomes “stale”
            staleTime: 1000 * 60,
            // Keep data in cache for 5 minutes after it goes inactive
            cacheTime: 1000 * 60 * 5,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <AuthProvider>
                <ThemeProvider>
                    <QueryClientProvider client={queryClient}>
                        <App />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </ThemeProvider>
            </AuthProvider>
        </CartProvider>
    </React.StrictMode>
);

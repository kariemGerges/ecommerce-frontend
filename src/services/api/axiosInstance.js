import axios from 'axios';

// You might store this in .env, e.g. process.env.REACT_APP_API_BASE_URL
const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
});

// Optional: Attach interceptors for auth tokens or logging
axiosClient.interceptors.request.use(
    (config) => {
        // attach token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Logging for debugging
        // console.log(`[Request] ${config.method.toUpperCase()} ${config.url}`, config);

        return config;
    },
    (error) => {
        // Logging
        // console.error('[Request Error]', error);
        return Promise.reject(error);
    }
);

// You can also attach a response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        // console.log('[Response]', response);
        return response;
    },
    (error) => {
        // You might handle global 401/403 here
        // console.error('[Response Error]', error);
        return Promise.reject(error);
    }
);

export default axiosClient;

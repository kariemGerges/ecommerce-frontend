import axios from 'axios';

const API_BASE_URL = 'https://ecommerce-backend-8xv8.onrender.com';

// fetch create order
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

// fetch user orders
export const fetchUserOrders = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw error;
    }
};


export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders`);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
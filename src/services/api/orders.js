import axiosClient from "./axiosInstance";


// create order
export const createOrder = async (orderData) => {
    try {
        const response = await axiosClient.post(`/orders`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

// fetch a user orders
export const fetchUserOrders = async () => {
    try {
        const response = await axiosClient.get(`/orders/myOrders/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw error;
    }
};
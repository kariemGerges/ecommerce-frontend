import axiosClient from '../api/axiosInstance';

// register user
export const registerUser = async (userData) => {
    try {
        const response = await axiosClient.post(`/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// login user
export const loginUser = async (credentials) => {
    try {
        const response = await axiosClient.post(`/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// logout user
export const logoutUser = async () => {
    try {
        const response = await axiosClient.post(`/auth/logout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}


// get user profile
export const getUserProfile = async () => {
    try {
        const response = await axiosClient.get(`/auth/profile`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

import axios from './axiosInstance';

// fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
    }
};

// fetch paginated products
// https://ecommerce-backend-8xv8.onrender.com/products/paginated?page=2&limit=15
export const fetchPaginatedProducts = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(`/products/paginated`, {
            params: {
                page,
                limit,
            },
        });
        return response.data;
        
    } catch (error) {
        console.error('Error fetching paginated products:', error);
        throw error;
    }
};

// fetch filtered products
// https://ecommerce-backend-8xv8.onrender.com/products/filtered?category=electronics
export const fetchFilteredProducts = async ({ queryKey}) => {
    try {
        const [_key, { category, brand, price, page, limit }] = queryKey;
        const response = await axios.get(`/products/filtered`, {
            params: {
                category,
                brand,
                price,
                page,
                limit,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching filtered products:', error);
        throw error;
    }
};

// fetch random products
// https://ecommerce-backend-8xv8.onrender.com/products/random
export const fetchRandomProducts = async () => {
    try {
        const response = await axios.get(`/products/random`);
        return response.data;
    } catch (error) {
        console.error('Error fetching random products:', error);
        throw error;
    }
};

// fetch product by id
export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by id:', error);
        throw error;
    }
};

// admin create product
export const createProduct = async (productData) => {
    try {
        const response = await axios.post(`/products`, productData);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

// admin update product
export const updateProduct = async (id, productData) => {
    try {
        const response = await axios.put(`/products/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// admin delete product
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/products";

export const useProductById = (id, options = {}) => {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => fetchProductById(id),
        enabled: Boolean(id),
        ...options,
        onSuccess: (data) => {
            console.log('Fetched product by id:', data);
        },
        onError: (error) => {
            console.error('Failed to fetch product by id:', error);
        },
    });
};
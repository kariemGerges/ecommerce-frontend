import { useQuery } from "@tanstack/react-query";
import { fetchRandomProducts } from "../../services/api/products";

export const useRandomProducts = (options = {}) => {
    return useQuery({
        queryKey: ['products', 'random'],
        queryFn: fetchRandomProducts,
        ...options,
        onSuccess: (data) => {
            console.log('Fetched random products:', data);
        },
        onError: (error) => {
            console.error('Failed to fetch random products:', error);
        },
    });
};
import { useQuery } from '@tanstack/react-query';
import { fetchFilteredProducts } from '../../services/api/products';

export const useFilteredProducts = (filters, page = 1, limit = 10, options = {}) => {
    console.log('filters 4 from the hook:', filters);

    return useQuery({
        queryKey: ['filteredProducts', { ...filters, page, limit }], // Query key dynamically changes based on filters and pagination
        queryFn: async () => {
            const result = await fetchFilteredProducts({
                queryKey: ['filteredProducts', { ...filters, page, limit }],
            });
            // console.log('Result from queryFn:', result);
            return result;
        }, // Fetch logic
        keepPreviousData: true, // Ensures smooth pagination
        staleTime: 5 * 60 * 1000, // Keeps data fresh for 5 minutes
        onSuccess: (data) => {
            console.log('Data successfully fetched:', data);
        },
        onError: (error) => {
            console.error('Error fetching filtered products:', error);
        },
        ...options,
    });
};
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from '../../services/api/products';

export function usePaginatedProducts(page = 1, limit = 12, options = {}) {
    return useQuery({
        queryKey: ['products', 'paginated', page, limit],
        queryFn: () => fetchPaginatedProducts(page, limit),
        keepPreviousData: true,
        onSuccess: (data) => {
            console.log('Fetched paginated products:', data);
        },
        onError: (error) => {
            console.error('Failed to fetch paginated products:', error);
        },
        ...options,
    });
}

export const useInfiniteProducts = (limit = 12, options = {}) => {
    return useInfiniteQuery({
        queryKey: ['products', 'infinite', limit],
        queryFn: async ({ pageParam = 1 }) => {
            return fetchPaginatedProducts(pageParam, limit);
        },
        getNextPageParam: (lastPage) => {
            // lastPage => { products, currentPage, totalPages, ... }
            if (lastPage.currentPage < lastPage.totalPages) {
                return lastPage.currentPage + 1;
            }
            return undefined; // Stop fetching
        },
        ...options,
    });
};



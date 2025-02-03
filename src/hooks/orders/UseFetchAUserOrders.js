import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchUserOrders } from '../../services/api/orders';

export const useFetchAUserOrders = (userId, options = {}) => {
    return useQuery({
        queryKey: ['userOrders', userId],
        queryFn: () => fetchUserOrders(userId),
        enabled: Boolean(userId),
        ...options,
        onSuccess: (data) => {
            QueryClient.invalidateQueries(['userOrders', userId]);
            console.log('Fetched user orders');
        },
        onError: (error) => {
            console.error('Failed to fetch user orders:', error);
        },
    });
};

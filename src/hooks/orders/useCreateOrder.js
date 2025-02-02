import { useMutation } from '@tanstack/react-query';
import { createOrder } from '../../services/api/orders';

export function useCreateOrder(options = {}) {
    return useMutation({
        mutationKey: ['createOrder'],
        mutationFn: createOrder,
        onSuccess: (data) => {
            if (options?.onSuccess) {
                options.onSuccess(data);
            }

            localStorage.setItem('orderId', data._id);

            console.log('Order created successfully:', data);
        },
        onError: (error) => {
            console.error('Error creating order:', error);
            if (options?.onError) {
                options.onError(error);
            }
        },
        ...options,
    });
}


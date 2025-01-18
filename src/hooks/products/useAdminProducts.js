import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct, deleteProduct, updateProduct } from '../api/products';

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProduct,
        onMutate: async (newProduct) => {
            // Cancel ongoing queries for 'products'
            await queryClient.cancelQueries(['products']);

            // Snapshot the previous data
            const prevAll = queryClient.getQueryData(['products', 'all']);

            // If we have an all-products cache, add the new item
            if (prevAll) {
                queryClient.setQueryData(['products', 'all'], (old) => {
                    return [...old, { ...newProduct, _id: 'temp-id' }];
                });
            }

            return { prevAll };
        },
        // Rollback if error
        onError: (error, newProduct, context) => {
            if (context?.prevAll) {
                queryClient.setQueryData(['products', 'all'], context.prevAll);
            }
        },
        // Invalidate or refetch on success/failure
        onSettled: () => {
            queryClient.invalidateQueries(['products']);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        },
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,
        onMutate: async ({ id, updates }) => {
            await queryClient.cancelQueries(['products']);

            const prevAll = queryClient.getQueryData(['products', 'all']);
            const prevOne = queryClient.getQueryData(['products', id]);

            // Optimistically update single-product cache
            if (prevOne) {
                queryClient.setQueryData(['products', id], {
                    ...prevOne,
                    ...updates,
                    _id: id,
                });
            }

            // Optimistically update the all-products cache
            if (prevAll) {
                queryClient.setQueryData(['products', 'all'], (old) =>
                    old.map((p) => (p._id === id ? { ...p, ...updates } : p))
                );
            }

            return { prevAll, prevOne };
        },
        onError: (error, variables, context) => {
            // Roll back
            if (context?.prevOne) {
                queryClient.setQueryData(
                    ['products', variables.id],
                    context.prevOne
                );
            }
            if (context?.prevAll) {
                queryClient.setQueryData(['products', 'all'], context.prevAll);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        },
        onSettled: (data, error, { id }) => {
            // Always refetch or invalidate
            queryClient.invalidateQueries(['products', id]);
            queryClient.invalidateQueries(['products', 'all']);
        },
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onMutate: async (id) => {
            await queryClient.cancelQueries(['products']);

            const prevAll = queryClient.getQueryData(['products', 'all']);
            const prevOne = queryClient.getQueryData(['products', id]);

            // Remove from all-products
            if (prevAll) {
                queryClient.setQueryData(['products', 'all'], (old) =>
                    old.filter((p) => p._id !== id)
                );
            }

            // Remove the single product from cache
            queryClient.removeQueries(['products', id], { exact: true });

            return { prevAll, prevOne };
        },
        onError: (error, id, context) => {
            // Roll back
            if (context?.prevAll) {
                queryClient.setQueryData(['products', 'all'], context.prevAll);
            }
            if (context?.prevOne) {
                queryClient.setQueryData(['products', id], context.prevOne);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries(['products']);
        },
    });
};

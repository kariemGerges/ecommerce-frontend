// src/hooks/useAuth.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerUser } from '../../services/api/auth';

/**
 * useRegister
 * - Registers a new user (name, email, phone, password).
 * - On success: store token in localStorage, optionally refetch profile, handle side effects.
 */
export function useRegisterUser(options = {}) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: registerUser,

        // handle success/failure
        onSuccess: (data) => {
            // data => { _id, name, email, phone, isAdmin, token }
            localStorage.setItem('token', data.token);

            // Optionally, refetch the profile query if needed
            queryClient.invalidateQueries(['userProfile']);

            // call a callback if provided in `options`
            if (options?.onSuccess) {
                options.onSuccess(data);
            }
        },
        onError: (error) => {
            // You could show a toast, etc.
            console.error('Registration error:', error);
            if (options?.onError) {
                options.onError(error);
            }
        },
        ...options,
    });
}

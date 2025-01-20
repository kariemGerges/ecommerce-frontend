import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../services/api/auth';

/**
 * useGetUserProfile
 * - Fetches the authenticated user’s profile from /auth/profile.
 * - By default, it’s "enabled" only if we have a token in localStorage.
 */

export function useGetUserProfile(options = {}) {
    const token =
        typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    return useQuery({
        queryKey: ['userProfile'],
        queryFn: getUserProfile,
        enabled: !!token, // only fetch if token is present
        staleTime: 1000 * 60 * 5, // 5 minutes
        // Or you could handle onSuccess / onError
        onError: (error) => {
            console.error('User profile fetch error:', error);
            if (options?.onError) {
                options.onError(error);
            }
        },
        onSuccess: (data) => {
            if (options?.onSuccess) {
                options.onSuccess(data);
            }
        },
        ...options,
    });
}

// Sign In Form Component

import { Mail, Lock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLoginUser } from '../../hooks/auth/useLoginUser';

const SignInForm = ({ setIsAuthModalOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [authError, setAuthError] = useState('');
    const mutation = useLoginUser();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(form, {
            onSuccess: () => {
                setAuthError('');
                navigate(location.pathname, { replace: true });
                setIsAuthModalOpen(false);
                alert('Login successful');
            },
            onError: (error) => {
                const message = error.response?.data?.message || error.message;
                console.error('Login error:', error);
                setAuthError(message);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="email"
                        className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="password"
                        className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />
                </div>
            </div>
            <p className="text-red-500 text-sm justify-center text-center ">
                {mutation.isError && `${authError}` }
            </p>
            <button
                type="submit"
                className="w-full bg-[#2D7A46] hover:dark:bg-[#1B4332] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
                {mutation.isLoading ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    );
};

export default SignInForm;

// Sign Up Form Component
import React, { useState } from 'react';
import { User, Mail, Phone, Lock } from 'lucide-react';
import { useRegisterUser } from '../../hooks/auth/useRegisterUser';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ setIsAuthModalOpen }) => {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');

    const {
        mutate: register,
        isLoading,
        isError,
    } = useRegisterUser({
        onSuccess: (data) => {
            setAuthError('');
            navigate('/profile');
            setIsAuthModalOpen(false);
        },
        onError: (error) => {
            const message = error.response?.data?.message || error.message;
            setAuthError(message);
        },
    });

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        register(form);
    };

    return (
        <form className="space-y-6" onSubmit={handleInputChange}>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                    />
                </div>
            </div>
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
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                </label>
                <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="tel"
                        className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        required
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
                        placeholder="Create a password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        required
                    />
                </div>
            </div>
            <p className="text-red-500 text-sm justify-center text-center ">
                {isError && `${authError}`}
            </p>
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2D7A46] hover:dark:bg-[#1B4332] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
                {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
        </form>
    );
};

export default SignUpForm;

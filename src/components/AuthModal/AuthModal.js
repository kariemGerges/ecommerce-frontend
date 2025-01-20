// export default AuthModal;
import React, { useState } from 'react';
import {
    X,
    ShoppingCart,
    Tag,
    Gift,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

import SignUpForm from '../AuthForm/SignUpForm';
import SignInForm from '../AuthForm/SignInForm';


const AuthModal = () => {
    const { isAuthModalOpen, setIsAuthModalOpen } = useAuth();
    const [isSignIn, setIsSignIn] = useState(true);

    if (!isAuthModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl relative overflow-hidden">
                
                {/* Close Button */}
                <button
                    onClick={() => setIsAuthModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="flex h-[600px] relative">
                    {/* Authentication Form */}
                    <div
                        className={`w-1/2 p-8 bg-white absolute transition-all duration-500 ease-in-out ${
                            isSignIn ? 'left-0' : 'left-1/2'
                        }`}
                    >
                        <div className="flex flex-col h-full">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-green-700 mb-2">
                                    {isSignIn
                                        ? 'Welcome Back!'
                                        : 'Create Account'}
                                </h2>
                                <p className="text-gray-600">
                                    {isSignIn
                                        ? 'Sign in to your account'
                                        : 'Join us today'}
                                </p>
                            </div>
                            
                            {/* Render either SignIn or SignUp form based on state */}
                            {isSignIn ? <SignInForm setIsAuthModalOpen={setIsAuthModalOpen} /> : <SignUpForm setIsAuthModalOpen={setIsAuthModalOpen} />}

                            <p className="mt-4 text-center text-gray-600">
                                {isSignIn
                                    ? "Don't have an account? "
                                    : 'Already have an account? '}
                                <button
                                    onClick={() => setIsSignIn(!isSignIn)}
                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    {isSignIn ? 'Create Account' : 'Sign In'}
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Animated Section */}
                    <div
                        className={`w-1/2 bg-green-50 p-8 flex items-center justify-center relative overflow-hidden absolute transition-all duration-500 ease-in-out ${
                            isSignIn ? 'left-1/2' : 'left-0'
                        }`}
                    >
                        <div className="text-center z-10">
                            <h3 className="text-xl font-bold text-[#B06D6D] mb-4">
                                {isSignIn
                                    ? 'Welcome to FreshMart!'
                                    : 'Join Our Community'}
                            </h3>
                            <p className="text-[#B06D6D] mb-8">
                                {isSignIn
                                    ? 'Access your rewards and savings'
                                    : 'Start earning rewards on every purchase'}
                            </p>
                        </div>

                        {/* Background Pattern */}
                        <div className="absolute inset-0">
                            <div className="pattern-grid" />
                        </div>

                        {/* Floating Icons */}
                        <div className="absolute inset-0">
                            <div className="floating-icon top-24 right-24">
                                <ShoppingCart className="h-8 w-8 text-[#B06D6D] opacity-50" />
                            </div>
                            <div className="floating-icon bottom-32 left-24">
                                <Tag className="h-8 w-8 text-[#B06D6D] opacity-50" />
                            </div>
                            <div className="floating-icon top-48 left-32">
                                <Gift className="h-8 w-8 text-[#B06D6D] opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .floating-icon {
                    position: absolute;
                    animation: float 4s ease-in-out infinite;
                }

                .floating-icon:nth-child(1) {
                    animation-delay: 0s;
                }
                .floating-icon:nth-child(2) {
                    animation-delay: 1s;
                }
                .floating-icon:nth-child(3) {
                    animation-delay: 2s;
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(10deg);
                    }
                }

                .pattern-grid {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(
                        circle at 1px 1px,
                        green 2px,
                        transparent 0
                    );
                    background-size: 30px 30px;
                    opacity: 0.1;
                    animation: fadeInOut 8s ease-in-out infinite;
                }

                @keyframes fadeInOut {
                    0%,
                    100% {
                        opacity: 0.1;
                    }
                    50% {
                        opacity: 0.2;
                    }
                }
            `}</style>
        </div>
    );
};

export default AuthModal;
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function PickupGroThankYouLanding() {
    const { theme } = useTheme();
    return (
        <div className="w-full h-screen flex items-center justify-center p-4">
            <motion.div
                className="max-w-md w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className={`shadow-xl rounded-2xl ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
                    <div className="p-6 flex flex-col items-center">
                        <motion.div
                            className="text-green-500 mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <CheckCircle size={60} />
                        </motion.div>
                        <h1 className="text-2xl font-bold text-center mb-2">
                            Thank You for Your Purchase!
                        </h1>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center mb-6`}>
                            We appreciate your business. Your order will be
                            ready for pickup soon!
                        </p>

                        <div className="flex flex-col space-y-2 w-full">
                            <Link to="/profile">
                                <button className="w-full bg-slate-600 text-white font-semibold py-3 rounded-lg">My Order</button>
                            </Link>
                            <Link to="/products">
                            <button className="w-full bg-slate-100 text-slate-600 font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                                <ShoppingCart size={16} /> Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

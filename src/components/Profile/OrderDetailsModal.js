import React, { useEffect } from 'react';
import { X, Package, Calendar, Clock } from 'lucide-react';
import { convertMilitaryToNormalTime } from '../../utils/convertMilitaryToNormalTime';

const OrderDetailsModal = ({ theme ,order, isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };


    if (!isOpen || !order) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* Modal */}
            <div
                className={`relative ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto`}
            >
                {/* Header */}
                <div className={`sticky top-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}  border-b p-4`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Package className="w-5 h-5" />
                            <h2 className="text-lg font-semibold">
                                Order Details
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-6">
                    {/* Order Header */}
                    <div className="border-b pb-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Order ID
                                </p>
                                <p className="font-medium">{order._id}</p>
                            </div>
                            <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                    order.status === 'Completed'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-blue-100 text-blue-800'
                                }`}
                            >
                                {order.pickupStatus}
                            </span>
                        </div>
                    </div>

                    {/* Pickup Details */}
                    <div className="space-y-3">
                        <h3 className="font-medium">Pickup Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Pickup Date
                                    </p>
                                    <p className="font-medium">
                                        {formatDate(order.pickupDate)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Pickup Time
                                    </p>
                                    <p className="font-medium">
                                        {convertMilitaryToNormalTime(
                                            order.pickupTime
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-3">
                        <h3 className="font-medium">Order Items</h3>
                        <div className="space-y-2">
                            {order.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center py-2 border-b last:border-0"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium">
                                            {item.productId.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            ${item.price.toFixed(2)} x{' '}
                                            {item.quantity}
                                        </p>
                                    </div>
                                    <p className="font-medium">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                            <p className="font-medium">Total Amount</p>
                            <p className="text-lg font-bold">
                                ${order.totalPrice.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;

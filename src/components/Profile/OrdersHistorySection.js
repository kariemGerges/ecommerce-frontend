import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Cards';
import { useFetchAUserOrders } from '../../hooks/orders/UseFetchAUserOrders';
import { useTheme } from '../../context/ThemeContext';
import { convertMilitaryToNormalTime } from '../../utils/convertMilitaryToNormalTime';
import Loading from '../ui/Loading';
import OrderDetailsModal from './OrderDetailsModal';

const OrdersHistorySection = ({ user }) => {
    const { data: orders, isLoading } = useFetchAUserOrders(user._id);
    const { theme } = useTheme();
    const [selectedOrder, setSelectedOrder] = useState(null);

    if (isLoading) {
        return <Loading />;
    }

    const formatISODate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toDateString('en-US');
    };

    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Pickup Order History
                    </CardTitle>
                    <CardTitle
                        className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        {orders && orders.length} orders
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {orders &&
                            orders.map((order) => (
                                <div
                                    key={order.id}
                                    className={`border rounded-lg p-4 ${
                                        theme === 'dark'
                                            ? 'bg-zinc-900 hover:bg-zinc-800'
                                            : 'bg-white hover:bg-gray-200'
                                    } transition-all duration-300 hover:scale-102 cursor-pointer`}
                                    onClick={() => setSelectedOrder(order)}
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 space-y-2 sm:space-y-0">
                                        <div className='pb-4'>
                                            <h3 className="font-medium">
                                                Order: {order._id}
                                            </h3>
                                            <p
                                                className={`text-sm ${
                                                    theme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-600'
                                                }`}
                                            >
                                                Created at:{' '}
                                                {formatISODate(order.createdAt)}
                                            </p>
                                            <p className="text-sm semi-bold">
                                                Pickup Date:{' '}
                                                {formatISODate(
                                                    order.pickupDate
                                                )}
                                                ,{' '}
                                                {convertMilitaryToNormalTime(
                                                    order?.pickupTime
                                                )}
                                            </p>
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
                            
                                    <div className="mt-2 font-medium">
                                        Total: ${order.totalPrice.toFixed(2)}
                                    </div>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>

            <OrderDetailsModal
                theme={theme}
                order={selectedOrder}
                isOpen={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
            />
        </>
    );
};

export default OrdersHistorySection;
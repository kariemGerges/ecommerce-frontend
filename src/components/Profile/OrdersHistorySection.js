import { Package } from 'lucide-react';
// import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Cards';
import { useFetchAUserOrders } from '../../hooks/orders/UseFetchAUserOrders';

const OrdersHistorySection = ({ user }) => {
    const { data: orders, isLoading, error } = useFetchAUserOrders(user._id);

    console.log('orders:', orders);
    console.log('isLoading:', isLoading);
    console.log('error:', error);

    const formatISODate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            // second: 'numeric',
            // timeZoneName: 'short',
        };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Pickup Order History
                </CardTitle>
                <CardTitle className="text-sm text-gray-600">
                    {orders && orders.length} orders
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {orders &&
                        orders.map((order) => (
                            <div
                                key={order.id}
                                className="border rounded-lg p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-102"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 space-y-2 sm:space-y-0">
                                    <div>
                                        <h3 className="font-medium">
                                            Order: {order._id}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {formatISODate(order.createdAt)}
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
                                <div className="text-sm text-gray-600">
                                    {order.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between"
                                        >
                                            <p>{item.productId.name}</p>
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-2 font-medium">
                                    Total: ${order.totalPrice.toFixed(2)}
                                </div>
                            </div>
                        ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default OrdersHistorySection;

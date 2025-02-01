// import React, { useState } from 'react';
// import { Package, ShoppingBag, Users } from 'lucide-react';

// // Sample data - in a real app, this would come from an API or database
// const initialOrders = [
//     {
//         id: 1,
//         customerName: 'John Doe',
//         phoneNumber: '555-0123',
//         items: [
//             { id: 1, name: 'T-Shirt', quantity: 2, price: 25.99 },
//             { id: 2, name: 'Jeans', quantity: 1, price: 59.99 },
//         ],
//         total: 111.97,
//         address: '123 Main St',
//         email: 'john@example.com',
//     },
//     {
//         id: 2,
//         customerName: 'Jane Smith',
//         phoneNumber: '555-0124',
//         items: [
//             { id: 3, name: 'Dress', quantity: 1, price: 89.99 },
//             { id: 4, name: 'Shoes', quantity: 1, price: 79.99 },
//         ],
//         total: 169.98,
//         address: '456 Oak Ave',
//         email: 'jane@example.com',
//     },
// ];

// const PickupDashboard = () => {
//     const [orders] = useState(initialOrders);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     // Calculate total items across all orders
//     const totalItems = orders.reduce(
//         (sum, order) =>
//             sum +
//             order.items.reduce((itemSum, item) => itemSum + item.quantity, 0),
//         0
//     );

//     return (
//         <div className="p-4 max-w-6xl mx-auto">
//             {/* Stats Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <div className="flex items-center justify-between mb-2">
//                         <h3 className="text-sm font-medium text-gray-600">
//                             Total Orders
//                         </h3>
//                         <Package className="h-4 w-4 text-gray-500" />
//                     </div>
//                     <p className="text-2xl font-bold">{orders.length}</p>
//                 </div>

//                 <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <div className="flex items-center justify-between mb-2">
//                         <h3 className="text-sm font-medium text-gray-600">
//                             Total Items
//                         </h3>
//                         <ShoppingBag className="h-4 w-4 text-gray-500" />
//                     </div>
//                     <p className="text-2xl font-bold">{totalItems}</p>
//                 </div>

//                 <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <div className="flex items-center justify-between mb-2">
//                         <h3 className="text-sm font-medium text-gray-600">
//                             Active Customers
//                         </h3>
//                         <Users className="h-4 w-4 text-gray-500" />
//                     </div>
//                     <p className="text-2xl font-bold">{orders.length}</p>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Orders List */}
//                 <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <h2 className="text-lg font-semibold mb-4">
//                         Pickup Orders
//                     </h2>
//                     <div className="space-y-2">
//                         {orders.map((order) => (
//                             <div
//                                 key={order.id}
//                                 onClick={() => setSelectedOrder(order)}
//                                 className={`p-4 rounded-lg cursor-pointer border transition-colors ${
//                                     selectedOrder?.id === order.id
//                                         ? 'bg-blue-50 border-blue-200'
//                                         : 'hover:bg-gray-50 border-gray-200'
//                                 }`}
//                             >
//                                 <div className="flex justify-between items-center">
//                                     <div>
//                                         <p className="font-medium">
//                                             {order.customerName}
//                                         </p>
//                                         <p className="text-sm text-gray-500">
//                                             {order.phoneNumber}
//                                         </p>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="font-medium">
//                                             ${order.total.toFixed(2)}
//                                         </p>
//                                         <p className="text-sm text-gray-500">
//                                             {order.items.reduce(
//                                                 (sum, item) =>
//                                                     sum + item.quantity,
//                                                 0
//                                             )}{' '}
//                                             items
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Order Details */}
//                 <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <h2 className="text-lg font-semibold mb-4">
//                         Order Details
//                     </h2>
//                     {selectedOrder ? (
//                         <div className="space-y-6">
//                             <div>
//                                 <h3 className="text-sm font-medium text-gray-600 mb-3">
//                                     Customer Information
//                                 </h3>
//                                 <div className="grid grid-cols-2 gap-3 text-sm">
//                                     <div>
//                                         <p className="text-gray-500">Name</p>
//                                         <p className="font-medium">
//                                             {selectedOrder.customerName}
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-gray-500">Phone</p>
//                                         <p className="font-medium">
//                                             {selectedOrder.phoneNumber}
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-gray-500">Email</p>
//                                         <p className="font-medium">
//                                             {selectedOrder.email}
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-gray-500">Address</p>
//                                         <p className="font-medium">
//                                             {selectedOrder.address}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <h3 className="text-sm font-medium text-gray-600 mb-3">
//                                     Order Items
//                                 </h3>
//                                 <div className="space-y-3">
//                                     {selectedOrder.items.map((item) => (
//                                         <div
//                                             key={item.id}
//                                             className="flex justify-between items-center border-b pb-3"
//                                         >
//                                             <div>
//                                                 <p className="font-medium">
//                                                     {item.name}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500">
//                                                     Quantity: {item.quantity}
//                                                 </p>
//                                             </div>
//                                             <p className="font-medium">
//                                                 ${item.price.toFixed(2)}
//                                             </p>
//                                         </div>
//                                     ))}
//                                     <div className="flex justify-between items-center pt-2">
//                                         <p className="font-medium">Total</p>
//                                         <p className="font-medium">
//                                             ${selectedOrder.total.toFixed(2)}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="text-center text-gray-500 py-8">
//                             Select an order to view details
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PickupDashboard;

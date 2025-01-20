import React, { useState } from 'react';
import { User, Package, Edit2, Save, X } from 'lucide-react';
import LogoutButton from '../../components/LogoutBtn/LogoutBtn';
import { useLoginAuth } from '../../context/AuthLoginContext';

// Custom Card Components
const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = '' }) => (
    <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

const ProfilePage = () => {
    const { user } = useLoginAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: user && user.name,
        email: user && user.email,
        phone: user && user.phone,
        preferences: 'Organic produce, Dairy-free',
    });

    const [orders] = useState([
        {
            id: 'ORD-001',
            date: '2025-01-15',
            total: 86.45,
            items: [
                'Organic Produce Bundle',
                'Whole Grain Bread',
                'Almond Milk',
            ],
            status: 'Completed',
        },
        {
            id: 'ORD-002',
            date: '2025-01-12',
            total: 124.9,
            items: ['Weekly Essentials Box', 'Fresh Fish', 'Local Honey'],
            status: 'Completed',
        },
        {
            id: 'ORD-003',
            date: '2025-01-18',
            total: 45.3,
            items: ['Fresh Vegetables', 'Snack Pack', 'Juice Bundle'],
            status: 'Scheduled',
        },
    ]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically make an API call to update the user info
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset any changes made
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4 pt-20 space-y-6">
            {/* Profile Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Welcome back! {user && user.name}</h1>
                {!isEditing ? (
                    <>
                    <button
                        onClick={handleEdit}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                    >
                        <Edit2 className="w-4 h-4" />
                        Edit Profile
                    </button>
                    
                    </>
                ) : (
                    <div className="flex gap-2">
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
                        >
                            <Save className="w-4 h-4" />
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </button>
                    </div>
                )}
            </div>

            {/* User Information Card */}
            <Card
                className={`transform transition-all duration-500 ${
                    isEditing ? 'scale-102 shadow-lg rotate-1' : ''
                }`}
            >
                <CardHeader
                    className={`transition-colors duration-300 ${
                        isEditing ? 'bg-blue-50' : ''
                    }`}
                >
                    <CardTitle className="flex items-center gap-2">
                        <User
                            className={`w-5 h-5 transition-transform duration-500 ${
                                isEditing ? 'rotate-180' : ''
                            }`}
                        />
                        Personal Information
                    </CardTitle>
                </CardHeader>
                <CardContent
                    className={`transition-all duration-500 ${
                        isEditing ? 'bg-blue-50/50' : ''
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(userInfo).map(([key, value], index) => (
                            <div
                                key={key}
                                className={`space-y-2 transition-all duration-300 ${
                                    key === 'preferences' ? 'md:col-span-2' : ''
                                } ${
                                    isEditing ? 'transform translate-y-1' : ''
                                }`}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                }}
                            >
                                <label className="block text-sm font-medium text-gray-700 capitalize">
                                    {key.replace('_', ' ')}
                                </label>
                                {isEditing ? (
                                    key === 'preferences' ? (
                                        <textarea
                                            name={key}
                                            value={value}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            rows={2}
                                        />
                                    ) : (
                                        <input
                                            type={
                                                key === 'email'
                                                    ? 'email'
                                                    : 'text'
                                            }
                                            name={key}
                                            value={value}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    )
                                ) : (
                                    <p className="p-2">{value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Order History Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Pickup Order History
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="border rounded-lg p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-102"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-medium">
                                            Order {order.id}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {order.date}
                                        </p>
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${
                                            order.status === 'Completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    {order.items.join(', ')}
                                </div>
                                <div className="mt-2 font-medium">
                                    Total: ${order.total.toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Logout Button */}
            <section className="justify-center text-start" ><LogoutButton /></section>
            
        </div>
    );
};

export default ProfilePage;

import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import itemImage from '../../assets/item.jpg';
import { useTheme } from '../../context/ThemeContext';

const CartDrawer = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
    } = useCart();
    const location = useLocation();

    const { theme } = useTheme();

    // Close cart when route changes
    useEffect(() => {
        setIsCartOpen(false);
    }, [location.pathname, setIsCartOpen]);

    // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
                    onClick={() => setIsCartOpen(false)}
                />
            )}

            {/* Cart Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-80 
                    ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg transform 
                    ${
                        isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 rounded-lg`}
            >
                {/* Header */}
                <div
                    className={`p-4 border-b flex justify-between items-center rounded-xl
                    ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}
                >
                    <h2 className="text-xl font-semibold">
                        Your Cart ({cartItems.length} items)
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-200px)]">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                            Your cart is empty
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center space-x-4 ${
                                    theme === 'dark'
                                        ? 'border-gray-700'
                                        : 'border-gray-200'
                                } p-3 rounded-lg border transform transition-all duration-200 hover:shadow-md`}
                            >
                                {item.image && (
                                    <img
                                        // src={item.image}
                                        src={itemImage}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                )}
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-gray-600">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button
                                            onClick={() =>
                                                decrementQuantity(item._id)
                                            }
                                            className={`p-1 ${
                                                theme === 'dark'
                                                    ? 'hover:bg-gray-100 text-gray-400'
                                                    : 'hover:bg-gray-200 text-gray-600'
                                            }  rounded transition-colors duration-200`}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="w-8 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                incrementQuantity(item._id)
                                            }
                                            className={`p-1 ${
                                                theme === 'dark'
                                                    ? 'hover:bg-gray-100 text-gray-400'
                                                    : 'hover:bg-gray-200 text-gray-600'
                                            }  rounded transition-colors duration-200`}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() =>
                                                removeFromCart(item._id)
                                            }
                                            className="p-1 hover:bg-red-100 text-red-600 rounded ml-2 transition-colors duration-200"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div
                    className={`border-t p-4 ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}
                >
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="font-semibold">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <Link to="/cart">
                        <button
                            className={`w-full py-2 px-4 rounded-lg transition-all duration-200 
                                ${
                                    cartItems.length > 0
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-gray-300 cursor-not-allowed text-gray-500'
                                }`}
                            disabled={cartItems.length === 0}
                        >
                            View Full Cart
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;

// import React from 'react';
// import { useCart } from '../../context/CartContext';

// const CartPage = () => {
//     const { cartItems } = useCart();

//     return (
//         <div className="max-w-4xl mx-auto p-4">
//             <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

//             {cartItems.length > 0 ? (
//                 <ul>
//                     {cartItems.map((item, index) => (
//                         <li key={index} className="flex justify-between items-center mb-4">
//                             <span>{item.name}</span>
//                             <span>${item.price.toFixed(2)}</span>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Your cart is empty.</p>
//             )}
//         </div>
//     );
// };

// export default CartPage;

import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const ShoppingCart = () => {
    return (
        <div className="max-w-6xl mx-auto pt-16  flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="flex-1 pt-16 px-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <button className="text-red-500 hover:underline">
                        Empty Cart
                    </button>
                </div>

                <div className="mb-4">
                    <span className="font-medium">1 Item</span>
                </div>

                {/* Cart Item */}
                <div className="border-t border-b py-4">
                    <div className="flex gap-4">
                        <img
                            src="/api/placeholder/120/120"
                            alt="Lucky Charms"
                            className="w-24 h-24 object-contain"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-medium mb-1">
                                        Lucky Charms Gluten Free Breakfast
                                        Cereal, 10.5 oz Box
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        1 at $3.69 each
                                    </p>
                                    <p className="font-medium mt-2">$3.69</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="border rounded-full w-10 h-10 flex items-center justify-center">
                                        <input
                                            type="number"
                                            value="1"
                                            className="w-8 text-center focus:outline-none"
                                            min="1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button className="text-blue-600 hover:underline text-sm">
                                    Remove
                                </button>
                                <button className="text-blue-600 hover:underline text-sm">
                                    Add Note
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:w-96">
                <div className="bg-gray-50 p-6 rounded-lg">
                    {/* mPerks Sign In Banner */}
                    <div className="flex gap-4 mb-6 p-4 bg-white rounded-lg">
                        <CircleDollarSign
                            className="text-green-600"
                            size={40}
                        />
                        <div>
                            <h3 className="font-bold">Free Pickup</h3>
                            <p className="text-sm text-gray-600">
                                Enjoy free pickup on your order of $20 or more
                            </p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                    {/* Price Breakdown */}
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                            <span>Item Total</span>
                            <span>$3.69</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Pickup Fee</span>
                            <span>$4.95</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Deposit</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Taxes</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Subtotal</span>
                            <span>$8.64</span>
                        </div>

                        {/* Savings Section */}
                        <div className="pt-2 border-t">
                            <div className="flex justify-between text-gray-600">
                                <span>Sales and Specials</span>
                                <span>($0.00)</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>Total Savings</span>
                                <span>-$0.00</span>
                            </div>
                        </div>

                        {/* Estimated Total */}
                        <div className="flex justify-between font-bold pt-2 border-t">
                            <span>Estimated Total</span>
                            <span>$8.64</span>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mb-6 text-sm text-gray-600">
                        <p>
                            We'll determine the final price, including discounts
                            and taxes, when we complete your order. We can't
                            accept cash or paper coupons for online orders.
                        </p>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                        Begin Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;


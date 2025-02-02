import React from 'react';
import { CircleDollarSign, Plus, Minus, Trash2 } from 'lucide-react';
// import context
import { useCart } from '../../context/CartContext';
import { useLoginAuth } from '../../context/AuthLoginContext';
// import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import itemImg from '../../assets/item.jpg';

const ShoppingCart = () => {
    const {
        cartItems,
        removeFromCart,
        emptyCart,
        incrementQuantity,
        decrementQuantity,
        getTotalPrice,
        pickupFee,
        tax,
        getTotalPriceWithPickupFeeAndTax,
    } = useCart();

    // const { setIsAuthModalOpen } = useAuth();
    const { user } = useLoginAuth();

    console.log('user from cart to fix checkout', user);

    // const discounts = 80;

    return (
        <div className="pt-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="flex-1 pt-16 px-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <button
                        onClick={emptyCart}
                        className="text-red-500 hover:underline"
                    >
                        Empty Cart
                    </button>
                </div>

                <div className="mb-4">
                    <span className="font-medium">{cartItems.length} Item</span>
                </div>

                {/* Cart Item */}
                {cartItems.length > 0 ? (
                    <div className="border-t border-b py-4">
                        {cartItems.map((item, index) => (
                            <div className="flex gap-4">
                                <img
                                    src={itemImg}
                                    alt={item.name}
                                    className="w-24 h-24 object-contain rounded-3xl"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-medium mb-1">
                                                {item.name}
                                            </h3>

                                            <p className="text-gray-600 text-sm">
                                                1 at ${item.price} each
                                            </p>
                                            <p className="font-medium mt-2">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="border rounded-full w-10 h-10 flex items-center justify-center">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    className="w-8 text-center focus:outline-none"
                                                    min="1"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2 mt-2">
                                        <button
                                            onClick={() =>
                                                decrementQuantity(item._id)
                                            }
                                            className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
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
                                            className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
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
                                    <hr className="my-4 bg-green" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">Your cart is empty.</p>
                )}
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
                            <span>{getTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Pickup Fee</span>
                            <span>${pickupFee}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Taxes</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Subtotal</span>
                            <span>
                                ${getTotalPriceWithPickupFeeAndTax.toFixed(2)}
                            </span>
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
                            <span>
                                $
                                {getTotalPrice() === 0
                                    ? 0
                                    : getTotalPriceWithPickupFeeAndTax.toFixed(2)}
                            </span>
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
                    <Link
                        to="/checkout"
                        className="w-full bg-blue-600 text-white py-3 px-24 text-center
                        block rounded-lg hover:bg-blue-700 font-medium"
                    >
                        Begin Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;

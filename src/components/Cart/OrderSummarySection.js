import { CircleDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const OrderSummarySection = ({
    theme,
    pickupFee,
    tax,
    getTotalPrice,
    getTotalPriceWithPickupFeeAndTax,
}) => {
    const { cartItems } = useCart();

    return (
        <div className="lg:w-96">
            <div
                className={`p-4 bg-gray-100 ${
                    theme === 'dark' ? 'bg-gray-800' : ''
                } p-6 rounded-lg`}
            >
                {/* mPerks Sign In Banner */}
                <div
                    className={`flex gap-4 mb-6 p-4 
                    ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} 
                    rounded-lg`}
                >
                    <CircleDollarSign className="text-green-600" size={40} />
                    <div>
                        <h3 className="font-bold">Free Pickup</h3>
                        <p className="text-sm">
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
                            ${getTotalPriceWithPickupFeeAndTax().toFixed(2)}
                        </span>
                    </div>

                    {/* Savings Section */}
                    <div className="pt-2 border-t">
                        <div className="flex justify-between text-gray-500">
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
                                : getTotalPriceWithPickupFeeAndTax().toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mb-6 text-sm text-gray-600">
                    <p>
                        We'll determine the final price, including discounts and
                        taxes, when we complete your order. We can't accept cash
                        or paper coupons for online orders.
                    </p>
                </div>

                {/* Checkout Button */}
                <Link
                    to={cartItems.length === 0 ? '#' : '/checkout'} // Prevent navigation if cart is empty
                    className={`w-full py-3 px-24 text-center block rounded-lg font-medium ${
                        cartItems.length === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    onClick={(e) => {
                        if (cartItems.length === 0) e.preventDefault(); // Prevent navigation when cart is empty
                    }}
                >
                    Begin Checkout
                </Link>
            </div>
        </div>
    );
};

export default OrderSummarySection;

import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { convertMilitaryToNormalTime } from '../../utils/convertMilitaryToNormalTime';


const ReviewOrderSection = ({
    pickupDetails,
    containerVariants,
    theme,
}) => {

    // get cart
    const {
        cartItems,
        getTotalPrice,
        pickupFee,
        tax,
        getTotalPriceWithPickupFeeAndTax,
    } = useCart();

    return (
        <motion.div
            key="reviewOrder"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`p-4 rounded-2xl shadow ${
                theme === 'dark' ? 'border border-gray-500' : ''
            } `}
        >
            <h2 className="text-xl font-semibold mb-4">
                Review Your Pickup Order
            </h2>
            {/* Pickup Summary */}
            <div className="mb-4">
                <h3 className="font-semibold text-lg">Pickup Details</h3>
                <ul className="text-sm mt-2 space-y-1">
                    <li>Location: {pickupDetails.storeLocation}</li>
                    <li>Date: {pickupDetails.pickupDate || 'N/A'}</li>
                    <li>Time: {convertMilitaryToNormalTime(pickupDetails.pickupTime) || 'N/A'}</li>
                    {pickupDetails.instructions && (
                        <li>Instructions: {pickupDetails.instructions}</li>
                    )}
                </ul>
            </div>

            {/* Items */}
            <div className={`mb-4 ${theme === 'dark' ? '' : ''}`}>
                <h3 className="font-semibold text-lg">Items</h3>
                <ul className="divide-y divide-gray-200 mt-2">
                    {cartItems.map((item) => (
                        <li
                            key={item.id}
                            className="py-2 flex justify-between text-sm"
                        >
                            <span>
                                {item.name} x {item.quantity}
                            </span>
                            <span>
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Totals */}
            <div className="text-sm flex justify-between mb-1">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="text-sm flex justify-between mb-1">
                <span>Pick Fee</span>
                <span>${pickupFee}</span>
            </div>
            <div className="text-sm flex justify-between mb-1">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>${getTotalPriceWithPickupFeeAndTax().toFixed(2)}</span>
            </div>

            <p className="text-sm mt-2">
                Payment will be collected upon pickup.
            </p>
        </motion.div>
    );
};

export default ReviewOrderSection;

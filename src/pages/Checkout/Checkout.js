import { useState, useEffect } from 'react';
// import context
import { useLoginAuth } from '../../context/AuthLoginContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

// import framer motion
import { motion, AnimatePresence } from 'framer-motion';

// import components
import CheckoutBtnSection from '../../components/Checkout/CheckoutBtnSection';
import PickupDetailsSection from '../../components/Checkout/PickupDetailsSection';
import ReviewOrderSection from '../../components/Checkout/ReviewOrderSection';

const Checkout = () => {
    // get user
    const { user } = useLoginAuth();
    // get sign in modal
    const { setIsAuthModalOpen } = useAuth();
    // get theme
    const { theme } = useTheme();
    // get cart
    const { cartItems, emptyCart, getTotalPriceWithPickupFeeAndTax } =
        useCart();

    // navigate
    const Navigate = useNavigate();

    // must be uncommented to work, for testing comment out
    const handleAuthClick = () => {
        setIsAuthModalOpen(true);
        if (user) Navigate('/checkout');
    };

    if (!user) handleAuthClick();

    // checkout steps
    const steps = ['Pickup Details', 'Review Order'];
    const [currentStep, setCurrentStep] = useState(0);



    // pickup details
    const [pickupDetails, setPickupDetails] = useState({
        user,
        storeLocation: 'Main Branch',
        pickupDate: new Date().toLocaleDateString(),
        pickupTime: '',
        customerComments: '',
        createdAt: new Date().toLocaleDateString(),
        paymentStatus: 'Pending',
        pickupStatus: 'Pending',
        items: cartItems.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
            price: item.price,
        })),
        totalPrice: getTotalPriceWithPickupFeeAndTax(),
        userInfo: {},
    });

useEffect(() => {
    const calculatedTotal = getTotalPriceWithPickupFeeAndTax();
    setPickupDetails((prev) => ({
        ...prev,
        totalPrice: calculatedTotal,
        items: cartItems.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
            price: item.price,
        })),
    }));
}, [cartItems, getTotalPriceWithPickupFeeAndTax]);



    // progress bar width
    const progressBarWidth = ((currentStep + 1) / steps.length) * 100;

    // step transitions
    const containerVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    // render content for each step
    const renderStep = () => {
        switch (currentStep) {
            case 0: // Pickup Details
                return (
                    <PickupDetailsSection
                        pickupDetails={pickupDetails}
                        setPickupDetails={setPickupDetails}
                        theme={theme}
                        containerVariants={containerVariants}
                    />
                );

            case 1: // Review Order
                return (
                    <ReviewOrderSection
                        pickupDetails={pickupDetails}
                        containerVariants={containerVariants}
                        theme={theme}
                    />
                );
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-24">
            {/* Progress bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 text-center">
                            <div
                                className={
                                    index <= currentStep
                                        ? 'text-sm font-medium text-green-600'
                                        : 'text-sm font-medium text-gray-400'
                                }
                            >
                                {step}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressBarWidth}%` }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
            </div>
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            {/* Navigation buttons */}
            <CheckoutBtnSection
                steps={steps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                pickupDetails={pickupDetails}
                emptyCart={emptyCart}
            />
        </div>
    );
};

export default Checkout;

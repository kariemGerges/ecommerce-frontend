import { motion } from 'framer-motion';
import { useCreateOrder } from '../../hooks/orders/useCreateOrder';
import { useNavigate } from 'react-router-dom';

const CheckoutBtnSection = ({ steps, currentStep, setCurrentStep, pickupDetails }) => {

    // console.log('pickupDetails in checkout btn section', pickupDetails);
    const navigate = useNavigate();

    const {
        mutate: createOrder
    } = useCreateOrder({
        onSuccess: (data) => {
            
            console.log('Order created successfully:', data);
        },
        onError: (error) => {
            console.error('Error creating order:', error);
        },
    });
    //  Step navigation
    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };
    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    // Final action
    const handlePlaceOrder = () => {
        // handle checkout logic 👍
        // update order status
        // update payment status
        // send email
        // send sms?
        // redirect to thank you page👍
        createOrder(pickupDetails);
        navigate('/thankyou');
    };

    return (
        <div className="mt-6 p-3 flex justify-between">
            {currentStep > 0 ? (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePrevStep}
                    className="px-4 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors"
                >
                    Back
                </motion.button>
            ) : (
                <div />
            )}
            {currentStep < steps.length - 1 ? (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNextStep}
                    className="px-4 py-2 rounded-full bg-green-500  hover:bg-green-600 transition-colors"
                >
                    Next
                </motion.button>
            ) : (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePlaceOrder}
                    className="px-4 py-2 rounded-full bg-green-600  hover:bg-green-700 transition-colors"
                >
                    Place Order
                </motion.button>
            )}
        </div>
    );
};

export default CheckoutBtnSection;
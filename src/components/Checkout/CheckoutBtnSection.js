import { motion } from 'framer-motion';
import { useCreateOrder } from '../../hooks/orders/useCreateOrder';
import { useNavigate } from 'react-router-dom';

const CheckoutBtnSection = ({
    steps,
    currentStep,
    setCurrentStep,
    pickupDetails,
    emptyCart,
}) => {
    const navigate = useNavigate();

    // create order
    const { mutate: createOrder } = useCreateOrder({
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

    // handle pickup date and time
    const isPickupDateSelected =
        pickupDetails.pickupDate && pickupDetails.pickupTime;

    // Final action
    const handlePlaceOrder = () => {
        //    handle checkout logic 👍
        //     update order status 👍
        //     empty cart 👍
        //     update payment status
        //     send email 👍 server side
        //     send sms?
        //     redirect to thank you page👍
        //     emptyCart();👍

        createOrder(pickupDetails);
        navigate('/thankyou');
        emptyCart();
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                {!isPickupDateSelected && (
                    <div class="top-0 left-0 w-full">
                        <p className="text-red-500 text-sm mt-3 p-3">
                            Please select a pickup date
                        </p>
                    </div>
                )}
            </div>
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
                        onClick={
                            isPickupDateSelected ? handleNextStep : () => {}
                        }
                        // disabled={!isPickupDateSelected}
                        className="px-4 py-2 rounded-full bg-green-500  hover:bg-green-600 transition-colors"
                    >
                        {isPickupDateSelected ? 'Next' : 'Select Pickup Date'}
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
        </div>
    );
};

export default CheckoutBtnSection;

import { motion } from 'framer-motion';

const PickupDetailsSection = ({ pickupDetails, setPickupDetails, theme, containerVariants }) => {
    


    return (
        <motion.div
            key="pickupDetails"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`p-4 rounded-2xl shadow ${
                theme === 'dark' ? 'border border-gray-500' : ''
            } `}
        >
            <h2 className="text-xl font-semibold mb-4">Pickup Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Store Location - example if multiple branches exist */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Store Location
                    </label>
                    <select
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500
                                    ${theme === 'dark' ? 'bg-gray-700' : ''}`}
                        value={pickupDetails.storeLocation}
                        onChange={(e) =>
                            setPickupDetails({
                                ...pickupDetails,
                                storeLocation: e.target.value,
                            })
                        }
                    >
                        <option value="Main Branch">Main Branch</option>
                        <option value="East Side">East Side</option>
                        <option value="Uptown">Uptown</option>
                    </select>
                </div>

                {/* Pickup Date */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Pickup Date
                    </label>
                    <input
                        type="date"
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500
                                    ${theme === 'dark' ? 'bg-gray-700' : ''}`}
                        value={pickupDetails.pickupDate}
                        onChange={(e) =>
                            setPickupDetails({
                                ...pickupDetails,
                                pickupDate: e.target.value,
                            })
                        }
                        required
                    />
                </div>
            </div>
            {/* Pickup Time */}
            <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                    Pickup Time
                </label>
                <input
                    type="time"
                    
                    className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500
                                    ${theme === 'dark' ? 'bg-gray-700' : ''}`}
                    value={pickupDetails.pickupTime}
                    onChange={(e) =>
                        setPickupDetails({
                            ...pickupDetails,
                            pickupTime:e.target.value,
                        })
                    }
                    required
                />
            </div>
            {/* Instructions */}
            <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                    Special Instructions
                </label>
                <textarea
                    rows={4}
                    className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500
                                    ${theme === 'dark' ? 'bg-gray-700' : ''}`}
                    placeholder="Any instructions or notes..."
                    value={pickupDetails.instructions}
                    onChange={(e) =>
                        setPickupDetails({
                            ...pickupDetails,
                            instructions: e.target.value,
                        })
                    }
                />
            </div>
        </motion.div>
    );
};

export default PickupDetailsSection;
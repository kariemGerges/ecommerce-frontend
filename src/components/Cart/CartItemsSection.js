import { Plus, Minus, Trash2 } from 'lucide-react';
import itemImgForNow from '../../assets/item.jpg';


const CartItemsSection = ({ cartItems, removeFromCart, emptyCart, incrementQuantity, decrementQuantity, theme}) => {
    return (
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
                                src={itemImgForNow}
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
                                        <div className="border rounded-full w-10 h-10 flex items-center justify-center ">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                className={`w-8 text-center focus:outline-none
                                                    
                                                    ${theme === 'dark' ? 'bg-gray-900' : ''}`}
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
                                        onClick={() => removeFromCart(item._id)}
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
    );
};

export default CartItemsSection;

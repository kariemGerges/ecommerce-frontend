import React from 'react';

// import context
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

// import components
import OrderSummarySection from '../../components/Cart/OrderSummarySection';

import CartItemsSection from '../../components/Cart/CartItemsSection';

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

    const { theme } = useTheme();

    return (
        <div className="pt-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <CartItemsSection
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                emptyCart={emptyCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                theme={theme}
            />
            {/* Order Summary Section */}
            <OrderSummarySection
                theme={theme}
                pickupFee={pickupFee}
                tax={tax}
                getTotalPrice={getTotalPrice}
                getTotalPriceWithPickupFeeAndTax={
                    getTotalPriceWithPickupFeeAndTax
                }
            />
        </div>
    );
};

export default ShoppingCart;

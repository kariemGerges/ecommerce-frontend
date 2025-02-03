import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
        // Initialize cart items from local storage if available
        const storedCartItems = localStorage.getItem('cartItems');
            return storedCartItems ? JSON.parse(storedCartItems) : [];
        } catch (error) {
            console.error('Error parsing cart items from local storage:', error);
            return [];
        }
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        // Persist cart items to local storage whenever they change
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existingItem = prev.find(
                (cartItem) => cartItem._id === item._id
            );
            if (existingItem) {
                // If item already exists, update its quantity
                return prev.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            // If item does not exist, add it to the cart
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    // remove single item from cart by id
    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item._id !== itemId));
    };

    // empty cart
    const emptyCart = () => {
        setCartItems([]);
    };

    // increment and decrement quantity of item in cart
    const incrementQuantity = (productId) => {
        setCartItems((prev) =>
            prev.map((cartItem) =>
                cartItem._id === productId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decrementQuantity = (productId) => {
        setCartItems((prev) =>
            prev.map((cartItem) =>
                cartItem._id === productId && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    // total price of items in cart
    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const pickupFee = getTotalPrice() > 20 ? 0 : 4.95;

    const tax = getTotalPrice() * 0.07;

    const getTotalPriceWithPickupFeeAndTax = getTotalPrice() + pickupFee + tax;

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                setIsCartOpen,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                emptyCart,
                getTotalPrice,
                tax,
                pickupFee,
                getTotalPriceWithPickupFeeAndTax,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

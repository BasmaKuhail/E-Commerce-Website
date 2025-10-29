import { createContext, useState, useContext } from 'react';

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext); 

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addItem = (product) => {
        if (product) {
            // Logic to check if item is already in cart and just increment quantity
            const existingItem = cartItems.find(item => item.id === product.id);
            if (existingItem) {
                setCartItems(
                    cartItems.map(item =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                );
            } else {
                // Add new item with quantity of 1
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
        }
    };
    
    // Calculate total from cartItems
    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const contextValue = {
        cartItems,
        addItem,
        cartTotal,
        // more removeItem, updateQuantity, etc.
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}
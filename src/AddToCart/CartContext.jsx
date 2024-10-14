import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        const updatedCart = [...state.cart, action.payload];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { ...state, cart: updatedCart };
    }
    if (action.type === 'REMOVE_FROM_CART') {
        const filteredCart = state.cart.filter((_, index) => index !== action.payload);
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        return { ...state, cart: filteredCart };
    }
    return state;
};

export const CartProvider = ({ children }) => {
    const initialState = { cart: JSON.parse(localStorage.getItem('cart')) || [] };
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

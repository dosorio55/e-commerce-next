import React, { createContext, useContext, useReducer, useState } from "react";
import { toast } from 'react-hot-toast';
import { cartReducer, initialState } from "./reducer";

const Context = createContext();

export const StateContext = ({ children }) => {
    
    const [showCart, setShowCart] = useState(false);
    const [imageHover, setImageHover] = useState(0);
    const [starsValue, setStarsValue] = useState(3);
    const [starsHover, setStarsHover] = useState(undefined);

    const [cartState, dispatchCartState] = useReducer(cartReducer, initialState);

    const { cartItems, totalQuantities } = cartState;

    let itemPrice;
    const quantityPlus = (productId, actionType) => {
        if (actionType === 'ITEM_CART') {
            const modifiedItems = cartItems.map((item) => {
                if (item._id === productId) {
                    itemPrice = item.price
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            dispatchCartState({
                type: actionType,
                payload: {
                    cartItems: modifiedItems, totalQuantities: totalQuantities + 1,
                    totalPrice: cartState.totalPrice + itemPrice
                }
            })
            return
        };
        dispatchCartState({ type: 'QUANTITY_PLUS' })
    }

    const quantityMinus = (productId, actionType) => {
        if (actionType === 'ITEM_CART') {
            const modifiedItems = cartItems.map((item) => {
                if (item._id === productId) {
                    itemPrice = item.price;
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            dispatchCartState({
                type: actionType,
                payload: {
                    cartItems: modifiedItems, totalQuantities: totalQuantities - 1,
                    totalPrice: cartState.totalPrice - itemPrice,
                }
            })
            return
        }
        dispatchCartState({ type: 'QUANTITY_MINUS' });
    }

    const deleteProduct = (productId) => {
        let quantityDeleted;
        const modifiedItems = cartItems.filter((item) => {
            if (item._id !== productId) {
                return item
            }
            quantityDeleted = item.quantity;
            itemPrice = item.price * quantityDeleted
        }
        );
        dispatchCartState({
            type: 'DELETE_ITEM',
            payload: {
                cartItems: modifiedItems,
                totalQuantities: totalQuantities - quantityDeleted,
                totalPrice: cartState.totalPrice - itemPrice
            }
        })
    }

    const addToCart = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        const totalPrice = cartState.totalPrice + product.price * quantity;
        const sumTotalQuantities = totalQuantities + quantity;
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map(cartProduct => {
                if (cartProduct._id === product._id)
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                return cartProduct
            })

            dispatchCartState({
                type: 'ADD_TO_CART', payload: { totalPrice: totalPrice, totalQuantities: sumTotalQuantities, cartItems: updatedCartItems }
            })
        } else {
            product.quantity = quantity;
            dispatchCartState({
                type: 'ADD_TO_CART', payload: { totalPrice: totalPrice, totalQuantities: sumTotalQuantities, cartItems: [...cartItems, { ...product }] }
            })
        }

        toast.success(`${quantity} ${product.name} added to the cart.`);
    }

    return (
        <Context.Provider value={{
            cartState,
            showCart,
            quantityPlus,
            quantityMinus,
            addToCart,
            setShowCart,
            imageHover,
            setImageHover,
            deleteProduct,
            starsValue,
            setStarsValue,
            starsHover,
            setStarsHover
        }}>
            {children}
        </Context.Provider>
    )
}

export const handleStateContext = () => useContext(Context);

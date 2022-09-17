export const initialState = {
    showCart: false,
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
    quantity: 1
};

export const cartReducer = (prevState, action) => {
    switch (action.type) {
        case 'QUANTITY_PLUS':
            return {
                ...prevState, quantity: prevState.quantity + 1
            };
        case 'QUANTITY_MINUS':
            return {
                ...prevState, quantity: prevState.quantity - 1
            };
        case 'ADD_TO_CART':
            const { totalPrice, totalQuantities, cartItems } = action.payload;
            return {
                ...prevState, cartItems: cartItems, totalPrice: totalPrice, totalQuantities: totalQuantities
            };
        case 'ITEM_CART':
            return {
                ...prevState, cartItems: action.payload.cartItems,
                totalQuantities: action.payload.totalQuantities,
                totalPrice: action.payload.totalPrice
            };
        case 'DELETE_ITEM':
            return {
                ...prevState,
                cartItems: action.payload.cartItems,
                totalQuantities: action.payload.totalQuantities,
                totalPrice: action.payload.totalPrice
            }
        default:
            break;
    }
}
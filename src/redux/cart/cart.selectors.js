import { createSelector } from 'reselect';

// Input selector receives entire state and outputs the section required.
const selectCart = state => state.cart;

// Output selector takes an even smaller memoized section of state
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
);
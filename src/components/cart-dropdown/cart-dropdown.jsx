import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.jsx';
import CartItem from '../cart-item/cart-item.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown" >
        <div className="cart-items" >
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem } />
                    ))
                ) : (
                    <span className="empty-message" >Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())     
            }}
        > 
            GO TO CHECKOUT 
        </CustomButton>
    </div>
);

// Memoized to avoid rerendering CartDropDown component every time reducer runs.
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.jsx';
import CartItem from '../cart-item/cart-item.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown" >
        <div className="cart-items" >
            {
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem } />
                ))
            }
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

// Memoized to avoid rerendering CartDropDown component every time reducer runs.
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
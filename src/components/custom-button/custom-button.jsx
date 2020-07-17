import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...extraProps }) => (
    <button 
        className={ `${ inverted ? 'inverted' : '' } ${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button` } 
        { ...extraProps } 
    >
        { children }
    </button>
)

export default CustomButton;
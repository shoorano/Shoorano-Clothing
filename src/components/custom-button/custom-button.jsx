import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...extraProps }) => (
    <button className={ `${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button` } { ...extraProps } >
        { children }
    </button>
)

export default CustomButton;
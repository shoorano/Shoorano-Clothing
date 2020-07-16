import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...extraProps }) => (
    <button className="custom-button" { ...extraProps } >
        { children }
    </button>
)

export default CustomButton;
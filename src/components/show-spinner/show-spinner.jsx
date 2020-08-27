import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './show-spinner.styles';

const ShowSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps } />
    )
};

export default ShowSpinner;
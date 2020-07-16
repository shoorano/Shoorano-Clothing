import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...extraProps }) => (
    <div className="group">
        <input className="form-input" onChange={ handleChange } { ...extraProps } />
        {
            label ?
            (<label className={ `${ 
                extraProps.value.length ? 'shrink' : ''
                } form-input-label` }
                >
                    { label }
            </label>)
            : null
        }
    </div>
) 

export default FormInput;
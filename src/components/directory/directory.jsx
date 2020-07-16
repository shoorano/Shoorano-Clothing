import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.jsx'
import Sections from './directory.data.js';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super()
        
        this.state = {
            sections:  Sections 
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...extraSectionProps }) => (
                        < MenuItem key={ id } { ...extraSectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default Directory
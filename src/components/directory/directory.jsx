import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector.js';

import MenuItem from '../menu-item/menu-item.jsx'

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...extraSectionProps }) => (
                < MenuItem key={ id } { ...extraSectionProps } />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
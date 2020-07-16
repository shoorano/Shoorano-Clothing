import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Crown } from '../../assets/crown.svg'

import './header.styles.scss' 

const Header = () => (
    <div className='header'>
        <Link className='crown-container' to="/">
            <Crown className="crown" />
        </Link>
        <div className='options'>
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;
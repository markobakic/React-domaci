import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

export default function NavBar(props){
    return  <div className='navbar'>
        <p className='heading'>FootLocker</p>
        <div className='nav-item'>
            <Link to="/products"> Snickers </Link>
        </div>
        <div className='nav-item'>
            <Link to="/shopping-cart"> Your cart </Link>
        </div>
    </div>
}
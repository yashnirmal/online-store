import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import StoreLogo from "../assests/onlineshop.png";

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/"><img style={{height:"4rem"}} src={StoreLogo} alt="store logo" /></Link>
        <Link className='cart-link' to="/cart" >Cart</Link>
    </div>
  )
}
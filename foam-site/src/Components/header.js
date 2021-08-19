import React from "react";
import './header.css';
import { BiCart } from "react-icons/bi";

function Header(){

    return  (
    <div className="header">
        <img className="logo-image" src="https://cdn.discordapp.com/attachments/538464909055229972/782681716980187156/logo.png" alt="Tinderest Logo" />

         <div className="button-container">
            <p className="cart-icon"><BiCart size="m"/> </p>
         </div>   
    </div>
    )
}

export default Header;
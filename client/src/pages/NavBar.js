import React, { useState } from 'react';


const Navbar = () => {
    
    

    return (
        <nav className="nav">
            {/* Home 제목 */}
        <a href="/" className="site-title">
            Konfold
        </a>
        {/* 대 메뉴  */}
        
        <ul className="navContainer">
            
            
            <li className="active">
                <a href="/Search">Search</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li 
               
            >
                <a href="/Refer">Reference</a>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './thucphan-logo.svg'
import './NavBar.css'
// import { Button } from './Button';
import Picture from './thuc-picture.jpg'
import {Container, Row, Col} from 'react-bootstrap'

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.AbortController.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(false);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        <img src={Logo} alt="logo" style={{ width: "8vw" }} />
                    </Link>


                </div>
                {/* <div style={{ backgroundColor: "white" }} class="img-hover-zoom--quick-zoom img-hover-zoom--xyz">
                    <img src={Picture} alt="Thuc Phan picture" />
                </div> */}
            </nav>
        </>
    )
}

export default NavBar

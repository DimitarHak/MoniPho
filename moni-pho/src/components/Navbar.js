import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes, FaCameraRetro, FaHome } from 'react-icons/fa';
import '../Style/NavBar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
                <h3 id='siteName'> MoniCamera <FaCameraRetro  /></h3>
                <h3 id='siteNameRes'> M.  <FaCameraRetro/> </h3>
                
            <nav className='navbar' ref={navRef}>
                <Link to='/' className='nav-link'  onClick={showNavBar}> <FaHome /></Link>
                <Link to='/AboutUs' className='nav-link'  onClick={showNavBar}>За Мен</Link>
                <Link to='/Myblog' className='nav-link'  onClick={showNavBar}>Блог</Link>
                <Link to='/MyWork' className='nav-link'  onClick={showNavBar}> Фотография</Link>
                <Link to='/Calendar' className='nav-link'  onClick={showNavBar}> Календар</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;
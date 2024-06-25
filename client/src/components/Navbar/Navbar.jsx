// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import Menu from './Menu';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Store/authSlice'; // Assuming this is where logout action is defined

const Navbar = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetActive = (menuName) => {
        setActiveMenu(menuName);
        setIsMenuOpen(false); // Close the menu when an item is clicked
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        // Perform any additional logout actions (e.g., redirect)
    };

    return (
        <div>
            <div className="bg-black text-white duration-200 z-30 sm:py-4 lg:py-0">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center font-bold">
                        <div>
                            <Link to='/hero' className={`flex items-center gap-2 text-2xl sm:text-3xl font-bold`} onClick={() => handleSetActive('Home')}>
                                <img src={Logo} alt="logo" className="w-10" />
                                FLAVOS
                            </Link>
                        </div>
                        <div className='lg:hidden'>
                            <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                        </div>
                        <div className="sm:hidden lg:block flex justify-center items-center gap-2 text-2xl">
                            <ul className="hidden sm:flex gap-4">
                                <li>
                                    <Link to='/hero' className={`inline-block py-4 px-4 hover:text-blue-400 ${activeMenu === 'Home' ? 'border-b-2 border-blue-400 transition-transform translate-x-2' : ''}`} onClick={() => handleSetActive('Home')}>
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/cart' className={`inline-block py-4 px-4 hover:text-blue-400 ${activeMenu === 'Cart' ? 'border-b-2 border-blue-400 transition-transform translate-x-2' : ''}`} onClick={() => handleSetActive('Cart')}>
                                        CART
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/cuisine' className={`inline-block py-4 px-4 hover:text-blue-400 ${activeMenu === 'Menu' ? 'border-b-2 border-blue-400 transition-transform translate-x-2' : ''}`} onClick={() => handleSetActive('Menu')}>
                                        MENU
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact' className={`inline-block py-4 px-4 hover:text-blue-400 ${activeMenu === 'Contact' ? 'border-b-2 border-blue-400 transition-transform translate-x-2' : ''}`} onClick={() => handleSetActive('Contact')}>
                                        CONTACT
                                    </Link>
                                </li>
                                <li>
                                    {user ? (
                                        <div className="flex items-center gap-4">
                                            <span>Welcome, {user.name}</span>
                                            <button onClick={handleLogout} className="text-orange-500 underline">
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <Link to="/login" className="text-orange-500 underline">
                                            Login
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}>
                <div className="bg-black text-white w-64 h-full shadow-lg p-5 fixed right-0 top-0 mt-16 flex flex-col"> {/* Adjusted top positioning */}
                    <ul className="flex flex-col gap-4 text-2xl">
                        <li>
                            <Link to='/hero' className={`hover:text-blue-400 ${activeMenu === 'Home' ? 'text-blue-400' : ''}`} onClick={() => handleSetActive('Home')}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to='/cuisine' className={`hover:text-blue-400 ${activeMenu === 'Menu' ? 'text-blue-400' : ''}`} onClick={() => handleSetActive('Menu')}>
                                MENU
                            </Link>
                        </li>
                        <li>
                            <Link to='/cart' className={`inline-block  hover:text-blue-400 ${activeMenu === 'Cart' ? 'border-b-2 border-blue-400 transition-transform translate-x-2' : ''}`} onClick={() => handleSetActive('Cart')}>
                                CART
                            </Link>
                        </li>
                        <li>
                            <Link to='/location' className={`hover:text-blue-400 ${activeMenu === 'Location' ? 'text-blue-400' : ''}`} onClick={() => handleSetActive('Location')}>
                                Location
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className={`hover:text-blue-400 ${activeMenu === 'Contact' ? 'text-blue-400' : ''}`} onClick={() => handleSetActive('Contact')}>
                                CONTACT
                            </Link>
                        </li>
                        <li>
                            <Link to='/login'>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105">
                                    LOGIN
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

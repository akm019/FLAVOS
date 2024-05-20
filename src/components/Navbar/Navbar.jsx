import React from 'react';
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom';
import Cuisine from '../Cuisine/Cuisine';
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-slate-600 dark:bg-orange-500 text-white duration-200">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="flex items-center gap-2 etext-2xl sm:text-3xl font-bold">
                <img src={Logo} alt="logo" className="w-10"/>
                FLAVOS
              </a>
            </div>
            <div className="flex items-center gap-4 text-2xl">
              <ul className="hidden sm:flex gap-4">
                <li>
                  <a href="#" className="inline-block py-4 px-4 hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <Link to='/cuisine'>ABOUT</Link>
                </li>
                <li>
                  <a href="#" className="inline-block py-4 px-4 hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105" >
                ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

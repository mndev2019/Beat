import React, { useEffect, useState } from 'react';
import logo from '../assets/Image/logo.svg';



// import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const location = useLocation();
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]);

   

    // Function to check if we are on the home page
    const getNavbarClass = () => {
        return location.pathname === '/' ? 'absolute' : '';
    };


    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-[600] text-[16px] text-white items-center cursor-pointer">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
                >
                    Log In
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                >
                    <button className=' rounded-[16px] py-3 px-5 signbtn'>Sign up </button>
                </NavLink>
            </li>
        </ul>
    );


    return (
        <>
            <section className={`md:py-5 py-3 md:px-10 px-5 z-10   ${getNavbarClass()}   w-full`}> 
         
                <div className="container mx-auto">
                    <div className="flex justify-between items-center bg-[#1E032A] md:rounded-[24px] rounded-md px-5 ">
                        {/* Logo */}
                        <NavLink to='/'>
                            <img src={logo} alt='Logo' className='md:h-auto h-[50px]' />
                        </NavLink>

                        {/* Navbar links for larger screens */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navlist}

                            {/* Search and Cart icons for desktop view */}

                        </div>

                        {/* Sidebar icon for mobile */}
                        <div className="lg:hidden  relative z-1">
                            <button onClick={toggleMenu}>
                                <CiMenuFries className="text-3xl text-white" />
                            </button>
                        </div>


                    </div>
                </div>

                {/* Sidebar menu for mobile */}
                <div
                    className={`fixed inset-0  z-50 transform bg-[#1E032A] ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}
                    style={{ width: '50%' }}
                >
                    <div className="p-6">

                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu}>
                                <IoClose className="text-2xl text-white" />
                            </button>
                        </div>
                        {navlist}
                    </div>
                </div>

            </section >
        </>
    );
};

export default Navbar;

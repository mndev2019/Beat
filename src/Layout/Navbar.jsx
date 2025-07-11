import React, { useEffect, useState } from 'react';
import logo from '../assets/Image/logo.svg';
import cart from '../assets/Image/cart.svg'
import profile from '../assets/Image/newprofile.jpg';


// import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { BASE_URL } from '../Api/Baseurl';



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navigate = useNavigate();
    const type = localStorage.getItem("type")
    const token = localStorage.getItem("token")
    const [isOpen, setIsOpen] = useState(false);
    const [data, setdata] = useState([]);



    useEffect(() => {
        if (token) {
            handleget();
        } else {
            console.log("❌ Token not found in localStorage.");
        }
    }, [token])

    const handleget = async () => {
        try {
            const token = localStorage.getItem("token");

            const resp = await axios.get(`${BASE_URL}user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setdata(resp.data.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            // if (error.response && error.response.status === 403) {
            //     localStorage.removeItem("token");
            //     navigate('/login');
            // }
        }
    };
    useEffect(() => {

    }, [])

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
        if (location.pathname === '/') {
            return isScrolled ? 'fixed top-0 shadow-md bg-[#1E032A]' : 'absolute';
        }
        return isScrolled ? 'fixed top-0 shadow-md bg-[#1E032A]' : "";
    };
    const handlelogout = () => {
        localStorage.clear();
        navigate('/login')
    }


    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-[600] text-[16px] text-white items-center cursor-pointer">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-[#DB28A9]" : "hover:text-[#DB28A9]"}
                    onClick={() => setIsOpen(!open)}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "text-[#DB28A9]" : "hover:text-[#DB28A9]"}
                    onClick={() => setIsOpen(!open)}
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/battle-zone"
                    className={({ isActive }) => isActive ? "text-[#DB28A9]" : "hover:text-[#DB28A9]"}
                    onClick={() => setIsOpen(!open)}
                >
                    BattleZone
                </NavLink>
            </li>
            {
                token ? (
                    <>
                        {
                            type === "Buyer" && (
                                <li>
                                    <NavLink to="/cart" onClick={() => setIsOpen(!open)}>
                                        <button>
                                            <img src={cart} alt='cart' />
                                        </button>
                                    </NavLink>
                                </li>
                            )
                        }
                        <li>
                            <div className='h-[45px] w-[45px] rounded-full'
                                onClick={() => {
                                    setIsOpen(!open);
                                    navigate('/profile');
                                }}>
                                <img src={`${BASE_URL}${data.image}`} alt='profile-img' className='h-[45px] w-[45px] rounded-full object-cover'
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = profile;
                                    }} />
                            </div>

                        </li>
                        {/* {type === "Seller" && (
                            <li>
                                <button
                                    className="cursor-pointer rounded-[16px] py-3 px-5 signbtn"
                                    onClick={() => {
                                        setIsOpen(!open);
                                        navigate('/addbeat');
                                    }}

                                >
                                    Add Beat
                                </button>
                            </li>
                        )} */}

                        <li>
                            <NavLink to="">
                                <button className='rounded-[16px] py-3 px-5 signbtn cursor-pointer' onClick={handlelogout}>Log out</button>
                            </NavLink>
                        </li>

                    </>
                ) : (
                    <>
                        {/* <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
                            >
                                Log In
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/login">
                                <button className='rounded-[16px] py-3 px-5 signbtn cursor-pointer'>Log In / Sign up</button>
                            </NavLink>
                        </li>
                    </>
                )
            }


        </ul>
    );


    return (
        <>
            <section className={`md:py-2 py-1 md:px-10 px-3 z-20    ${getNavbarClass()}   w-full`}>

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

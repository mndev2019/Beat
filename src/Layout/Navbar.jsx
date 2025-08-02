import React, { useEffect, useState } from 'react';
import logo from '../assets/Image/logo.png';
import cart from '../assets/Image/cart.svg'
import profile from '../assets/Image/newprofile.jpg';
import battlezoneimg from "../assets/Image/battllezone.png"
import mouse from "../assets/Image/mouse.png"



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
            <li className='relative'>
                <NavLink
                    to="https://rapbattle.in/"
                    className={({ isActive }) => isActive ? "text-[#DB28A9]" : "hover:text-[#DB28A9]"}
                    onClick={() => setIsOpen(!open)}
                >
                    <img src={battlezoneimg} alt="" />
                    <img src={mouse} alt="" className='absolute right-[10px] bottom-[-8px]' />

                </NavLink>
            </li>
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
            {/* <li>
                <NavLink
                    to="https://rapbattle.in/"
                    target='_blank'
                    onClick={() => setIsOpen(!open)}
                    className={({ isActive }) =>
                        `relative inline-block px-6 py-2 font-semibold text-white rounded-md transition-all duration-300 ease-in-out transform 
       ${isActive ? 'bg-gradient-to-r from-pink-500 to-yellow-500 scale-105 shadow-lg' : 'signbtn hover:bg-[#e6771c] hover:scale-105 shadow-md'}`
                    }
                >
                    <span className="relative z-10"> BattleZone</span>
                    <span className="absolute inset-0 rounded-md bg-black opacity-10 blur-sm animate-pulse"></span>
                </NavLink>
            </li>
            <li className="group relative">


                <NavLink
                    to="https://rapbattle.in/"
                    target="_blank"
                    onClick={() => setIsOpen(!open)}
                    className="flex items-center gap-2 px-4 py-2 signbtn text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-[#e6771c] shadow-md group-hover:px-6 group-hover:pr-8"
                >
                    <span className="text-md transition-transform duration-300 transform group-hover:scale-125">🔥</span>
                    <span
                        className="ml-1 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[200px] group-hover:ml-2 transition-all duration-300 ease-in-out"
                    >
                        Battle Zone
                    </span>
                </NavLink>


            </li> */}




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
                            <NavLink to="" >
                                <button className='rounded-[16px] py-3 px-5 signbtn cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105' onClick={handlelogout}>Log out</button>
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
                                <button className='rounded-[16px] py-3 px-5 signbtn cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105'>Log In / Sign up</button>
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
                            <img src={logo} alt='Logo' className='md:h-auto w-[60px] py-4' />
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

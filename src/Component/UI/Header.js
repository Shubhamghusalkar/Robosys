import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenuAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronDown, FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { UiRoutes } from '../../Routes/UiRoutes';

function Header() {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("username");
        setUsername(user);
    }, []);

    const logout = () => {
        localStorage.removeItem("username"); // make sure you save username with this key
        setUsername(null);
        setOpen(false);
        navigate(UiRoutes.login);
    };

    return (
        <div className="navBar relative antialiased">
            <header className="fixed top-0 z-[9999] shadow-sm lg:shadow-none shadow-black flex items-center space-x-6 justify-between px-5 w-full pb-2 pt-2 md:pb-2 lg:pb-0 lg:backdrop-blur-sm backdrop-blur-lg">
                {/* Logo */}
                <Link to={"/"} className="logo pt-2 lg:pt-0">
                    <span className="text-white font-medium text-2xl md:text-2xl lg:text-3xl">ROBOSYS</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="navMenu space-x-12 md:space-x-6 lg:space-x-10 ms-auto hidden gap-0 font-medium items-center md:hidden md:gap-1 lg:flex text-white">
                    <Link to={"/"} className="py-7 md:py-3 lg:py-4 hover:text-pink-700 cursor-pointer">Home</Link>
                    <Link to={"/about-us"} className="py-7 md:py-3 lg:py-4 hover:text-pink-700 cursor-pointer">About Us</Link>
                    <Link className="py-7 md:py-3 lg:py-4 hover:text-pink-700 cursor-pointer flex gap-2 items-center relative group">
                        Shop <FaChevronDown className="group-hover:rotate-180 transition duration-200 border border-slate-400 p-[3px] group-hover:border-pink-700 rounded-full" />
                        <div className="flex-col hidden absolute top-20 md:top-14 lg:top-14 group-hover:flex bg-slate-950 rounded-lg text-white p-3">
                            <Link to={"/kits"} className="hover:bg-slate-800 border border-transparent border-l-2 hover:border-l-pink-700 ps-3 pe-20 py-2.5 rounded transition-all duration-200">Kits</Link>
                            <Link to={"/products"} className="hover:bg-slate-800 border border-transparent border-l-2 hover:border-l-pink-700 ps-3 pe-20 py-2.5 rounded transition-all duration-200">Accessories</Link>
                            <Link to={"/courses"} className="hover:bg-slate-800 border border-transparent border-l-2 hover:border-l-pink-700 ps-3 pe-20 py-2.5 rounded transition-all duration-200">Courses</Link>
                        </div>
                    </Link>
                    <Link to={"/contact"} className="py-7 md:py-3 lg:py-4 hover:text-pink-700 cursor-pointer">Contact</Link>
                </nav>

                {/* Right Section */}
                <div className="flex items-center">
                    {/* Cart */}
                    <Link to={"/cart"} className="flex space-x-5 relative border-r-2 border-slate-700 pt-2 md:pt-0 lg:pt-0 px-3 md:px-5 lg:px-5">
                        <AiOutlineShoppingCart className="text-2xl md:text-3xl lg:text-3xl hover:scale-110 transition cursor-pointer text-white" />
                        <span className="absolute bottom-4 right-2 md:right-4 lg:right-4 bg-pink-700 text-white text-xs px-1.5 py-0.5 rounded-full">2</span>
                    </Link>

                    {/* User Menu */}
                    <div className="relative">
                        {username ? (
                            <>
                                <button
                                    className="text-white font-medium pt-3 md:pt-0 lg:pt-0 pl-5 mr-10 md:mr-9 lg:mr-0 flex items-center gap-1 line-clamp-1"
                                    onClick={() => setOpen(!open)}
                                >
                                    {username}
                                    <FaChevronDown className={`transition duration-200 p-[2px] w-[30px] ${open ? "rotate-180" : ""}`} />
                                </button>

                                {open && (
                                    <div className="flex-col text-sm absolute top-16 lg:top-10 md:top-12 bg-slate-700 text-white border border-slate-600 z-50 font-semibold w-full after:h-[11px] after:absolute after:w-[11px] after:rotate-45 after:bg-slate-700 after:-top-1.5 after:right-10 lg:after:right-3 md:after:right-12 after:-z-50">
                                        <Link to={"/profile"} className="flex items-center gap-2 hover:bg-slate-600 border border-b-1 hover:border-slate-200 border-l-[3px] border-l-transparent hover:border-l-pink-700 ps-4 pe-20 py-2.5 transition-all duration-200">
                                            <FaUser className="font-medium mr-1.5" /> Profile
                                        </Link>
                                        <button onClick={logout} className="flex items-center gap-2 hover:bg-slate-600 border border-b-0 hover:border-slate-200 border-l-[3px] border-l-transparent hover:border-l-pink-700 ps-4 pe-20 py-2.5 transition-all duration-200">
                                            <TbLogout className="font-medium text-xl" /> Log Out
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to={"/login"}
                                onClick={() => navigate(UiRoutes.login)}
                                className="text-white font-medium pt-3 md:pt-0 lg:pt-0 pl-5 mr-10 md:mr-9 lg:mr-0"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? (
                                <IoClose className="text-white text-3xl fixed top-6 md:top-3.5 right-3 z-50 border-slate-700 pl-2 border-l-2" />
                            ) : (
                                <RiMenuAddFill className="text-3xl text-white fixed top-6 md:top-3.5 right-3 z-50 border-slate-700 pl-2 border-l-2" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="flex flex-col md:items-center fixed top-0 right-0 w-full backdrop-blur-sm h-full z-[999] border-t-slate-600 mt-[77px] md:mt-[55px] lg:pt-[100px] border-t border-gray-200 shadow-md pl-10 pt-7 text-white font-medium" style={{ backgroundColor: "#000000db" }}>
                    <Link to={"/"} className="py-3 hover:text-pink-700 cursor-pointer">Home</Link>
                    <Link to={"#"} className="py-3 hover:text-pink-700 cursor-pointer flex flex-col md:items-center gap-2 group">
                        <span className="flex gap-3 items-center">Shop <FaChevronDown className="group-hover:rotate-180 transition duration-200 border border-slate-400 group-hover:border-pink-700 p-[3px] rounded-full" /></span>
                        <div className="hidden group-hover:flex flex-col bg-slate-950 rounded-lg text-white p-3 w-fit">
                            <Link to={"/kits"} className="hover:bg-slate-800 hover:text-pink-700 ps-3 pe-20 py-2.5 rounded transition-all">Kits</Link>
                            <Link to={"/products"} className="hover:bg-slate-800 hover:text-pink-700 ps-3 pe-20 py-2.5 rounded transition-all">Accessories</Link>
                            <Link to={"/courses"} className="hover:bg-slate-800 hover:text-pink-700 ps-3 pe-20 py-2.5 rounded transition-all">Courses</Link>
                        </div>
                    </Link>
                    <Link to={"/products"} className="py-3 hover:text-pink-700 cursor-pointer">Features</Link>
                    <Link to={"/contact"} className="py-3 hover:text-pink-700 cursor-pointer">Contact</Link>
                </div>
            )}
        </div>
    );
}

export default Header;

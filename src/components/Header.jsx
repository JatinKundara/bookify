import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import { NavLink } from 'react-router-dom';

function Header() {
    const { isLoggedIn } = useFirebase();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing the mobile menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <header className="bg-indigo-100">
            <div className="mx-auto py-2 max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <NavLink to={'/'} className="block text-indigo-600">
                            <img className='w-[10rem]' src=".././public/logo.png" alt="Logo" />
                        </NavLink>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <NavLink
                                        to='/'
                                        className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-500"} transition hover:text-indigo-600`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/book-list'
                                        className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-500"} transition hover:text-indigo-600`}>
                                        All Books
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/about-us'
                                        className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-500"} transition hover:text-indigo-600`}>
                                        About Us
                                    </NavLink>
                                </li>

                                {isLoggedIn && (
                                    <li>
                                        <NavLink
                                            to='/add-book'
                                            className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-500"} transition hover:text-indigo-600`}>
                                            Add Books
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <div className="flex items-center gap-x-3">
                                {
                                    !isLoggedIn ? (
                                        <div>
                                            <NavLink
                                                to='/login'
                                                className="rounded-md mx-2 bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white">
                                                Login
                                            </NavLink>
                                            <NavLink
                                                to='/register'
                                                className="rounded-md mx-2 bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white">
                                                Register
                                            </NavLink>
                                        </div>
                                    ) : (
                                        <NavLink to='/profile'>
                                            <div
                                                className="h-[2.5rem] w-[2.5rem] bg-[url('.././public/user.png')] bg-cover bg-no-repeat cursor-pointer rounded-full border-2 border-black hover:border-indigo-600 mx-2 text-sm font-medium text-white transition">
                                            </div>
                                            {/* <p className='text-center text-sm text-gray-500'>Profile</p> */}
                                        </NavLink>
                                    )
                                }

                                {/* Toggle button for mobile menu */}
                                <button
                                    onClick={toggleMenu}
                                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                                    <span className="sr-only">Toggle menu</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu (hidden by default, shown when isMenuOpen is true) */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <nav aria-label="Mobile Navigation">
                        <ul className="flex flex-col items-center gap-4 mt-4 text-sm">
                            <li>
                                <NavLink
                                    to='/'
                                    onClick={toggleMenu} // Close menu when clicking a link
                                    className="text-gray-500 transition hover:text-indigo-600">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/book-list'
                                    onClick={toggleMenu}
                                    className="text-gray-500 transition hover:text-indigo-600">
                                    All Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about-us'
                                    onClick={toggleMenu}
                                    className="text-gray-500 transition hover:text-indigo-600">
                                    About Us
                                </NavLink>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <NavLink
                                        to='/add-book'
                                        onClick={toggleMenu}
                                        className="text-gray-500 transition hover:text-indigo-600">
                                        Add Books
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

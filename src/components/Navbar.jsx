import React from 'react';
import { HiMoon, HiSun, HiBars3, HiXMark } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMenuOpen, toggleMenu, toggleDarkMode, darkMode }) => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Livro de visitas', path: '/guestbook' },
        { name: 'Painel', path: '/dashboard' },
        { name: 'Blog', path: '/blog' },
        { name: 'Trechos', path: '/snippets' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="flex items-center justify-between mb-20 relative">
            <div className="flex items-center gap-4">
                {/* Hamburger Button - Mobile Only */}
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 md:hidden hover:ring-2 ring-gray-300 transition-all z-50"
                >
                    {isMenuOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive(link.path)
                                ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800'
                                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:ring-2 ring-gray-300 transition-all"
            >
                {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-14 left-0 w-full bg-background dark:bg-foreground border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-xl md:hidden z-40 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => toggleMenu()}
                                className={`px-4 py-3 text-lg font-semibold rounded-xl transition-all ${isActive(link.path)
                                    ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

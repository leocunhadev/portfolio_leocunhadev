import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, toggleMenu, navLinks, toggleDarkMode, darkMode }) => {
    return (
        <nav className="flex items-center justify-between mb-20 relative">
            <div className="flex items-center gap-4">
                {/* Hamburger Button - Mobile Only */}
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 md:hidden hover:ring-2 ring-gray-300 transition-all z-50"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:ring-2 ring-gray-300 transition-all"
            >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-14 left-0 w-full bg-background dark:bg-foreground border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-xl md:hidden z-40 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                onClick={() => toggleMenu()}
                                className="px-4 py-3 text-lg font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

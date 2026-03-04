import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Guestbook from './pages/Guestbook';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Snippets from './pages/Snippets';
import BlogPost from './pages/BlogPost';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const themeCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('theme='));

        const savedTheme = themeCookie ? themeCookie.split('=')[1] : null;

        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(systemPrefersDark);
            if (systemPrefersDark) document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            document.cookie = "theme=dark; path=/; max-age=2592000";
        } else {
            document.documentElement.classList.remove('dark');
            document.cookie = "theme=light; path=/; max-age=2592000";
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <div className="min-h-screen w-full flex justify-center bg-background dark:bg-foreground transition-colors duration-300">
                <div className="max-w-3xl w-full px-8 py-8">
                    <Navbar
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        toggleDarkMode={toggleDarkMode}
                        darkMode={darkMode}
                    />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/guestbook" element={<Guestbook />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/snippets" element={<Snippets />} />
                    </Routes>

                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;

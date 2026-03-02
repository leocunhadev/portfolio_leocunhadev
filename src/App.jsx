import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Learning from './components/Learning';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Carregar preferência do cookie ao iniciar
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
            // Se não houver cookie, verificar preferência do sistema
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
            document.cookie = "theme=dark; path=/; max-age=2592000"; // 30 dias
        } else {
            document.documentElement.classList.remove('dark');
            document.cookie = "theme=light; path=/; max-age=2592000";
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = ['Casa', 'Livro de visitas', 'Painel', 'Blog', 'Trechos'];

    const featuredPosts = [
        {
            title: 'Tudo que eu sei sobre guias de estilo, sistemas de design e bibliotecas de componentes',
            views: '92.643',
            gradient: 'from-[#D8B4FE] to-[#818CF8]'
        },
        {
            title: 'Passado, presente e futuro do gerenciamento do estado de reação',
            views: '22.550',
            gradient: 'from-[#FDE68A] to-[#FCA5A5]'
        },
        {
            title: 'Qual back-end devo usar como desenvolvedor de front-end?',
            views: '11.075',
            gradient: 'from-[#6EE7B7] to-[#3B82F6]'
        }
    ];

    const courseVideos = [
        { id: '01', title: 'Introdução ao React 2025', duration: '1:02:45' },
        { id: '02', title: 'Firestore, Chakra UI, Absolute Imports', duration: '54:22' },
        { id: '03', title: 'Projetando e construindo o painel', duration: '1:08:30' },
        { id: '04', title: 'Firebase Admin com Next.js + SWR', duration: '1:13:45' }
    ];

    return (
        <div className="min-h-screen w-full flex justify-center bg-background dark:bg-foreground transition-colors duration-300">
            <div className="max-w-3xl w-full px-8 py-8">
                <Navbar
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                    navLinks={navLinks}
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />

                <main>
                    <Hero />
                    <FeaturedPosts featuredPosts={featuredPosts} />
                    <Learning courseVideos={courseVideos} />
                    <Newsletter />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default App;

import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-16">
                <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
                <span>Não jogar - <span className="font-semibold text-gray-900 dark:text-white">Spotify</span></span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-base">
                <div className="flex flex-col gap-5">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Casa</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Cerca de</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Boletim de Notícias</a>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Youtube</a>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Usos</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Livro de visitas</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Trechos</a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Tweets</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

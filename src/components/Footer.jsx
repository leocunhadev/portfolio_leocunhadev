import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [spotify, setSpotify] = useState(null);

    useEffect(() => {
        const fetchSpotify = async () => {
            try {
                const response = await fetch('https://api.lanyard.rest/v1/users/449209613871611904');
                const data = await response.json();

                if (data?.success && data?.data?.spotify) {
                    setSpotify(data.data.spotify);
                } else {
                    setSpotify(null);
                }
            } catch (error) {
                console.error("Erro ao carregar o status do Spotify via Lanyard:", error);
                setSpotify(null);
            }
        };

        fetchSpotify();
        const interval = setInterval(fetchSpotify, 10000); // Atualiza a cada 10 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 text-sm text-gray-500 mb-16">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${spotify ? 'bg-[#1DB954] animate-pulse' : 'bg-gray-400 dark:bg-gray-700'}`} />
                <span className="truncate">
                    {spotify ? (
                        <>
                            Ouvindo <span className="font-semibold text-gray-900 dark:text-white">{spotify.song}</span> de <span className="font-semibold text-gray-900 dark:text-white">{spotify.artist}</span> -
                        </>
                    ) : (
                        'Não estou ouvindo nada - '
                    )}
                    <span className="font-semibold text-gray-900 dark:text-white ml-1">Spotify</span>
                </span>
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    const [spotify, setSpotify] = useState(null);

    useEffect(() => {
        let ws;
        let heartbeatInterval;
        let isMounted = true;

        const connectWebSocket = () => {
            ws = new WebSocket('wss://api.lanyard.rest/socket');

            ws.onopen = () => {
                if (!isMounted) return;
                ws.send(JSON.stringify({
                    op: 2,
                    d: {
                        subscribe_to_id: "449209613871611904"
                    }
                }));
            };

            ws.onmessage = (event) => {
                if (!isMounted) return;
                const message = JSON.parse(event.data);

                if (message.op === 1) {
                    const heartbeat = message.d.heartbeat_interval;
                    heartbeatInterval = setInterval(() => {
                        if (ws.readyState === WebSocket.OPEN && isMounted) {
                            ws.send(JSON.stringify({ op: 3 }));
                        }
                    }, heartbeat);
                }

                if (message.t === 'INIT_STATE' || message.t === 'PRESENCE_UPDATE') {
                    const spotifyData = message.d.spotify;
                    setSpotify(spotifyData || null);
                }
            };

            ws.onclose = () => {
                clearInterval(heartbeatInterval);
                if (isMounted) {
                    setTimeout(connectWebSocket, 5000);
                }
            };

            ws.onerror = (error) => {
                if (isMounted) console.error("Erro no WebSocket do Lanyard:", error);
                ws.close();
            };
        };

        connectWebSocket();

        return () => {
            isMounted = false;
            if (ws) ws.close();
            clearInterval(heartbeatInterval);
        };
    }, []);

    return (
        <footer className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 text-sm text-gray-500 mb-16">
                <span className="truncate flex items-center gap-2">
                    {spotify ? (
                        <>
                            Ouvindo <span className="font-semibold text-gray-900 dark:text-white">{spotify.song}</span> de <span className="font-semibold text-gray-900 dark:text-white">{spotify.artist}</span> -
                        </>
                    ) : (
                        'Não estou ouvindo nada - '
                    )}
                    <span className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                        <FaSpotify size={18} className={spotify ? 'text-[#1DB954] animate-pulse' : 'text-gray-400'} />
                        Spotify
                    </span>
                </span>
            </div>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-base mt-20">
                <div className="flex flex-col gap-5 text-sm">
                    <Link to="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
                    <Link to="/guestbook" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Livro de visitas</Link>
                    <Link to="/newsletter" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Newsletter</Link>
                </div>
                <div className="flex flex-col gap-4 text-sm">
                    <a href="https://twitter.com/leocunhadev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2">
                        X (Twitter)
                    </a>
                    <a href="https://github.com/leocunhadev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 font-semibold">
                        <FaGithub size={16} /> GitHub
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">YouTube</a>
                </div>
                <div className="flex flex-col gap-4 text-sm">
                    <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Painel</Link>
                    <Link to="/snippets" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Trechos</Link>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;

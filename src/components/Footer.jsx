import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [spotify, setSpotify] = useState(null);

    useEffect(() => {
        let ws;
        let heartbeatInterval;

        const connectWebSocket = () => {
            ws = new WebSocket('wss://api.lanyard.rest/socket');

            ws.onopen = () => {
                // Ao abrir, envia o payload de inicialização para se inscrever no usuário
                ws.send(JSON.stringify({
                    op: 2,
                    d: {
                        subscribe_to_id: "449209613871611904"
                    }
                }));
            };

            ws.onmessage = (event) => {
                const message = JSON.parse(event.data);

                // Lidar com o heartbeat (Hello payload)
                if (message.op === 1) {
                    const heartbeat = message.d.heartbeat_interval;
                    heartbeatInterval = setInterval(() => {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send(JSON.stringify({ op: 3 }));
                        }
                    }, heartbeat);
                }

                // Lidar com dados iniciais (INIT_STATE) ou atualizações (PRESENCE_UPDATE)
                if (message.t === 'INIT_STATE' || message.t === 'PRESENCE_UPDATE') {
                    const spotifyData = message.d.spotify;
                    setSpotify(spotifyData || null);
                }
            };

            ws.onclose = () => {
                // Tenta reconectar se a conexão for perdida (com um pequeno delay)
                clearInterval(heartbeatInterval);
                setTimeout(connectWebSocket, 5000);
            };

            ws.onerror = (error) => {
                console.error("Erro no WebSocket do Lanyard:", error);
                ws.close();
            };
        };

        connectWebSocket();

        return () => {
            if (ws) {
                ws.close();
            }
            clearInterval(heartbeatInterval);
        };
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

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-base">
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
            </div> */}
        </footer>
    );
};

export default Footer;

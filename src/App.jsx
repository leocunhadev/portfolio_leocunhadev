import React, { useState } from 'react';
import { Moon, Sun, Play, ArrowRight, Instagram, Twitter, Github, Youtube } from 'lucide-react';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = ['Casa', 'Livro de visitas', 'Painel', 'Blog', 'Trechos'];

    const featuredPosts = [
        {
            title: 'Tudo que eu sei sobre guias de estilo, sistemas de design e bibliotecas de componentes',
            views: '92,643',
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
        <div className="min-h-screen w-full flex justify-center">
            <div className="max-w-3xl w-full px-8 py-16">
                {/* Navigation */}
                <nav className="flex items-center justify-between mb-20">
                    <div className="flex gap-4 sm:gap-8">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:ring-2 ring-gray-300 transition-all"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Hero Section */}
                <section className="mb-20">
                    <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">Léo Cunha</h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                Chefe de Relações com o Desenvolvedor na <span className="font-semibold text-black dark:text-white">Vercel</span>
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                                Ajudando os desenvolvedores a construir uma web mais rápida. Ensinar sobre desenvolvimento web, sem servidor e React / Next.js.
                            </p>
                        </div>
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 ring-4 ring-gray-100 dark:ring-gray-800">
                            <img
                                src="https://github.com/leocunhadev.png"
                                alt="Léo Cunha"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">Postagens em destaque</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {featuredPosts.map((post, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`group relative p-1 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br ${post.gradient}`}
                            >
                                <div className="bg-white dark:bg-[#111111] p-6 rounded-[14px] h-64 flex flex-col justify-between items-start">
                                    <h3 className="text-lg font-bold leading-snug mb-6 group-hover:underline text-black dark:text-white">{post.title}</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto uppercase tracking-wide font-semibold">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        {post.views}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 mt-10 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                        Leia todas as postagens <ArrowRight size={16} />
                    </a>
                </section>

                {/* Learning Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Aprenda React e Next.js</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        Crie e implante um aplicativo SaaS moderno usando o software de código aberto mais popular. Este curso tem 12 horas de duração e é totalmente transmitido ao vivo.
                    </p>
                    <div className="space-y-6">
                        {courseVideos.map((video) => (
                            <div key={video.id} className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-800 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 -mx-4 px-4 rounded-lg transition-colors">
                                <div className="flex items-center gap-6">
                                    <span className="text-base text-gray-400 font-medium w-6">{video.id}</span>
                                    <span className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{video.title}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-500 font-medium">{video.duration}</span>
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                                        <Play size={10} className="text-gray-500 dark:text-gray-400 group-hover:text-white fill-current ml-0.5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 mt-10 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                        Assistir todos os vídeos <ArrowRight size={16} />
                    </a>
                </section>

                {/* Newsletter Section */}
                <section className="mb-20">
                    <div className="bg-[#f0f9ff] dark:bg-[#1a202c] border border-blue-100 dark:border-blue-900/30 rounded-2xl p-10">
                        <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Assine o boletim informativo</h3>
                        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Receba e-mails meus sobre desenvolvimento da web, tecnologia e acesso antecipado a novos artigos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="tim@apple.com"
                                className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-3 text-base focus:outline-none focus:ring-2 ring-blue-500/20"
                            />
                            <button className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold px-8 py-3 rounded-lg text-base hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors uppercase tracking-wide">
                                Se inscrever
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-5 font-medium">
                            5.851 assinantes - 32 edições
                        </p>
                    </div>
                </section>

                {/* Footer */}
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
            </div>
        </div>
    );
};

export default App;

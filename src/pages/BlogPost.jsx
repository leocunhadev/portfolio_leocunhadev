import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Eye, ArrowLeft, Share2, Twitter, Linkedin, Copy } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();

    // Mock data for a blog post
    const post = {
        title: 'Tudo que eu sei sobre guias de estilo, sistemas de design e bibliotecas de componentes',
        publishedAt: '22 de Janeiro de 2024',
        readingTime: '12 min de leitura',
        views: '92.643 visualizações',
        author: {
            name: 'Leo Cunha',
            avatar: 'https://github.com/leocunhadev.png',
            role: 'Software Engineer'
        },
        content: `
            <p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                Nos últimos anos, trabalhei em inúmeros projetos que exigiam a criação e manutenção de sistemas de design robustos.
                Neste artigo, quero compartilhar tudo o que aprendi sobre como construir bibliotecas de componentes que escalam.
            </p>

            <h2 class="text-2xl font-bold mb-4 mt-8 dark:text-white">O que é um Sistema de Design?</h2>
            <p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                Um sistema de design não é apenas uma biblioteca de componentes UI. É a linguagem visual completa de um produto,
                incluindo diretrizes de UX, tom de voz, e princípios que guiam a criação de novas funcionalidades.
            </p>

            <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
                <p class="italic text-gray-800 dark:text-gray-200">
                    "Sistemas de design são sobre comunicação. Se os desenvolvedores e designers não estiverem falando a mesma língua, o sistema falhou."
                </p>
            </div>

            <h3 class="text-xl font-bold mb-3 mt-6 dark:text-white">1. Fundamentos (Atoms)</h3>
            <p class="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                Começamos com o básico: cores, tipografia, espaçamento e ícones. Estes são os blocos de construção de tudo o mais.
            </p>

            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
<code>// Exemplo de tokens de design
const tokens = {
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    background: '#FFFFFF'
  },
  spacing: [0, 4, 8, 16, 24, 32, 64]
}</code></pre>

            <h3 class="text-xl font-bold mb-3 mt-6 dark:text-white">2. Componentes e Composição</h3>
            <p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                A verdadeira magia acontece quando você combina esses fundamentos em componentes reutilizáveis e acessíveis.
                A acessibilidade (A11y) nunca deve ser uma reflexão tardia.
            </p>
        `
    };

    return (
        <article className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Back Button */}
            <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 mb-10 transition-colors group"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Voltar ao blog
            </Link>

            {/* Header */}
            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 dark:text-white leading-[1.1]">
                    {post.title}
                </h1>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700"
                        />
                        <div>
                            <p className="text-sm font-bold dark:text-white leading-none mb-1">{post.author.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{post.author.role}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {post.publishedAt}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {post.readingTime}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Eye size={14} />
                            {post.views}
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div
                className="prose prose-lg dark:prose-invert max-w-none mb-16"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share & Footer Actions */}
            <footer className="pt-10 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                            <Twitter size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors">
                            <Linkedin size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                            <Copy size={20} />
                        </button>
                    </div>

                    <a
                        href="https://twitter.com/leocunha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-500 hover:underline"
                    >
                        Editar artigo no GitHub
                    </a>
                </div>
            </footer>
        </article>
    );
};

export default BlogPost;

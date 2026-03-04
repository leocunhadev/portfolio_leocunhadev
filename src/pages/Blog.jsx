import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Blog = () => {
    const [searchValue, setSearchValue] = useState('');

    const posts = [
        {
            title: 'Tudo que eu sei sobre guias de estilo, sistemas de design e bibliotecas de componentes',
            summary: 'Um guia completo sobre como construir e manter sistemas de design escaláveis usando React e tokens de design.',
            slug: 'tudo-que-eu-sei-sobre-guias-de-estilo,-sistemas-de-design-e-bibliotecas-de-componentes'
        },
        {
            title: 'Passado, presente e futuro do gerenciamento do estado no React',
            summary: 'Uma análise profunda de como o gerenciamento de estado evoluiu, do Redux aos Hooks e além.',
            slug: 'passado,-presente-e-futuro-do-gerenciamento-do-estado-no-react'
        },
        {
            title: 'Qual back-end devo usar como desenvolvedor de front-end?',
            summary: 'Explorando opções como Firebase, Supabase e soluções customizadas para desenvolvedores focados em UI.',
            slug: 'qual-back-end-devo-usar-como-desenvolvedor-de-front-end?'
        }
    ];

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <main className="py-10">
            <h1 className="text-4xl font-bold mb-4 dark:text-white tracking-tight">Blog</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Eu escrevo sobre desenvolvimento web, design e tecnologia no geral.
                Use a busca abaixo para filtrar por título.
            </p>

            <div className="relative w-full mb-10">
                <input
                    type="text"
                    placeholder="Buscar artigos"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-foreground text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            <div className="flex flex-col gap-10">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group block"
                        >
                            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {post.summary}
                            </p>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-10">Nenhum artigo encontrado.</p>
                )}
            </div>
        </main>
    );
};

export default Blog;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Heart, ArrowLeft, Share2, Twitter, Linkedin, Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { fetchWithCache } from '../utils/githubApi';

const BlogPost = () => {
    // Agora o "slug" na verdade é o número da Issue no GitHub
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const issue = await fetchWithCache(`https://api.github.com/repos/leocunhadev/portfolio_leocunhadev/issues/${slug}`);

                setPost({
                    title: issue.title,
                    publishedAt: new Date(issue.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }),
                    readingTime: Math.ceil((issue.body?.length || 0) / 1000) + ' min de leitura',
                    views: issue.reactions?.total_count || 0, // Usa reações como contador de "likes"
                    author: {
                        name: issue.user.login,
                        avatar: issue.user.avatar_url,
                        role: 'Autor'
                    },
                    content: issue.body,
                    html_url: issue.html_url
                });
            } catch (error) {
                console.error('Erro ao buscar post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="py-20 text-center animate-pulse">
                <p className="text-gray-500 dark:text-gray-400">Carregando o artigo diretamente do GitHub...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="py-20 text-center text-red-500">
                <p>Post não encontrado ou erro ao carregar.</p>
            </div>
        );
    }

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
                            <Heart size={14} />
                            {post.views} reações
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16 break-words">
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </div>

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
                        href={post.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-500 hover:underline inline-flex items-center gap-1"
                    >
                        Ver issue no GitHub <Share2 size={14} />
                    </a>
                </div>
            </footer>
        </article>
    );
};

export default BlogPost;

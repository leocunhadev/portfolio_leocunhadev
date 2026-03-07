import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiMagnifyingGlass, HiHeart } from 'react-icons/hi2';
import { fetchWithCache } from '../utils/githubApi';

const Blog = () => {
    const [searchValue, setSearchValue] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observerTarget = useRef(null);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!hasMore) return;

            try {
                if (page === 1) setLoading(true);
                else setLoadingMore(true);

                const data = await fetchWithCache(`https://api.github.com/repos/leocunhadev/portfolio_leocunhadev/issues?labels=published&per_page=10&page=${page}`);

                if (data.length === 0) {
                    setHasMore(false);
                } else {
                    const formattedPosts = data.map(issue => ({
                        id: String(issue.number),
                        title: issue.title,
                        summary: issue.body ? issue.body.substring(0, 150) + '...' : 'Sem resumo disponível.',
                        slug: String(issue.number),
                        date: new Date(issue.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }),
                        views: issue.reactions?.total_count || 0
                    }));

                    setPosts(prev => {
                        const newPosts = formattedPosts.filter(np => !prev.some(p => p.id === np.id));
                        return [...prev, ...newPosts];
                    });

                    if (data.length < 10) setHasMore(false);
                }
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            } finally {
                setLoading(false);
                setLoadingMore(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchPosts();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [page, hasMore]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !loading && !loadingMore && !searchValue) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [hasMore, loading, loadingMore, searchValue]);

    const gradients = [
        'from-[#D8B4FE] to-[#818CF8]',
        'from-[#FDE68A] to-[#FCA5A5]',
        'from-[#6EE7B7] to-[#3B82F6]'
    ];

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <main className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                <HiMagnifyingGlass className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            <div className={filteredPosts.length > 0 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-10"}>
                {loading && page === 1 ? (
                    <p className="text-gray-500 col-span-full">Carregando posts do GitHub...</p>
                ) : filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => {
                        const gradient = gradients[index % gradients.length];
                        return (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className={`group relative p-1 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br ${gradient}`}
                            >
                                <div className="bg-background dark:bg-foreground p-6 rounded-[14px] h-full flex flex-col justify-between items-start border border-gray-200 dark:border-gray-800">
                                    <h2 className="text-lg font-bold leading-snug mb-4 group-hover:underline text-foreground dark:text-background">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                                        {post.summary}
                                    </p>
                                    <div className="flex items-center justify-between w-full mt-auto">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">
                                            {post.date}
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-semibold">
                                            <HiHeart size={14} />
                                            {post.views}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 py-10 col-span-full">Nenhum artigo encontrado.</p>
                )}
            </div>

            {!searchValue && (
                <div ref={observerTarget} className="py-4 mt-6 text-center">
                    {loadingMore && <p className="text-gray-500">Carregando mais artigos...</p>}
                    {!hasMore && posts.length > 0 && <p className="text-gray-400">Todos os artigos foram carregados.</p>}
                </div>
            )}
        </main>
    );
};

export default Blog;

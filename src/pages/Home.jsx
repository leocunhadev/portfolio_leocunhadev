import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Learning from '../components/Learning';
import Newsletter from '../components/Newsletter';
import { fetchWithCache } from '../utils/githubApi';

const Home = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const gradients = [
        'from-[#D8B4FE] to-[#818CF8]',
        'from-[#FDE68A] to-[#FCA5A5]',
        'from-[#6EE7B7] to-[#3B82F6]'
    ];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await fetchWithCache('https://api.github.com/repos/leocunhadev/portfolio_leocunhadev/issues?labels=published');

                const recentPosts = data.slice(0, 3).map((issue, index) => ({
                    id: String(issue.number),
                    title: issue.title,
                    views: issue.reactions?.total_count || 0, // Usa reações como contador de "views/likes"
                    gradient: gradients[index % gradients.length]
                }));

                setFeaturedPosts(recentPosts);
            } catch (error) {
                console.error('Erro ao buscar posts:', error);

                // Fallback em caso de falha
                setFeaturedPosts([
                    {
                        id: 'fallback',
                        title: 'Erro ao carregar os posts',
                        views: 'N/A',
                        gradient: gradients[0]
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const courseVideos = [
        { id: '01', title: 'Introdução ao React 2025', duration: '1:02:45' },
        { id: '02', title: 'Firestore, Chakra UI, Absolute Imports', duration: '54:22' },
        { id: '03', title: 'Projetando e construindo o painel', duration: '1:08:30' },
        { id: '04', title: 'Firebase Admin com Next.js + SWR', duration: '1:13:45' }
    ];

    return (
        <main>
            <Hero />
            {loading ? (
                <div className="py-20 text-center animate-pulse">
                    <p className="text-gray-500 dark:text-gray-400">Carregando postagens em destaque...</p>
                </div>
            ) : (
                <FeaturedPosts featuredPosts={featuredPosts} />
            )}
            {/* <Learning courseVideos={courseVideos} /> */}
            <Newsletter />
        </main>
    );
};

export default Home;

import React from 'react';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Learning from '../components/Learning';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const featuredPosts = [
        {
            title: 'Tudo que eu sei sobre guias de estilo, sistemas de design e bibliotecas de componentes',
            views: '92.643',
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
        <main>
            <Hero />
            <FeaturedPosts featuredPosts={featuredPosts} />
            <Learning courseVideos={courseVideos} />
            <Newsletter />
        </main>
    );
};

export default Home;

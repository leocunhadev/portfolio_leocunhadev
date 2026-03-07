import React from 'react';
import { HiArrowRight, HiHeart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const FeaturedPosts = ({ featuredPosts }) => {
    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-foreground dark:text-background">Postagens em destaque</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                    <Link
                        key={index}
                        to={post.id === 'fallback' ? '#' : `/blog/${post.id}`}
                        className={`group relative p-1 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br ${post.gradient}`}
                    >
                        <div className="bg-background dark:bg-foreground p-6 rounded-[14px] h-full flex flex-col justify-between items-start border border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-bold leading-snug mb-6 group-hover:underline text-foreground dark:text-background">{post.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto uppercase tracking-wide font-semibold">
                                <HiHeart size={14} />
                                {post.views}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 mt-10 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                Leia todas as postagens <HiArrowRight size={18} />
            </Link>
        </section>
    );
};

export default FeaturedPosts;

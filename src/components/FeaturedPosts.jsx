import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedPosts = ({ featuredPosts }) => {
    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-foreground dark:text-background">Postagens em destaque</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`group relative p-1 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br ${post.gradient}`}
                    >
                        <div className="bg-background dark:bg-foreground p-6 rounded-[14px] flex flex-col justify-between items-start border border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-bold leading-snug mb-6 group-hover:underline text-foreground dark:text-background">{post.title}</h3>
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
    );
};

export default FeaturedPosts;

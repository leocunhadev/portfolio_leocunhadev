import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { fetchWithCache } from '../utils/githubApi';

const Hero = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReadme = async () => {
            try {
                const data = await fetchWithCache('https://api.github.com/repos/leocunhadev/leocunhadev/readme');

                // Decodifica Base64 garantindo suporte a UTF-8 (corrige acentuação)
                const binaryString = atob(data.content.replace(/\n/g, ''));
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                const decodedContent = new TextDecoder('utf-8').decode(bytes);

                setContent(decodedContent);
            } catch (error) {
                console.error('Erro ao buscar README:', error);
                setContent('Lider de desenvolvimento na agência Dolivs\n\nCTO na agência de lançamento Kame');
            } finally {
                setLoading(false);
            }
        };

        fetchReadme();
    }, []);

    return (
        <section className="mb-12 sm:mb-20">
            <div className="flex flex-col sm:flex-row-reverse justify-between items-start gap-6 sm:gap-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 ring-4 ring-gray-100 dark:ring-gray-800">
                    <img
                        src="https://github.com/leocunhadev.png"
                        alt="Léo Cunha"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    {loading ? (
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
                        </div>
                    ) : (
                        <div className="prose dark:prose-invert max-w-none
                            prose-p:text-base sm:prose-p:text-lg
                            prose-p:text-gray-600 dark:prose-p:text-gray-400
                            prose-p:leading-relaxed prose-p:my-2
                            prose-strong:text-foreground dark:prose-strong:text-background
                            prose-img:inline">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    h1: () => null
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { HiPlay, HiArrowRight } from 'react-icons/hi2';

const Learning = ({ courseVideos }) => {
    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-background">Aprenda React e Next.js</h2>
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
                                <HiPlay size={12} className="text-gray-500 dark:text-gray-400 group-hover:text-white fill-current ml-0.5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 mt-10 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                Assistir todos os vídeos <HiArrowRight size={18} />
            </a>
        </section>
    );
};

export default Learning;

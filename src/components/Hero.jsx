import React from 'react';

const Hero = () => {
    return (
        <section className="mb-20">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-8">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold tracking-tight mb-4 text-foreground dark:text-background">Léo Cunha</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Lider de desenvolvimento na agência <span className="font-semibold text-foreground dark:text-background">Dolivs</span>
                        <br />
                        CTO na agência de lançamento <span className="font-semibold text-foreground dark:text-background">Kame</span>
                    </p>
                </div>
                <div className="w-1/4 h-1/4 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 ring-4 ring-gray-100 dark:ring-gray-800">
                    <img
                        src="https://github.com/leocunhadev.png"
                        alt="Léo Cunha"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';

const Newsletter = () => {
    return (
        <section className="mb-20">
            <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-10">
                <h3 className="text-2xl font-bold mb-3 text-foreground dark:text-background">Assine o boletim informativo</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Receba e-mails meus sobre desenvolvimento da web, tecnologia e acesso antecipado a novos artigos.
                </p>
                <form
                    action="https://dolivs.us9.list-manage.com/subscribe/post?u=df06bd3efa3309dd70c26d2eb&id=db9e0aa5ff&f_id=00c654e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="flex flex-col sm:flex-row gap-4 validate"
                    target="_blank"
                >
                    <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="tim@apple.com"
                        className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-3 text-base focus:outline-none focus:ring-2 ring-blue-500/20"
                        required
                        defaultValue=""
                    />

                    <input type="hidden" name="tags" value="12753360" />

                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_df06bd3efa3309dd70c26d2eb_db9e0aa5ff" tabIndex="-1" defaultValue="" />
                    </div>

                    <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold px-8 py-3 rounded-lg text-base hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors uppercase tracking-wide cursor-pointer flex-shrink-0"
                    >
                        Se inscrever
                    </button>
                </form>
                {/* <p className="text-sm text-gray-500 mt-5 font-medium">
                    5.851 assinantes - 32 edições
                </p> */}
            </div>
        </section>
    );
};

export default Newsletter;

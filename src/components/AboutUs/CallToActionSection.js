const CallToActionSection = () => {
    return (
        <section>
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[#2D7A46] dark:bg-[#1B4332] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Join Our Journey to
                        <span className="text-[#2D7A46] dark:text-[#1B4332]">
                            {' '}
                            Fresh Innovation
                        </span>
                    </h2>
                    <p className="text-xl mb-12 max-w-3xl mx-auto">
                        Experience the future of grocery shopping with
                        FreshMart. Quality products, innovative technology, and
                        sustainable practices - all in one place.
                    </p>
                    <button className="bg-[#2D7A46] dark:bg-[#1B4332] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;

const HeroSection = () => {
    return (
        <section>
            <div className="relative h-[50vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D7A46]/90 to-[#F4A261]/90"></div>
                <img
                    src="/api/placeholder/1920/1080"
                    alt="Contact Us"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                Let's Stay
                                <span className="block text-[#FFC300] dark:text-[#F4D03F]">
                                    Connected
                                </span>
                            </h1>
                            <p className="text-xl text-white/90">
                                We're here to help! Reach out to us through any
                                of our contact channels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

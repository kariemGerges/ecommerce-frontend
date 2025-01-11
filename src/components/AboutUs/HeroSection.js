import image from '../../assets/aboutus2.webp';
const HeroSection = () => {

    return (
        <section>
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D7A46]/90 to-[#F4A261]/90"></div>
                <img
                src={image}
                alt="Our story"
                className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Our Story of
                        <span className="block text-[#FFC300] dark:text-[#F4D03F]">
                        Fresh Innovation
                        </span>
                    </h1>
                    <p className="text-xl text-white/90">
                        Revolutionizing grocery shopping with technology while staying true to traditional values of quality and service.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;
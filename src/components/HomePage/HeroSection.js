import image from '../../assets/vegetables_opengraph.jpg';
import { ChevronRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroSection = () => {
    return (
        <section>
            <div className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D7A46]/90 to-[#F4A261]/90 mix-blend-multiply"></div>
                    <LazyLoadImage
                        src={image}
                        alt="Fresh produce"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="max-w-3xl space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            Experience the
                            <span className="block text-[#FFC300] dark:text-[#F4D03F]">
                                Best Egyptian and Arabic grocery
                            </span>
                            Shopping
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Farm-fresh products, ready for pickup with the
                            convenience of modern technology.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-white text-[#2D7A46] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center space-x-2">
                                <span>Shop Now</span>
                                <ChevronRight size={20} />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

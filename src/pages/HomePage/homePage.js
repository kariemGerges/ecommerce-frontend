// HomePage Component
import HeroSection from '../../components/HomePage/HeroSection';
import FeaturesSection from '../../components/HomePage/FeaturesSection';
import ShowCaseCateSection from '../../components/HomePage/ShowCaseCateSection';
import TestimonialsSection from '../../components/HomePage/TestimonialCards';
// Lucide Icons
import { ShoppingCart } from 'lucide-react';

const HomePage = () => {
    return (
        <div>
            {/* Floating Cart Button */}
            <button className="fixed bottom-8 right-8 z-50 bg-[#2D7A46] dark:bg-[#1B4332] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                <ShoppingCart size={24} />
            </button>
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Contact Section */}
            <ShowCaseCateSection />

            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    );
};

export default HomePage;

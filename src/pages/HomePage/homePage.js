// HomePage Component
import HeroSection from '../../components/HomePage/HeroSection';
import FeaturesSection from '../../components/HomePage/FeaturesSection';
import ShowCaseCateSection from '../../components/HomePage/ShowCaseCateSection';
import TestimonialsSection from '../../components/HomePage/TestimonialCards';

const HomePage = () => {
    return (
        <div>
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

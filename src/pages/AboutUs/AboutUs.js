// import components
import HeroSection from '../../components/AboutUs/HeroSection';
import MissionSection from '../../components/AboutUs/MissionSection';
import StatsSection from '../../components/AboutUs/StatsSection';
import OurValueSection from '../../components/AboutUs/OurValueSection';
import TeamSection from '../../components/AboutUs/TeamSection';
import CallToActionSection from '../../components/AboutUs/CallToActionSection';

const AboutUs = () => {
    return (
        <div className={`min-h-screen`}>
            {/* Hero Section */}
            <HeroSection />
            {/* Mission Statement */}
            <MissionSection />
            {/* Stats Section */}
            <StatsSection />
            {/* Our Values */}
            <OurValueSection />
            {/* Team Section */}
            <TeamSection />
            {/* Call to Action */}
            <CallToActionSection />
        </div>
    );
};

export default AboutUs;

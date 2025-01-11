import HeroSection from '../../components/ContactUs/HeroSection';
import ContactMethodsCardsSection from '../../components/ContactUs/ContactMethodsCardsSection';
import ContactInformationSection from '../../components/ContactUs/ContactInformationSection';

const ContactUsPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />
            {/* Contact Methods */}
            <ContactMethodsCardsSection />
            {/* Main Content */}
            <ContactInformationSection />
        </div>
    );
};

export default ContactUsPage;

import React, { useContext } from 'react';
import {
    Heart,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    UserRoundPen,
    Salad,
    House,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
// import logo from '../../assets/AIDonation.jpeg'

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer
            className={`bottom-0 w-full  
                ${
                    theme === 'dark'
                        ? 'bg-[#121212] text-white'
                        : 'bg-white text-black'
                }
                pb-5 pt-5
                `}
            // style={{
            //     background: `url(${logo})`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     backgroundAttachment: 'fixed',
            // }}
        >
            <div className="py-5 pb-5"></div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex-shrink-0 font-bold text-3xl">
                            <span className="text-[#2D7A46] dark:text-[#1B4332]">
                                Fresh
                            </span>
                            <span className="text-[#F4A261] dark:text-[#A75D5D]">
                                Mart
                            </span>
                        </div>
                        <p className="text-sm">
                            Enjoy authentic Egyptian flavors
                        </p>
                        <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                            <Heart
                                className="text-red-400 animate-pulse"
                                size={20}
                            />
                            <span>Try our delicious products today</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Contact Us</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                                <Mail size={16} />
                                <a
                                    href="mailto:info@donationpal.com"
                                    className="hover:underline"
                                >
                                    info@donationpal.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                                <Phone size={16} />
                                <a
                                    href="tel:+1234567890"
                                    className="hover:underline"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                                <MapPin size={16} />
                                <span>
                                    123 Charity Lane, Giving City, 12345
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Follow Us</h4>
                        <div className="flex space-x-4">
                            <button
                                className="transform transition-transform hover:scale-110"
                                onClick={() =>
                                    (window.location.href =
                                        'https://www.facebook.com')
                                }
                            >
                                <Facebook size={24} />
                            </button>
                            <button
                                className="transform transition-transform hover:scale-110"
                                onClick={() =>
                                    (window.location.href =
                                        'https://www.twitter.com')
                                }
                            >
                                <Twitter size={24} />
                            </button>
                            <button
                                className="transform transition-transform hover:scale-110"
                                onClick={() =>
                                    (window.location.href =
                                        'https://www.instagram.com')
                                }
                            >
                                <Instagram size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Links</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                                <House size={16} />
                                <Link to="/" className="hover:underline">
                                    Home
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                                <Salad size={16} />
                                <Link
                                    to="/AllCampaigns"
                                    className="hover:underline"
                                >
                                    Products
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                                <UserRoundPen size={16} />
                                <Link to="/Profile" className="hover:underline">
                                    Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-900/30 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Donation Pal. All
                        rights reserved.
                    </p>
                    <br />
                    <p className="text-sm">Made with ❤️ by Kariem Gerges.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

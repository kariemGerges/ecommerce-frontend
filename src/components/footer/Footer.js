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
    MessageCircleQuestion,
    ShoppingCart,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navLinks = [
        { name: 'Home', path: '/', icon: <House size={16} /> },
        { name: 'Products', path: '/products', icon: <Salad size={16} /> },
        {
            name: 'About',
            path: '/about',
            icon: <MessageCircleQuestion size={16} />,
        },
        { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
        { name: 'Profile', path: '/profile', icon: <UserRoundPen size={16} /> },
        { name: 'Cart', path: '/cart', icon: <ShoppingCart size={16} /> },
    ];

    const groupedLinks = [];
    for (let i = 0; i < navLinks.length; i += 3) {
        groupedLinks.push(navLinks.slice(i, i + 3));
    }

    return (
        <footer className="bottom-0 w-full pb-5 pt-5">
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
                                    info@freshmart.com
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
                                    123 Charity Lane, westfield, IN 46074
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
                        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-3 space-x-9 gap-4">
                            {groupedLinks.map((group, colIndex) => (
                                <div key={colIndex} className="space-y-2">
                                    {group.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="flex items-center space-x-2 transition-transform hover:translate-x-1"
                                        >
                                            <span>{link.icon}</span>
                                            <span>{link.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-green-900/30 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Fresh Mart. All rights
                        reserved.
                    </p>
                    <br />
                    <p className="text-sm">Made with ❤️ by Kariem Gerges.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

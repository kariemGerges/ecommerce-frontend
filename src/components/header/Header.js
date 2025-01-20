import React, { useContext, useState, useEffect } from 'react';
import {
    TableOfContents,
    User,
    ShoppingCart,
    House,
    Wheat,
    MessageCircleQuestion,
    Headset,
    ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../../components/ThemeToggleButton/ThemeToggleButton';
import { ThemeContext } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useLoginAuth } from '../../context/AuthLoginContext';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const { setIsCartOpen, cartItems } = useCart();
    const { setIsAuthModalOpen } = useAuth();
    const { user } = useLoginAuth();

    console.log(user);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleCartClick = (e) => {
        e.preventDefault();
        setIsCartOpen(true);
        setIsMenuOpen(false);
    };

    const handleAuthClick = (e) => {
        e.preventDefault();
        setIsAuthModalOpen(true);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const mobileNavLinks = [
        { name: 'Home', path: '/', icon: <House /> },
        { name: 'Products', path: '/products', icon: <Wheat /> },
        { name: 'About', path: '/about', icon: <MessageCircleQuestion /> },
        { name: 'Contact', path: '/contact', icon: <Headset /> },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 opacity-90 ${
                scrollPosition > 50
                    ? 'bg-white dark:bg-[#121212] shadow-lg'
                    : 'bg-transparent'
            }`}
            role="banner"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <Link
                        to="/"
                        className="text-2xl font-bold flex-shrink-0"
                        aria-label="FreshMart Home"
                    >
                        <div className="font-bold text-3xl">
                            <span className="text-[#2D7A46] dark:text-[#1B4332]">
                                Fresh
                            </span>
                            <span className="text-[#F4A261] dark:text-[#A75D5D]">
                                Mart
                            </span>
                        </div>
                    </Link>

                    {/* Centered Navigation */}
                    <nav
                        className="hidden md:flex flex-1 justify-center space-x-8"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="hover:text-[#2D7A46] hover:xl:text-[#1B4332]
                                    transition-colors relative group text-lg"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex   items-center space-x-4 flex-shrink-0">
                        <ThemeToggleButton />
                        <button
                            className="md:hidden p-2 rounded-full  hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <TableOfContents size={20} />
                        </button>
                        <div className="hidden md:flex items-center space-x-4">
                            {!user ? (
                                <Link
                                    to="/signin"
                                    onClick={handleAuthClick}
                                    className="flex items-center gap-2"
                                >
                                    <User size={24} />
                                    <span>Sign In</span>
                                    <ChevronDown size={20} />
                                </Link>
                            ) : (
                                <Link
                                    to="/profile"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-2"
                                >
                                    <User size={24} />
                                    <span>Profile</span>
                                    <ChevronDown size={20} />
                                </Link>
                            )}
                            {/* Cart Toggle Button with Badge */}
                            <Link
                                to="/cart"
                                onClick={handleCartClick}
                                className="flex items-center gap-2"
                            >
                                <ShoppingCart size={24} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
                                        {totalItems}
                                    </span>
                                )}
                                <span>Cart</span>
                                <ChevronDown size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <nav
                    className={`md:hidden ${
                        theme === 'light'
                            ? 'bg-gray-50 rounded-3xl'
                            : 'bg-gray-900 rounded-3xl'
                    }`}
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {mobileNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center gap-2">
                                    {link.icon} {link.name}
                                </span>
                            </Link>
                        ))}
                        {!user ? (
                            <Link
                                to="/signin"
                                onClick={handleAuthClick}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <span className="flex items-center gap-2">
                                    <User size={24} /> Sign In
                                </span>
                            </Link>
                        ) : (
                            <Link
                                to="/profile"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <span className="flex items-center gap-2">
                                    <User size={24} /> Profile
                                </span>
                            </Link>
                        )}
                        <Link
                            to="/cart"
                            onClick={handleCartClick}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <span className="flex items-center gap-2">
                                <ShoppingCart size={24} /> Cart
                            </span>
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;

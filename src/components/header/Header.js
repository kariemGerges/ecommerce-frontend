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
    Clock,
    MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../../components/ThemeToggleButton/ThemeToggleButton';
import { ThemeContext } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useLoginAuth } from '../../context/AuthLoginContext';
import Logo from '../Logo/Logo';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const { setIsCartOpen, cartItems } = useCart();
    const { setIsAuthModalOpen } = useAuth();
    const { user } = useLoginAuth();

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

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update theme
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const navLinks = [
        { name: 'Home', path: '/', icon: <House className="w-5 h-5" /> },
        { name: 'Products', path: '/products', icon: <Wheat className="w-5 h-5" /> },
        { name: 'About', path: '/about', icon: <MessageCircleQuestion className="w-5 h-5" /> },
        { name: 'Contact', path: '/contact', icon: <Headset className="w-5 h-5" /> }
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrollPosition > 50
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
                    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
            }`}
            role="banner"
        >
            {/* Top bar with store hours and location */}
            <div className=" bg-emerald-600 dark:bg-emerald-800 text-white py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-xs lg:px-8 flex justify-between ">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> Open: 8AM - 10PM
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> 123 Grocery St, City
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📞 (555) 123-4567</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-center space-x-4" role="navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 
                                        hover:text-emerald-600 dark:hover:text-emerald-400 
                                        transition-colors relative group text-sm font-medium"
                            >
                                {link.icon}
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 
                                            scale-x-0 group-hover:scale-x-100 transition-transform" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-6">
                        <ThemeToggleButton />
                        
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-full  hover:bg-gray-100 dark:hover:bg-gray-800 
                                    transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <TableOfContents className="w-6 h-6 " />
                        </button>

                        {/* Desktop Auth & Cart */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                to={user ? '/profile' : '/signin'}
                                onClick={user ? undefined : handleAuthClick}
                                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 
                                        hover:text-emerald-600 dark:hover:text-emerald-400 
                                        transition-colors relative group text-sm font-medium"
                            >
                                <User className="w-5 h-5" />
                                <span>{user ? user.name : 'Sign In'}</span>
                                <ChevronDown className="w-4 h-4" />
                            </Link>

                            <button
                                onClick={handleCartClick}
                                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 
                                        hover:text-emerald-600 dark:hover:text-emerald-400 
                                        transition-colors relative group text-sm font-medium"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Cart</span>
                                <ChevronDown className="w-4 h-4" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                                                rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav
                    className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
                    role="navigation"
                >
                    <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 
                                        hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                        <hr className="my-2 border-gray-200 dark:border-gray-700" />

                        <Link
                            to={user ? '/profile' : '/signin'}
                            onClick={user ? () => setIsMenuOpen(false) : handleAuthClick}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 
                                    hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <User className="w-5 h-5" />
                            {user ? user.name : 'Sign In'}
                            <ChevronDown className="w-4 h-4" />
                        </Link>

                        <button
                            onClick={handleCartClick}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 
                                    hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Cart ({totalItems})
                            <ChevronDown className="w-4 h-4" />

                        </button>

                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
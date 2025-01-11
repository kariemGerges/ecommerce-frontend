import React, { useContext, useState, useEffect } from 'react';
import { TableOfContents } from 'lucide-react';
import ThemeToggleButton from '../../components/ThemeToggleButton/ThemeToggleButton';
import { ThemeContext } from '../../context/ThemeContext';
import { User, ShoppingCart } from 'lucide-react';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

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
        { name: 'Home', href: '#' },
        { name: 'Products', href: '#/products' },
        { name: 'About', href: '#/about' },
        { name: 'Contact', href: '#/contact' },
    ];

    return (
        <div>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 opacity-90 ${
                    scrollPosition > 50
                        ? 'bg-white dark:bg-[#121212] shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-3xl">
                            <span className="text-[#2D7A46] dark:text-[#1B4332]">
                                Fresh
                            </span>
                            <span className="text-[#F4A261] dark:text-[#A75D5D]">
                                Mart
                            </span>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-[#2D7A46] transition-colors relative group text-lg"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <ThemeToggleButton />
                            <button
                                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <TableOfContents size={20} />
                            </button>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="hidden lg:flex items-center gap-2">
                                <User size={24} />
                                <span>Sign In</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <ShoppingCart size={24} />
                                <span className="hidden lg:inline">Cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div
                        className={`md:hidden ${
                            theme === 'light' ? 'bg-gray-500' : 'bg-gray-900'
                        }`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;

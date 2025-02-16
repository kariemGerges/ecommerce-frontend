import React, { useContext } from 'react';
import { Moon, Sun, Cloud, Star } from 'lucide-react';
import './ThemeToggleButton.css';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            role="switch"
            aria-checked={theme === 'dark'}
            onClick={toggleTheme}
            className={`
                relative inline-flex h-10 w-12
                rounded-full transition-all duration-700
                shadow-lg border-2 border-gray-300
                ${
                    theme === 'dark'
                        ? 'bg-gradient-to-r from-gray-900 to-blue-900'
                        : 'bg-gradient-to-r from-yellow-300 to-orange-500'
                }
                focus:outline-none overflow-hidden
            `}
        >
            {/* Background elements with animations */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700">
                {theme === 'dark' ? (
                    <>
                        <Star className="absolute w-4 h-4 top-1 left-4 text-white animate-pulse opacity-50" />
                        <Star className="absolute w-3 h-3 top-2 right-6 text-white opacity-40" />
                        <Star className="absolute w-2 h-2 bottom-2 left-6 text-white opacity-50 animate-bounce" />
                    </>
                ) : (
                    <>
                        <Cloud className="absolute w-6 h-6 top-2 right-4 text-white opacity-60 animate-fade-in" />
                        <Cloud className="absolute w-4 h-4 bottom-2 left-5 text-white opacity-40 animate-bounce" />
                    </>
                )}
            </div>

            {/* Toggle Circle with Sun/Moon and Flip Animation */}
            <span
                className={`
                    pointer-events-none 
                    absolute top-1 left-1 flex items-center justify-center
                    h-8 w-8 rounded-full shadow-md
                    transition-all duration-700 ease-in-out transform
                    ${
                        theme === 'dark'
                            ? 'translate-x-10 bg-gray-700 rotate-180'
                            : 'translate-x-0 bg-yellow-400 rotate-0'
                    }
                `}
            >
                {theme === 'dark' ? (
                    <Moon className="w-5 h-5 text-white transition-transform duration-700 ease-in-out transform rotate-180" />
                ) : (
                    <Sun className="w-5 h-5 text-yellow-600 transition-transform duration-700 ease-in-out transform rotate-0" />
                )}
            </span>
        </button>
    );
};

export default ThemeToggleButton;

import React, { useContext } from 'react';
import { Moon, Sun, Cloud, Star } from 'lucide-react';
import './ThemeToggleButton.css';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggleButton = () => {
    //   const [theme, setIsDark] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            role="switch"
            aria-checked={theme}
            onClick={toggleTheme}
            className={`
        relative inline-flex h-8 w-14 
        rounded-full transition-all duration-500
        ${theme === 'light' ? 'bg-slate-800' : 'bg-blue-300'}
        focus:outline-none overflow-hidden
        theme-toggle-button
        `}
        >
            {/* Background elements */}
            {theme === 'light' ? (
                // Stars for dark mode
                <>
                    <Star className="absolute w-3 h-3 top-1 right-2 text-white opacity-40" />
                    <Star className="absolute w-2 h-2 top-3 right-4 text-white opacity-30" />
                    <Star className="absolute w-2 h-2 bottom-1 right-3 text-white opacity-50" />
                </>
            ) : (
                // Clouds for light mode
                <>
                    <Cloud className="absolute w-3 h-3 top-1 right-2 text-white opacity-60" />
                    <Cloud className="absolute w-2 h-2 bottom-1 right-3 text-white opacity-40" />
                </>
            )}

            {/* Toggle Circle with Sun/Moon */}
            <span
                className={`
            pointer-events-none 
            absolute top-1 left-1
            h-6 w-6 
            rounded-full 
            transition-all duration-500 ease-in-out
                flex items-center justify-center
            ${
                theme === 'light'
                    ? 'translate-x-6 bg-slate-600'
                    : 'translate-x-0 bg-yellow-300'
            }
            `}
            >
                {theme === 'light' ? (
                    <Moon className="w-4 h-4 text-white" />
                ) : (
                    <Sun className="w-4 h-4 text-yellow-500" />
                )}
            </span>
        </button>
    );
};

export default ThemeToggleButton;

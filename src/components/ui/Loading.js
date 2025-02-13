import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const GroceryLoader = () => {
    const [currentIcon, setCurrentIcon] = useState(0);
    const icons = ['🛒', '🥕', '🎂', '🍎', '🧀', '🥑', '🥐'];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIcon((prev) => (prev + 1) % icons.length);
        }, 800);

        return () => clearInterval(timer);
    }, [icons.length]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-8 flex items-center justify-center">
                    {currentIcon === 0 ||
                    currentIcon === 2 ||
                    currentIcon === 4 ? (
                        <ShoppingCart className="w-8 h-8 text-green-600 animate-bounce" />
                    ) : (
                        <span className="text-3xl animate-bounce">
                            {icons[currentIcon]}
                        </span>
                    )}
                </div>
                <div className="flex gap-2">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${index * 200}ms`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GroceryLoader;

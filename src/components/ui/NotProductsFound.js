import React from 'react';
import { Frown } from 'lucide-react';

const NoProductsFound = () => {
    const funnyMessages = [
        "We should've gone grocery shopping... yesterday!",
        'Looks like our shelves took an unexpected diet!',
        'Our inventory is playing an extreme game of hide and seek.',
        "We're out of stock faster than you can say 'hungry'!",
        'Seems like the groceries pulled a disappearing act!',
    ];

    const randomMessage =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    return (
        <div className="flex items-center justify-center p-6">
            <div className="p-8 rounded-3xl shadow-2xl text-center max-w-md w-full transform transition hover:scale-105 hover:shadow-3xl">
                <Frown
                    className="mx-auto mb-6 text-green-500 animate-bounce"
                    size={64}
                    strokeWidth={2}
                />

                <h2 className="text-3xl font-bold mb-4">
                    Oops! No Products Found
                </h2>

                <p className="text-xl italic mb-6">{randomMessage}</p>

                <button
                    className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
                    onClick={() => window.location.reload()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NoProductsFound;

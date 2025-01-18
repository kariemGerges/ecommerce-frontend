import React from 'react';
import { XCircle } from 'lucide-react';

const GroceryError = ({ message = 'Oops! Something went wrong' }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4 max-w-sm mx-auto p-6 text-center">
                <div className="relative">
                    <XCircle className="w-12 h-12 text-red-500 animate-pulse" />
                    <span className="text-3xl absolute -bottom-4 -right-4">
                        🛒
                    </span>
                </div>

                <h2 className="text-lg font-medium mt-2">
                    {message}
                </h2>

                <p className="text-sm">
                    Please try refreshing the page or come back later
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default GroceryError;

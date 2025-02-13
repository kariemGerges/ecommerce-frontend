import { RefreshCcw } from 'lucide-react';

const RefreshBtn = () => {
    return (
        <button
            className="bg-[#2D7A46] dark:bg-[#1B4332] text-white p-2 
                        rounded-full shadow-lg hover:scale-110
                        hover:bg-[#1B4332] dark:hover:bg-[#2D7A46]
                        transition rotate duration-500
                        "
            onClick={() => window.location.reload()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
            >
                <RefreshCcw />
            </svg>
        </button>
    );
};

export default RefreshBtn;

// this component is for the header and the top header and the navigation bar
import { Menu, Search, ChevronDown } from 'lucide-react';
const HeaderSection = ({ setIsMenuOpen }) => {


    return (
        <header className="border-b pt-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Header */}
                <div className="flex items-center justify-between py-4">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    <img
                        src="/api/placeholder/120/40"
                        alt="Store Logo"
                        className="h-10"
                    />

                    <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search the store"
                                className="w-full pl-10 pr-4 py-2 border rounded-full"
                            />
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex py-4">
                    <ul className="flex gap-8">
                        {[
                            'Grocery',
                            'Fresh Produce',
                            'Pastries',
                            'Frozen Foods',
                            'Meat',
                        ].map((item) => (
                            <li key={item}>
                                <button className="flex items-center gap-1 hover:text-blue-600">
                                    {item}
                                    <ChevronDown size={16} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;

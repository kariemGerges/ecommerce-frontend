import React, { useState } from 'react';
import { X } from 'lucide-react';
// import components
import HeaderSection from '../../components/Products/HeaderSection';
import RightSideProductSection from '../../components/Products/RightSideProductSection';
import LeftSideFilterSection from '../../components/Products/LeftSideFilterSection';
import MobileSideMenuSection from '../../components/Products/MobileSideMenuSection';

const StorePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <HeaderSection setIsMenuOpen={setIsMenuOpen} />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar on the left side*/}
                    <LeftSideFilterSection />

                    {/* Product Grid on the right side*/}
                    <div className="flex-1">
                        {/* Header and product grid */}
                        <RightSideProductSection />
                    </div>
                </div>
            </main>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-64 h-full">
                        <div className="p-4 flex justify-between items-center border-b">
                            <span className="font-semibold">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile menu content */}

                        <MobileSideMenuSection
                            isMenuOpen={isMenuOpen}
                            setIsMenuOpen={setIsMenuOpen}
                            activeSubmenu={activeSubmenu}
                            setActiveSubmenu={setActiveSubmenu}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StorePage;

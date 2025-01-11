import { ChevronRight, MapPin, Search, ShoppingCart, User, X } from 'lucide-react';

const MobileSideMenuSection = ({ isMenuOpen, setIsMenuOpen, activeSubmenu, setActiveSubmenu }) => {

    const mobileMenuItems = [
        {
            id: 'shop',
            label: 'Shop',
            submenu: [
                'Shop All',
                'Grocery',
                'Fresh',
                'Pantry',
                'Beverages',
                'Frozen Foods',
                'Snacks',
            ],
        },
        {
            id: 'deals',
            label: 'Deals',
            submenu: [
                'Weekly Ad',
                'Clearance',
                "Today's Deals",
                'Digital Coupons',
            ],
        },
        {
            id: 'services',
            label: 'Services',
            submenu: ['Pharmacy', 'mPerks Rewards', 'Gift Cards', 'MoneyShop'],
        },
    ];

    return (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        {/* Slide-out menu */}
        <div
            className={`fixed top-0 left-0 h-full w-80 bg-white transform transition-transform duration-300 ${
                isMenuOpen
                    ? 'translate-x-0'
                    : '-translate-x-full'
            }`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <img
                    src="/api/placeholder/100/32"
                    alt="Store Logo"
                    className="h-8"
                />
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Store"
                        className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100"
                    />
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 p-4 border-b">
                <button className="flex items-center gap-2 text-blue-600">
                    <User size={20} />
                    <span>Sign In</span>
                </button>
                <button className="flex items-center gap-2 text-blue-600">
                    <MapPin size={20} />
                    <span>Find Store</span>
                </button>
            </div>

            {/* Main Menu */}
            <div className="overflow-y-auto h-[calc(100%-200px)]">
                {activeSubmenu === null ? (
                    <div className="divide-y">
                        {mobileMenuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() =>
                                    setActiveSubmenu(
                                        item.id
                                    )
                                }
                                className="flex items-center justify-between w-full p-4 hover:bg-gray-50"
                            >
                                <span className="font-medium">
                                    {item.label}
                                </span>
                                <ChevronRight
                                    size={20}
                                    className="text-gray-400"
                                />
                            </button>
                        ))}
                    </div>
                ) : (
                    <div>
                        {/* Submenu Header */}
                        <div className="p-4 border-b bg-gray-50">
                            <button
                                onClick={() =>
                                    setActiveSubmenu(null)
                                }
                                className="font-medium"
                            >
                                ← Back to Menu
                            </button>
                        </div>
                        {/* Submenu Items */}
                        <div className="divide-y">
                            {mobileMenuItems
                                .find(
                                    (item) =>
                                        item.id ===
                                        activeSubmenu
                                )
                                ?.submenu.map((subItem) => (
                                    <button
                                        key={subItem}
                                        className="flex items-center justify-between w-full p-4 hover:bg-gray-50"
                                    >
                                        <span>
                                            {subItem}
                                        </span>
                                        <ChevronRight
                                            size={20}
                                            className="text-gray-400"
                                        />
                                    </button>
                                ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Cart Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
                <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700">
                    <ShoppingCart size={20} />
                    <span>View Cart</span>
                </button>
            </div>
        </div>
    </div>
    );
};

export default MobileSideMenuSection;
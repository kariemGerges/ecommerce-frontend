// This component is used to display the products on the right side of the page and the header filter (Best match, Price: Low to High, Price: High to Low)
import { Heart } from 'lucide-react';
const RightSideProductSection = () => {
    return (
        <section>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">
                    Grocery Items on Sale
                </h1>
                <select className="border rounded px-3 py-2">
                    <option>Best Match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                        <div className="relative mb-4">
                            <img
                                src="/api/placeholder/200/200"
                                alt="Product"
                                className="w-full aspect-square object-contain"
                            />
                            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                                <Heart size={20} />
                            </button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium">Product Name</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-bold text-red-600">
                                    $4.99
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                    $6.49
                                </span>
                            </div>
                            <button className="w-full bg-[#2D7A46] hover:dark:bg-[#1B4332] text-white rounded-full py-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RightSideProductSection;

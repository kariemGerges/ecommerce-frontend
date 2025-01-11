import React, { useState } from 'react';
import { Apple, Carrot, Milk, Fish, Coffee } from 'lucide-react';
import image from '../../assets/vegetables_opengraph.jpg';
const ShowCaseCateSection = () => {
    const categories = [
        { id: 'fruits', icon: Apple, name: 'Fruits' },
        { id: 'vegetables', icon: Carrot, name: 'Vegetables' },
        { id: 'dairy', icon: Milk, name: 'Dairy' },
        { id: 'seafood', icon: Fish, name: 'Seafood' },
        { id: 'beverages', icon: Coffee, name: 'Beverages' },
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0].id);

    return (
        <section>
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        Browse by{' '}
                        <span className="text-[#2D7A46] dark:text-[#1B4332]">
                            Category
                        </span>
                    </h2>
                    <div className="flex space-x-8 mb-12 overflow-x-auto pb-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex flex-col items-center space-y-2 min-w-[100px] p-4 rounded-xl transition-colors ${
                                    activeCategory === category.id
                                        ? 'bg-[#2D7A46] dark:bg-[#1B4332] text-white'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                            >
                                <category.icon size={32} />
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={image}
                                    alt="Product"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 p-6 text-white">
                                        <h4 className="text-xl font-semibold mb-2">
                                            Product Name
                                        </h4>
                                        <p className="mb-4">$4.99/kg</p>
                                        <button className="bg-[#FFC300] dark:bg-[#F4D03F] text-black px-4 py-2 rounded-full text-sm font-semibold">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCaseCateSection;

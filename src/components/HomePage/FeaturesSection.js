// Lucide Icons
import { Truck, Leaf, Star } from 'lucide-react';
const FeaturesSection = () => {
    return (
        <section>
            <div className="py-24 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Truck,
                                title: 'Same Day Pickup',
                                description: 'Order by 2 PM for Pickup today',
                            },
                            {
                                icon: Leaf,
                                title: '100% Organic',
                                description: 'Certified organic products',
                            },
                            {
                                icon: Star,
                                title: 'Best Quality',
                                description: 'Hand-picked premium items',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#2D7A46] dark:bg-[#1B4332] text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-yellow-50">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

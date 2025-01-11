import React, { useState } from 'react';
import { HandHeart, Sprout, ShieldCheck } from 'lucide-react';

const OurValueSection = () => {
    const [activeValue, setActiveValue] = useState(0);


    const values = [
        {
            icon: HandHeart,
            title: 'Community First',
            description:
                'Supporting local farmers and producers while serving our community with the best products.',
        },
        {
            icon: Sprout,
            title: 'Sustainability',
            description:
                'Committed to eco-friendly practices and reducing our environmental footprint.',
        },
        {
            icon: ShieldCheck,
            title: 'Quality Assurance',
            description:
                'Rigorous quality controls to ensure only the finest products reach your table.',
        },
    ];

    return (
        <section>
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Our Core
                            <span className="text-[#2D7A46] dark:text-[#1B4332]">
                                {' '}
                                Values
                            </span>
                        </h2>
                        <p className="text-lg">
                            These principles guide everything we do, from
                            selecting products to serving our customers.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                                    activeValue === index
                                        ? 'bg-[#2D7A46] dark:bg-[#1B4332] text-white'
                                        : 'bg-white dark:bg-gray-800 hover:bg-[#2D7A46]/10 dark:hover:bg-[#1B4332]/20'
                                }`}
                                onMouseEnter={() => setActiveValue(index)}
                            >
                                <div className="w-16 h-16 rounded-full bg-[#FFC300] dark:bg-[#F4D03F] text-black flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {value.title}
                                </h3>
                                <p
                                    className={
                                        activeValue === index
                                            ? 'text-white/90'
                                            : 'text-gray-600 dark:text-white'
                                    }
                                >
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurValueSection;

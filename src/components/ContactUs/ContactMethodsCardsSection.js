import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const ContactMethodsCardsSection = () => {
    const [activeMethod, setActiveMethod] = useState('message');

    const contactMethods = [
        {
            icon: MessageCircle,
            title: 'Send Message',
            value: 'message',
            description: "Write to us and we'll respond within 24 hours",
        },
        {
            icon: Phone,
            title: 'Call Us',
            value: 'call',
            description: 'Speak directly with our customer service team',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            value: 'visit',
            description: 'Come to our store and meet us in person',
        },
    ];

    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {contactMethods.map((method) => (
                        <button
                            key={method.value}
                            onClick={() => setActiveMethod(method.value)}
                            className={`p-8 rounded-2xl transition-all duration-300 ${
                                activeMethod === method.value
                                    ? 'bg-[#2D7A46] dark:bg-[#1B4332] text-white shadow-xl scale-105'
                                    : 'bg-white dark:bg-gray-800 hover:scale-105'
                            }`}
                        >
                            <div className="w-16 h-16 rounded-full bg-[#FFC300] dark:bg-[#F4D03F] text-black flex items-center justify-center mb-6">
                                <method.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">
                                {method.title}
                            </h3>
                            <p
                                className={`${
                                    activeMethod === method.value
                                        ? 'text-white/90'
                                        : 'text-gray-600 dark:text-gray-300'
                                }`}
                            >
                                {method.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactMethodsCardsSection;

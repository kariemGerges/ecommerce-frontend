import { useState } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    ChevronRight,
    Facebook,
    Twitter,
    Instagram,
    Menu,
} from 'lucide-react';

const ContactInformationSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Send Us a Message
                            </h2>
                            <p className="text-lg ">
                                Fill out the form below and we'll get back to
                                you as soon as possible.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D7A46]"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D7A46]"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D7A46]"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D7A46]"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#2D7A46] dark:bg-[#1B4332] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                            <h3 className="text-2xl font-semibold mb-6 text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-[#2D7A46] dark:text-[#1B4332] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-gray-400">
                                            Store Location
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            123 Grocery Street
                                            <br />
                                            San Francisco, CA 94105
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-[#2D7A46] dark:text-[#1B4332] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-gray-400">
                                            Phone Numbers
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Store: (555) 123-4567
                                            <br />
                                            Customer Service: (555) 765-4321
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-[#2D7A46] dark:text-[#1B4332] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-gray-400">
                                            Email Addresses
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Info: info@freshmart.com
                                            <br />
                                            Support: support@freshmart.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-[#2D7A46] dark:text-[#1B4332] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-gray-400">
                                            Business Hours
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Monday - Friday: 8:00 AM - 9:00 PM
                                            <br />
                                            Saturday - Sunday: 9:00 AM - 7:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                            <h3 className="text-2xl font-semibold mb-6 text-white">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                {[Facebook, Twitter, Instagram, Menu].map(
                                    (Icon, index) => (
                                        <button
                                            key={index}
                                            className="w-12 h-12 rounded-full bg-[#2D7A46] dark:bg-[#1B4332] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                                            onClick={() =>
                                                (window.location.href =
                                                    'https://example.com')
                                            }
                                        >
                                            <Icon size={24} />
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {/* FAQ Link */}
                        <div className="bg-[#2D7A46] dark:bg-[#1B4332] p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-semibold mb-4">
                                Have Questions?
                            </h3>
                            <p className="mb-6 text-white/90">
                                Check our frequently asked questions for quick
                                answers to common queries.
                            </p>
                            <button className="bg-white text-[#2D7A46] dark:text-[#1B4332] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2">
                                <span>Visit FAQ</span>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInformationSection;

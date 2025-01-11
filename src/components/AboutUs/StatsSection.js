const StatsSection = () => {
    const stats = [
        { number: '14+', label: 'Years of Excellence' },
        { number: '5K+', label: 'Happy Customers' },
        { number: '50+', label: 'Local Suppliers' },
        { number: '95%', label: 'Satisfaction Rate' },
    ];

    return (
        <section>
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:scale-105 transition-transform"
                            >
                                <div className="text-4xl font-bold text-green-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

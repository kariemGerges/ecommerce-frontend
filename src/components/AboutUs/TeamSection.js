const TeamSection = () => {
    return (
        <section>
            <div className=" py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Meet Our
                            <span className="text-[#2D7A46] dark:text-[#1B4332]">
                                {' '}
                                Leadership
                            </span>
                        </h2>
                        <p className="text-lg">
                            The passionate individuals driving our mission
                            forward.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <div
                                key={member}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <img
                                    src="/api/placeholder/400/500"
                                    alt="Team member"
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 p-6 text-white">
                                        <h4 className="text-xl font-semibold mb-1">
                                            John Doe
                                        </h4>
                                        <p className="text-[#FFC300] dark:text-[#F4D03F] mb-4">
                                            CEO & Founder
                                        </p>
                                        <p className="text-white/80">
                                            15+ years of experience in retail
                                            innovation and sustainable business
                                            practices.
                                        </p>
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

export default TeamSection;

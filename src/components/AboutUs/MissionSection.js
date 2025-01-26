import { Building2 } from 'lucide-react';
import image2 from '../../assets/aboutus3.webp';

const MissionSection = () => {
    return (
        <section>
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block">
                                <span className="bg-[#2D7A46]/10 dark:bg-slate-300 text-[#2D7A46] dark:bg-[#1B4332]/20 dark:text-[#408d6d] px-4 py-2 rounded-full text-sm font-semibold">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">
                                Bringing Fresh Food
                                <span className="block text-[#2D7A46] dark:text-[#1B4332]">
                                    To Every Home
                                </span>
                            </h2>
                            <p className="text-lg">
                                Founded in 2014, FreshMart began with a simple
                                mission: to make quality groceries accessible to
                                everyone. Today, we're leading the digital
                                transformation of grocery shopping while
                                maintaining the personal touch that makes us
                                special.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src={image2}
                                alt="Our mission"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-[#FFC300] dark:bg-[#F4D03F] p-6 rounded-xl shadow-xl">
                                <Building2 size={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;

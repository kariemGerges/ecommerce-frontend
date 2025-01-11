import { Star } from 'lucide-react';

const TestimonialCard = ({ name, review }) => (
    <div className=" p-4 rounded-lg border border-yellow-300  w-64 flex-shrink-0 mx-3 my-2">
        <p className=" mb-2 text-sm h-20 overflow-hidden">{review}</p>
        <p className="font-semibold text-sm">{name}</p>
        <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
            ))}
        </div>
    </div>
);

const TestimonialsRow = ({ testimonials, direction }) => (
    <div className="flex mb-4 overflow-hidden">
        <div className={`flex animate-scroll-${direction}`}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    </div>
);

const TestimonialsSection = () => {
    const allTestimonials = [
        {
            name: 'Ahmed S.',
            review: 'The produce is always fresh, and I love the variety of Arabic spices available. Highly recommended!',
            rating: 5,
        },
        {
            name: 'Fatima A.',
            review: 'Excellent service and very convenient pickup options. The quality of the dairy products is amazing!',
            rating: 4,
        },
        {
            name: 'Omar K.',
            review: 'Great selection of authentic Egyptian groceries. The prices are reasonable, and the staff is friendly.',
            rating: 5,
        },
        {
            name: 'Layla M.',
            review: 'I found everything I needed for my favorite traditional dishes. The bread is incredibly fresh!',
            rating: 5,
        },
        {
            name: 'Hassan T.',
            review: 'The pickup process was quick and easy, but I wish there were more organic options.',
            rating: 4,
        },
        {
            name: 'Yasmin H.',
            review: 'Wonderful experience! The meat section is top-notch, and I love their homemade desserts.',
            rating: 5,
        },
        {
            name: 'Khaled R.',
            review: 'The staff is always helpful, and the store is clean and organized. Pickup was a breeze!',
            rating: 5,
        },
        {
            name: 'Aisha B.',
            review: 'Great variety of halal products. I can always count on them for fresh herbs and spices.',
            rating: 5,
        },
        {
            name: 'Mohamed E.',
            review: 'I appreciate the quick service and the excellent quality of their fruits and vegetables.',
            rating: 4,
        },
        {
            name: 'Nadia J.',
            review: 'Their pickup service saved me so much time. The prices are also very competitive!',
            rating: 5,
        },
        {
            name: 'Samir Z.',
            review: 'The seafood section was impressive, and I loved the packaging for my pickup order.',
            rating: 5,
        },
        {
            name: 'Salma L.',
            review: 'Great store for authentic Arabic products. The pickup process was seamless and fast.',
            rating: 5,
        },
        {
            name: 'Zain M.',
            review: 'Fresh produce and friendly staff. I’m happy to have found such a reliable grocery store.',
            rating: 4,
        },
        {
            name: 'Heba F.',
            review: 'They always have everything I need for my family meals. Pickup was super convenient.',
            rating: 5,
        },
        {
            name: 'Tariq D.',
            review: 'Quick and efficient service. The bakery section has the best pita bread in town!',
            rating: 5,
        },
    ];

    // Shuffle and split testimonials into three groups
    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    const testimonialGroups = [
        shuffled.slice(0, 5),
        shuffled.slice(5, 10),
        shuffled.slice(10, 15),
    ];

    return (
        <section
            className="py-16 px-4 overflow-hidden"
            //   style={{
            //     background: `url(${logo})`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     backgroundAttachment: 'fixed',
            // }}
        >
            <style jsx global>
                {`
                    @keyframes scrollLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollRight {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    .animate-scroll-left {
                        animation: scrollLeft 40s linear infinite;
                    }
                    .animate-scroll-right {
                        animation: scrollRight 40s linear infinite;
                    }
                `}
            </style>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    What our customers Say
                </h2>
                <TestimonialsRow
                    testimonials={testimonialGroups[0]}
                    direction="left"
                />
                <TestimonialsRow
                    testimonials={testimonialGroups[1]}
                    direction="right"
                />
                <TestimonialsRow
                    testimonials={testimonialGroups[2]}
                    direction="left"
                />
            </div>
        </section>
    );
};

export default TestimonialsSection;

// import React, { useState } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { Apple, Carrot, Milk, Fish, Coffee } from 'lucide-react';
// import image from '../../assets/vegetables_opengraph.jpg';
// const ShowCaseCateSection = () => {
//     const categories = [
//         { id: 'fruits', icon: Apple, name: 'Fruits' },
//         { id: 'vegetables', icon: Carrot, name: 'Vegetables' },
//         { id: 'dairy', icon: Milk, name: 'Dairy' },
//         { id: 'seafood', icon: Fish, name: 'Seafood' },
//         { id: 'beverages', icon: Coffee, name: 'Beverages' },
//     ];

//     const [activeCategory, setActiveCategory] = useState(categories[0].id);

//     return (
//         <section>
//             <div className="py-24">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <h2 className="text-4xl font-bold mb-16 text-center">
//                         Browse by{' '}
//                         <span className="text-[#2D7A46] dark:text-[#1B4332]">
//                             Category
//                         </span>
//                     </h2>
//                     <div className="flex space-x-8 mb-12 overflow-x-auto pb-4">
//                         {categories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => setActiveCategory(category.id)}
//                                 className={`flex flex-col items-center space-y-2 min-w-[100px] p-4 rounded-xl transition-colors ${
//                                     activeCategory === category.id
//                                         ? 'bg-[#2D7A46] dark:bg-[#1B4332] text-white'
//                                         : 'hover:bg-gray-100 dark:hover:bg-gray-800'
//                                 }`}
//                             >
//                                 <category.icon size={32} />
//                                 <span>{category.name}</span>
//                             </button>
//                         ))}
//                     </div>
//                     <div className="grid md:grid-cols-4 gap-8">
//                         {[1, 2, 3, 4].map((item) => (
//                             <div
//                                 key={item}
//                                 className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//                             >
//                                 <LazyLoadImage
//                                     src={image}
//                                     alt="Product"
//                                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//                                     <div className="absolute bottom-0 p-6 text-white">
//                                         <h4 className="text-xl font-semibold mb-2">
//                                             Product Name
//                                         </h4>
//                                         <p className="mb-4">$4.99/kg</p>
//                                         <button className="bg-[#FFC300] dark:bg-[#F4D03F] text-black px-4 py-2 rounded-full text-sm font-semibold">
//                                             Add to Cart
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ShowCaseCateSection;
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    Apple,
    Carrot,
    Milk,
    Fish,
    Coffee,
    ChevronLeft,
    ChevronRight,
    Heart,
    ShoppingCart,
    Star,
} from 'lucide-react';

const ShowcaseCarousel = () => {
    const categories = useMemo(() => [
        {
            id: 'fruits',
            icon: Apple,
            name: 'Fruits',
            color: 'from-orange-400 to-red-500',
            products: [
                {
                    name: 'Fresh Apples',
                    price: '4.99',
                    unit: 'kg',
                    rating: 4.5,
                    reviews: 128,
                },
                {
                    name: 'Organic Bananas',
                    price: '3.99',
                    unit: 'kg',
                    rating: 4.8,
                    reviews: 89,
                },
                {
                    name: 'Sweet Oranges',
                    price: '5.99',
                    unit: 'kg',
                    rating: 4.3,
                    reviews: 156,
                },
            ],
        },
        {
            id: 'vegetables',
            icon: Carrot,
            name: 'Vegetables',
            color: 'from-green-400 to-emerald-600',
            products: [
                {
                    name: 'Organic Carrots',
                    price: '3.99',
                    unit: 'kg',
                    rating: 4.6,
                    reviews: 112,
                },
                {
                    name: 'Fresh Broccoli',
                    price: '2.99',
                    unit: 'kg',
                    rating: 4.4,
                    reviews: 95,
                },
                {
                    name: 'Red Tomatoes',
                    price: '4.49',
                    unit: 'kg',
                    rating: 4.7,
                    reviews: 143,
                },
            ],
        },
        {
            id: 'dairy',
            icon: Milk,
            name: 'Dairy',
            color: 'from-blue-400 to-cyan-600',
            products: [
                {
                    name: 'Fresh Milk',
                    price: '2.99',
                    unit: 'L',
                    rating: 4.9,
                    reviews: 234,
                },
                {
                    name: 'Greek Yogurt',
                    price: '3.49',
                    unit: 'kg',
                    rating: 4.7,
                    reviews: 167,
                },
                {
                    name: 'Cheddar Cheese',
                    price: '6.99',
                    unit: 'kg',
                    rating: 4.8,
                    reviews: 189,
                },
            ],
        },
        {
            id: 'seafood',
            icon: Fish,
            name: 'Seafood',
            color: 'from-teal-400 to-blue-600',
            products: [
                {
                    name: 'Atlantic Salmon',
                    price: '15.99',
                    unit: 'kg',
                    rating: 4.7,
                    reviews: 145,
                },
                {
                    name: 'Fresh Tuna',
                    price: '19.99',
                    unit: 'kg',
                    rating: 4.6,
                    reviews: 98,
                },
                {
                    name: 'Tiger Prawns',
                    price: '24.99',
                    unit: 'kg',
                    rating: 4.8,
                    reviews: 167,
                },
            ],
        },
        {
            id: 'beverages',
            icon: Coffee,
            name: 'Beverages',
            color: 'from-amber-400 to-orange-600',
            products: [
                {
                    name: 'Organic Coffee',
                    price: '12.99',
                    unit: 'kg',
                    rating: 4.9,
                    reviews: 256,
                },
                {
                    name: 'Green Tea',
                    price: '8.99',
                    unit: 'kg',
                    rating: 4.5,
                    reviews: 134,
                },
                {
                    name: 'Fresh Juice',
                    price: '4.99',
                    unit: 'L',
                    rating: 4.7,
                    reviews: 178,
                },
            ],
        },
    ], []);

    const [activeCategory, setActiveCategory] = useState(0);
    const [activeProduct, setActiveProduct] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [direction, setDirection] = useState('right');
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setDirection('right');
        setIsAnimating(true);
        setActiveProduct((prev) => {
            if (prev === categories[activeCategory].products.length - 1) {
                setActiveCategory(
                    (prevCat) => (prevCat + 1) % categories.length
                );
                return 0;
            }
            return prev + 1;
        });
    }, [isAnimating, activeCategory, categories]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setDirection('left');
        setIsAnimating(true);
        setActiveProduct((prev) => {
            if (prev === 0) {
                const newCategory =
                    (activeCategory - 1 + categories.length) %
                    categories.length;
                setActiveCategory(newCategory);
                return categories[newCategory].products.length - 1;
            }
            return prev - 1;
        });
    }, [isAnimating, activeCategory, categories]);

    // Autoplay
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    // Reset animation state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [activeProduct, activeCategory]);

    const currentProduct = categories[activeCategory].products[activeProduct];
    const currentCategory = categories[activeCategory];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-16 text-center">
                    Browse by{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">
                        Category
                    </span>
                </h2>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Category Indicators */}
                    <div className="flex justify-center mb-12 gap-4">
                        {categories.map((category, index) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setDirection(
                                        index > activeCategory
                                            ? 'right'
                                            : 'left'
                                    );
                                    setActiveCategory(index);
                                    setActiveProduct(0);
                                }}
                                className={`group flex flex-col items-center transition-all duration-300 ${
                                    index === activeCategory
                                        ? 'scale-110'
                                        : 'opacity-70 hover:opacity-100'
                                }`}
                            >
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${
                                        category.color
                                    } text-white mb-2 transition-transform duration-300 ${
                                        index === activeCategory
                                            ? 'scale-110 shadow-lg'
                                            : 'hover:scale-105'
                                    }`}
                                >
                                    <category.icon size={28} />
                                </div>
                                <span className="text-sm font-medium">
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Product Carousel */}
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <div className="aspect-w-16 aspect-h-9 p-8">
                            <div
                                className={`transition-transform duration-500 ${
                                    isAnimating
                                        ? direction === 'right'
                                            ? '-translate-x-full'
                                            : 'translate-x-full'
                                        : 'translate-x-0'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="space-y-4 max-w-lg">
                                        <h3 className="text-3xl font-bold">
                                            {currentProduct.name}
                                        </h3>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        className={
                                                            i <
                                                            Math.floor(
                                                                currentProduct.rating
                                                            )
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'text-gray-300'
                                                        }
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                ({currentProduct.reviews}{' '}
                                                reviews)
                                            </span>
                                        </div>
                                        <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                                            ${currentProduct.price}/
                                            {currentProduct.unit}
                                        </p>
                                        <div className="flex space-x-4 pt-4">
                                            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors flex items-center space-x-2">
                                                <ShoppingCart size={20} />
                                                <span>Add to Cart</span>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setIsLiked(!isLiked)
                                                }
                                                className={`p-3 rounded-full transition-colors ${
                                                    isLiked
                                                        ? 'bg-red-100 text-red-500'
                                                        : 'bg-gray-100 text-gray-500'
                                                } hover:bg-red-100 hover:text-red-500`}
                                            >
                                                <Heart
                                                    className={
                                                        isLiked
                                                            ? 'fill-current'
                                                            : ''
                                                    }
                                                    size={20}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className={`w-64 h-64 rounded-full bg-gradient-to-r ${currentCategory.color} opacity-20 animate-pulse`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Product Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {categories[activeCategory].products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(
                                        index > activeProduct ? 'right' : 'left'
                                    );
                                    setActiveProduct(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === activeProduct
                                        ? 'w-8 bg-emerald-600'
                                        : 'bg-gray-300 hover:bg-emerald-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseCarousel;
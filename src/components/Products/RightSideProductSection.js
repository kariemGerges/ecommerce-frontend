// This component is used to display the products on the right side of the page and the header filter (Best match, Price: Low to High, Price: High to Low)
import { Heart } from 'lucide-react';
// import hooks
import { useFilteredProducts } from '../../hooks/products/useFilteredProducts';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

// import components
import Loading from '../ui/Loading';
import Error from '../Error/Error';
import Pagination from '../Products/Pagination';
import image from '../../assets/vegetables_opengraph.jpg';
import NoProductsFound from '../ui/NotProductsFound';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import RefreshBtn from '../ui/RefreshBtn';

const RightSideProductSection = ({ filters }) => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useFilteredProducts(
        filters,
        page,
        12
    );

    const { addToCart } = useCart();

    const [isVisible, setIsVisible] = useState(false);

    const addToCartBannerHandler = () => {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 3000);
    };

    if (isLoading)
        return (
            <p>
                <Loading /> Loading page {page}...
            </p>
        );
    if (isError)
        return (
            <p className="flex flex-col items-center justify-center">
                <Error />{' '}
                {/* {error.message === 'Network Error' ? 'Network Error' : '404'} */}
                {error.name}
                {error.message}
                {error.stack}
            </p>
        );

    const {
        products,
        totalProducts,
        currentPage,
        totalPages,
        hasNextPage,
        hasPreviousPage,
    } = data;

    if (!products.length)
        return (
            <div className="flex flex-col items-center justify-center">
                <NoProductsFound />
            </div>
        );
    
    //  <div className="flex justify-between items-center mb-6">
    //      <RefreshBtn />
    //  </div>;

    return (
        <section>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">
                    Grocery Items on Sale <RefreshBtn />
                </h1>
                <select className="border rounded px-3 py-2">
                    <option>Best Match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 gap-4">
                {products &&
                    products.map((product, i) => (
                        <div
                            key={i}
                            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="relative mb-4">
                                <LazyLoadImage
                                    src={image}
                                    alt="Product"
                                    className="w-full aspect-square object-contain"
                                />
                                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                                    <Heart size={20} />
                                </button>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium">{product.name}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-bold text-red-600">
                                        ${product.price}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        addToCart(product);
                                        addToCartBannerHandler();
                                    }}
                                    className="w-full bg-[#2D7A46] hover:dark:bg-[#1B4332] text-white rounded-full py-2"
                                >
                                    Add to Cart
                                </button>

                                {isVisible && (
                                    <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce-in">
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 animate-pulse"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span className="animate-wiggle">
                                                Item Added to Cart!
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                totalProducts={totalProducts}
                page={page}
                setPage={setPage}
            />
        </section>
    );
};

export default RightSideProductSection;

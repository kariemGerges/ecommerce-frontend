// This component is used to display the products on the right side of the page and the header filter (Best match, Price: Low to High, Price: High to Low)
import { Heart } from 'lucide-react';

// import hooks
import { useFilteredProducts } from '../../hooks/products/useFilteredProducts';

// import components
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Pagination from '../Products/Pagination';
import image from '../../assets/vegetables_opengraph.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import NoProductsFound from './NotProductsFound';

const RightSideProductSection = ({ filters }) => {
    console.log('filters 3 from the right side:', filters);

    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useFilteredProducts(
        filters,
        page,
        12
    );

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
                {error.name }{ error.message}{error.stack}
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

    return (
        <section>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">
                    Grocery Items on Sale
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
                                <button className="w-full bg-[#2D7A46] hover:dark:bg-[#1B4332] text-white rounded-full py-2">
                                    Add to Cart
                                </button>
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
                setPage={setPage}
            />
        </section>
    );
};

export default RightSideProductSection;

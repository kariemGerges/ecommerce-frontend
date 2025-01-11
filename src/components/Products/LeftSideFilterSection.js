//  this component is for the left side filter section for the product page

const LeftSideFilterSection = () => {
    return (
        <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>

                {/* Categories */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Categories</h3>
                    <ul className="space-y-2">
                        {[
                            'Grocery (2439)',
                            'Produce (187)',
                            'Meat (156)',
                            'Dairy (143)',
                        ].map((category) => (
                            <li key={category}>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded text-blue-600"
                                    />
                                    <span>{category}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Brands */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Brands</h3>
                    <ul className="space-y-2">
                        {[
                            'Store (342)',
                            'Kraft (156)',
                            'Pepsi (98)',
                            'Coca-Cola (87)',
                        ].map((brand) => (
                            <li key={brand}>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded text-blue-600"
                                    />
                                    <span>{brand}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Price</h3>
                    <ul className="space-y-2">
                        {['Under $5', '$5 - $10', '$10 - $20', 'Over $20'].map(
                            (range) => (
                                <li key={range}>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded text-blue-600"
                                        />
                                        <span>{range}</span>
                                    </label>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default LeftSideFilterSection;

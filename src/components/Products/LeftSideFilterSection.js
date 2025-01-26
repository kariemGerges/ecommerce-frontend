import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

// Shared "FilterContent" UI (the core repeated structure)
const FilterContent = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    filters,
    expanded,
    toggleSection,
    searchTerms,
    handleSearch,
    showAll,
    toggleShowAll,
    getFilteredItems,
    INITIAL_DISPLAY_COUNT,
    selectedFilters,
    handleCheckboxChange,
}) => {
    const renderFilterSection = (title, items, searchable = false) => {
        const sectionKey = title.toLowerCase();
        const isExpanded = expanded[sectionKey];
        const searchTerm = searchTerms[sectionKey];
        const filteredItems = getFilteredItems[sectionKey];
        const isShowingAll = showAll[sectionKey];
        const hasMore = filteredItems.length > INITIAL_DISPLAY_COUNT;

        // Items shown (limit if not showing all)
        const displayItems = isShowingAll
            ? filteredItems
            : filteredItems.slice(0, INITIAL_DISPLAY_COUNT);

        return (
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h3
                        className="text-lg font-semibold cursor-pointer"
                        onClick={() => toggleSection(sectionKey)}
                    >
                        {title}
                    </h3>
                    {isExpanded ? (
                        <ChevronUp
                            size={20}
                            className="cursor-pointer"
                            onClick={() => toggleSection(sectionKey)}
                        />
                    ) : (
                        <ChevronDown
                            size={20}
                            className="cursor-pointer"
                            onClick={() => toggleSection(sectionKey)}
                        />
                    )}
                </div>

                {isExpanded && (
                    <div className="space-y-2">
                        {searchable && (
                            <div className="relative mb-2">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder={`Search ${title.toLowerCase()}...`}
                                    className="pl-8 pr-4 py-2 w-full rounded-md border border-gray-300 text-sm"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        handleSearch(sectionKey, e.target.value)
                                    }
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() =>
                                            handleSearch(sectionKey, '')
                                        }
                                        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        )}

                        {/* List of checkboxes */}
                        <div className="space-y-1">
                            {displayItems.map((item) => {
                                const { name, count } = item;
                                // is this item checked?
                                const isChecked =
                                    selectedFilters[sectionKey]?.includes(name);

                                return (
                                    <label
                                        key={name}
                                        className="flex items-center space-x-2 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300"
                                            checked={isChecked}
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    sectionKey,
                                                    name,
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="text-sm">{name}</span>
                                        {count > 0 && (
                                            <span className="text-xs text-gray-500">
                                                ({count})
                                            </span>
                                        )}
                                    </label>
                                );
                            })}
                        </div>

                        {/* No matches message */}
                        {filteredItems.length === 0 && searchTerm && (
                            <p className="text-sm text-gray-500">
                                No matches found
                            </p>
                        )}

                        {/* Show more / Show less */}
                        {hasMore && !searchTerm && (
                            <button
                                onClick={(e) => toggleShowAll(sectionKey, e)}
                                className="text-sm text-green-600 hover:text-green-800 mt-2 w-full text-left"
                            >
                                {isShowingAll
                                    ? 'Show Less'
                                    : `Show All (${filteredItems.length})`}
                            </button>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-6 flex justify-between items-center">
                Filters
                {typeof isMobileMenuOpen === 'boolean' && (
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="lg:hidden text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                )}
            </h2>

            {renderFilterSection('Category', filters.category, true)}
            {renderFilterSection('Brand', filters.brand, true)}
            {renderFilterSection('Price', filters.price)}
        </div>
    );
};

// Desktop only sidebar
const DesktopSidebar = (props) => {
    // destructure the props you need
    const {
        filters,
        expanded,
        toggleSection,
        searchTerms,
        handleSearch,
        showAll,
        toggleShowAll,
        getFilteredItems,
        INITIAL_DISPLAY_COUNT,
        selectedFilters,
        handleCheckboxChange,
    } = props;

    return (
        <div className="hidden lg:block w-64 p-4 border-r border-gray-200 h-screen">
            <FilterContent
                isMobileMenuOpen={false} // Not needed in desktop
                setIsMobileMenuOpen={() => {}} // No-op in desktop
                filters={filters}
                expanded={expanded}
                toggleSection={toggleSection}
                searchTerms={searchTerms}
                handleSearch={handleSearch}
                showAll={showAll}
                toggleShowAll={toggleShowAll}
                getFilteredItems={getFilteredItems}
                INITIAL_DISPLAY_COUNT={INITIAL_DISPLAY_COUNT}
                // New props
                selectedFilters={selectedFilters}
                handleCheckboxChange={handleCheckboxChange}
            />
        </div>
    );
};

// Mobile only sidebar & button
const MobileSidebar = (props) => {
    const {
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        filters,
        expanded,
        toggleSection,
        searchTerms,
        handleSearch,
        showAll,
        toggleShowAll,
        getFilteredItems,
        INITIAL_DISPLAY_COUNT,
        selectedFilters,
        handleCheckboxChange,
    } = props;

    return (
        <>
            {/* Mobile Filter Button (floating) */}
            {!isMobileMenuOpen && (
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="lg:hidden fixed bottom-8 left-8 bg-[#2D7A46] dark:bg-[#1B4332] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
                >
                    <Filter size={24} />
                </button>
            )}

            {/* Mobile Sidebar Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div
                        className="fixed inset-y-0 right-0 w-full max-w-sm dark:bg-[#1B4332] dark:text-gray-200 p-4 overflow-y-auto"
                        style={{ maxHeight: '100vh' }}
                    >
                        <FilterContent
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            filters={filters}
                            expanded={expanded}
                            toggleSection={toggleSection}
                            searchTerms={searchTerms}
                            handleSearch={handleSearch}
                            showAll={showAll}
                            toggleShowAll={toggleShowAll}
                            getFilteredItems={getFilteredItems}
                            INITIAL_DISPLAY_COUNT={INITIAL_DISPLAY_COUNT}
                            // New props
                            selectedFilters={selectedFilters}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

// Parent component that holds state + logic, and renders both DesktopSidebar + MobileSidebar
const FilterSidebar = ({ onFilterChange, currentFilters }) => {
    const INITIAL_DISPLAY_COUNT = 5;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // state to hold the selected filters
    // const [localFilters, setLocalFilters] = useState(currentFilters);

    // filters category, brand, and price
    const filters = useMemo(
        () => ({
            category: [
                { name: 'Automotive', count: 0 },
                { name: 'Bakery', count: 0 },
                { name: 'Beauty', count: 0 },
                { name: 'Beverages', count: 0 },
                { name: 'Books', count: 0 },
                { name: 'Clothing', count: 0 },
                { name: 'Condiments', count: 0 },
                { name: 'Confectionery', count: 0 },
                { name: 'Dairy', count: 0 },
                { name: 'Electronics', count: 0 },
                { name: 'Frozen Foods', count: 0 },
                { name: 'Groceries', count: 0 },
                { name: 'Home & Kitchen', count: 0 },
                { name: 'Meat', count: 0 },
                { name: 'Produce', count: 0 },
                { name: 'Seafood', count: 0 },
                { name: 'Snacks', count: 0 },
                { name: 'Spices', count: 0 },
                { name: 'Sports', count: 0 },
                { name: 'Toys', count: 0 },
            ],
            brand: [
                { name: 'Al Fayhaa', count: 0 },
                { name: 'BlueStar', count: 0 },
                { name: 'EasternDelight', count: 0 },
                { name: 'Evergreen', count: 0 },
                { name: 'FreshCo', count: 0 },
                { name: 'Golden Eagle', count: 0 },
                { name: 'GoodChoice', count: 0 },
                { name: 'Khalifa', count: 0 },
                { name: 'Nile Harvest', count: 0 },
                { name: 'Quality Goods', count: 0 },
                { name: 'Shamal Foods', count: 0 },
                { name: 'StarLite', count: 0 },
                { name: 'SunSpice', count: 0 },
                { name: 'Superior', count: 0 },
                { name: 'Tastemaster', count: 0 },
            ],
            price: [
                { name: 'Under $5', range: [0, 5] },
                { name: '$5 - $10', range: [5, 10] },
                { name: '$10 - $20', range: [10, 20] },
                { name: 'Over $20', range: [20, Infinity] },
            ],
        }),
        []
    );

    // State for expanded sections
    const [expanded, setExpanded] = useState({
        category: true,
        brand: true,
        price: true,
    });

    // State for search terms
    const [searchTerms, setSearchTerms] = useState({
        category: '',
        brand: '',
        price: '',
    });

    // State for show all
    const [showAll, setShowAll] = useState({
        category: false,
        brand: false,
        price: false,
    });

    // Track which filter is are selected checked
    const [selectedFilters, setSelectedFilters] = useState(currentFilters);

    // testing filters
    // console.log('Selected Filters', selectedFilters);
    console.log('filter 2 from the left side', selectedFilters);

    // when a checkbox is checked  // When a checkbox changes
    const handleCheckboxChange = (section, itemName, checked) => {
        setSelectedFilters((prev) => {
            const current = prev[section] || [];
            let updated;
            if (checked) {
                updated = [...current, itemName];
            } else {
                updated = current.filter((name) => name !== itemName);
            }
            return { ...prev, [section]: updated };
        });

        // setLocalFilters((prev) => {
        //     const updatedSection = checked
        //         ? [...prev[section], itemName]
        //         : prev[section].filter((v) => v !== itemName);

        //     return { ...prev, [section]: updatedSection };
        // });
    };

    // when the filters change, call the parent callback function
    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    // Memoized filter function
    const getFilteredItems = useMemo(() => {
        const filterBySearch = (items, searchTerm) => {
            if (!searchTerm.trim()) return items;
            return items.filter((item) =>
                item.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase().trim())
            );
        };

        return {
            category: filterBySearch(
                filters.category,
                searchTerms.category
            ),
            brand: filterBySearch(filters.brand, searchTerms.brand),
            price: filterBySearch(filters.price, searchTerms.price),
        };
    }, [searchTerms, filters]);

    // Handlers
    // Toggle section
    const toggleSection = (section) => {
        setExpanded((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Handle search
    const handleSearch = (section, value) => {
        setSearchTerms((prev) => ({
            ...prev,
            [section]: value,
        }));
        // Reset "show all" when searching
        if (value.trim()) {
            setShowAll((prev) => ({
                ...prev,
                [section]: true,
            }));
        }
    };

    // Toggle "show all"
    const toggleShowAll = (section, event) => {
        event.stopPropagation();
        setShowAll((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <>
            {/* Large screen sidebar */}
            <DesktopSidebar
                filters={filters}
                expanded={expanded}
                toggleSection={toggleSection}
                searchTerms={searchTerms}
                handleSearch={handleSearch}
                showAll={showAll}
                toggleShowAll={toggleShowAll}
                getFilteredItems={getFilteredItems}
                INITIAL_DISPLAY_COUNT={INITIAL_DISPLAY_COUNT}
                selectedFilters={selectedFilters}
                handleCheckboxChange={handleCheckboxChange}
            />

            {/* Mobile overlay + button */}
            <MobileSidebar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                filters={filters}
                expanded={expanded}
                toggleSection={toggleSection}
                searchTerms={searchTerms}
                handleSearch={handleSearch}
                showAll={showAll}
                toggleShowAll={toggleShowAll}
                getFilteredItems={getFilteredItems}
                INITIAL_DISPLAY_COUNT={INITIAL_DISPLAY_COUNT}
                selectedFilters={selectedFilters}
                handleCheckboxChange={handleCheckboxChange}
            />
        </>
    );
};

export default FilterSidebar;

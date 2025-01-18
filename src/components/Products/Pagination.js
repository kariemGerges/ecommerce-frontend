import React from 'react';

const Pagination = ({
    currentPage,
    totalPages,
    hasPreviousPage,
    hasNextPage,
    setPage,
}) => {
    return (
        <div className="flex items-center justify-center space-x-4 pt-10 mt-4">
            <button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={!hasPreviousPage}
                className={`px-3 py-1 rounded-lg font-medium transition-colors
          ${
              hasPreviousPage
                  ? 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
            >
                Previous
            </button>

            <span className="text-sm font-medium">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={!hasNextPage}
                className={`px-3 py-1 rounded-lg font-medium transition-colors
          ${
              hasNextPage
                  ? 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

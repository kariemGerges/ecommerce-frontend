// import { useRandomProducts } from '../../hooks/products/useRandomProducts';
// import { usePaginatedProducts } from '../../hooks/products/useProductsPagenate';
// import { useState } from 'react';

// const TestingPage = () => {
//     // const { data } = useRandomProducts();
//     const [page, setPage] = useState(1);
//     const { data, isLoading, isError, error } = usePaginatedProducts(page, 10);

//     if (isLoading) return <p>Loading page {page}...</p>;
//     if (isError) return <p>Error: {error.message}</p>;

//     const { products, currentPage, totalPages, hasNextPage, hasPreviousPage } =
//         data;

//     return (
//         <div>
//             <h2>Paginated Products</h2>
//             {products && products.map((p) => <li key={p._id}>{p.name}</li>)}

//             <div style={{ marginTop: 10 }}>
//                 <button
//                     disabled={!hasPreviousPage}
//                     onClick={() => setPage((prev) => prev - 1)}
//                 >
//                     Previous
//                 </button>
//                 <span>
//                     {' '}
//                     Page {currentPage} of {totalPages}{' '}
//                 </span>
//                 <button
//                     disabled={!hasNextPage}
//                     onClick={() => setPage((prev) => prev + 1)}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TestingPage;

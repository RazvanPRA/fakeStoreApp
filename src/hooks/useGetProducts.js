import React, { useEffect, useState } from 'react';

const useGetProducts = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(null);
    const filterProducts =
        (!!searchTerm &&
            !!products?.length &&
            products.filter(item => item?.title?.indexOf(searchTerm) !== -1)) ||
        products;
    console.log({ filterProducts });

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    console.log({ searchTerm });
    return {
        products: filterProducts,
        searchTerm,
        loading,
        setSearchTerm,
    };
};

export default useGetProducts;

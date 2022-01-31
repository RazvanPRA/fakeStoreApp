import { useEffect, useState } from 'react';

const useGetProducts = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(null);
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSort, setSelectedSort] = useState('asc');

    const sortList = [
        {
            value: 'asc',
            display: 'Ascendent',
        },
        {
            value: 'desc',
            display: 'Descendent',
        },
    ];

    const filterProducts =
        (!!searchTerm &&
            !!products?.length &&
            products.filter(item => item?.title?.indexOf(searchTerm) !== -1)) ||
        products;

    useEffect(() => {
        const endPoint = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}?sort=${selectedSort}`
            : `https://fakestoreapi.com/products?sort=${selectedSort}`;
        fetch(endPoint)
            .then(response => response.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [selectedCategory, selectedSort]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(json => setCategories(json))
            .catch(error => console.log(error));
    }, []);

    return {
        products: filterProducts,
        searchTerm,
        loading,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortList,
        selectedSort,
        setSelectedSort,
        setSearchTerm,
    };
};

export default useGetProducts;

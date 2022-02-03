import { useEffect, useState } from 'react';

const useGetProduct = (id) => {
    const [productById, setProductById] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((response) => response.json())
                .then((json) => setProductById(json))
                .catch((error) => console.log(error));
        }
    }, []);

    return ({
        productById,
    });
};

export default useGetProduct;

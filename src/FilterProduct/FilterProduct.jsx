import React, { useState } from 'react';
import ProductList from './ProductList';
import PriceFilter from './PriceFilter';
import watch_Data from '../Data/Watch';
import Audio_Data from '../Data/AudioCart';
import AmoledDisplay_Data from '../Data/HeaderData/AmoledDisplay';
import Calling_Data from '../Data/HeaderData/Calling';
import Essential_data from '../Data/HeaderData/Essential';
import Luxe_data from '../Data/HeaderData/Luxe';
import Ninja_data from '../Data/HeaderData/Ninja';
import Outdoor_Data from '../Data/HeaderData/Outdoor';
import Women_collection from '../Data/HeaderData/Women_collection';

const Filter = () => {
    const [products] = useState([
        ...Audio_Data,
        ...watch_Data,
        ...AmoledDisplay_Data,
        ...Calling_Data,
        ...Essential_data,
        ...Luxe_data,
        ...Ninja_data,
        ...Outdoor_Data,
        ...Women_collection
    ]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handlePriceFilter = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    const parsePrice = (priceStr) => {
        return Number(priceStr.replace(/[^0-9]/g, ''));
    };

    const filteredProducts = products.filter(product => {
        const productPrice = parsePrice(product.price);
        return productPrice >= minPrice && productPrice <= maxPrice;
    });

    return (
        <div>
            <h1 className='text-center mt-4'>Filter</h1>
            <PriceFilter onFilter={handlePriceFilter} initialMinPrice={minPrice} initialMaxPrice={maxPrice} />
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="text-center mt-4">Product not found</p>
            )}
        </div>
    );
};

export default Filter;

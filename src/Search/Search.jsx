import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../AddToCart/CartContext';

export default function SearchResults() {
    const { dispatch } = useCart();

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item })
    };
    const location = useLocation();
    const {  filteredData } = location.state || { searchQuery: '', filteredData: [] }

    return (
        <div>
            {filteredData.length > 0 ? (
                <div className="search-results">
                <div className='d-flex justify-content-center flex-wrap container'>
                    {filteredData.map(product => (
                        <div className='Cart ms-3' key={product.id}>
                            <div className='Img-main d-flex justify-content-center align-products-center'>
                                <Link to={`/${product.id}`}>
                                    <img src={product.img} alt={product.title} />
                                </Link>
                            </div>
                            <div className='d-flex justify-content-between align-products-center p-2 title'>
                                <h3>{product.title}</h3>
                                <p>{product.rating}</p>
                            </div>
                            <div className='p-1 ps-2'>
                                <h4>{product.price}</h4>
                            </div>
                            <div className='ps-2 p-1 Addtocart'>
                                <Link className='Link' to={"/AddToCart"} onClick={() => addToCart(product)}>
                                    <h5 className='text-dark'>Add to cart</h5>
                                </Link>
                            </div>
                        </div>
               
                    ))}
                </div>
            </div>
            ) : (
                <div>No results found</div>
            )}
        </div>
    );
}


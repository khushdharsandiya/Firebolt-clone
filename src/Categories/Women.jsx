import React from 'react';
import { Link } from 'react-router-dom';
import '../style/AudioCart.css';
import Women_collection from '../Data/HeaderData/Women_collection';
import { useCart } from '../AddToCart/CartContext';

export default function Women() {
    const { dispatch } = useCart();

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    return (
        <div className='mt-5'>
            <h2 className='section-header__title show-sep text-center'>Women  <span style={{ color: "#ff4f33" }}>Collection</span></h2>
            <div className='d-flex container justify-content-center gap-2 flex-wrap'>
                {Women_collection.map((item, i) => (
                    <div key={i} className='Audio-Cart'>
                        <Link to={`/WomenProduct/${item.id}`} className='Img-Audio-main d-flex justify-content-center align-items-center'>
                            <img src={item.img} alt="" />
                        </Link>
                        <div className='d-flex justify-content-between align-items-center p-2 '>
                            <h3 className='h3'>{item.title}</h3>
                            <p className='mt-2'>{item.rating}</p>
                        </div>
                        <div className=' p-1 ps-2 '>
                            <h4>{item.price}</h4>
                        </div>
                        <div className='ps-2 p-1 Add_to_cart'>
                            <Link className='Link' to={"/AddToCart"} onClick={() => addToCart(item)}>
                                <h5 className='text-dark'>Add to cart</h5>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}
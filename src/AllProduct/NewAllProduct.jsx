import React from 'react'
import '../style/WatchCart.css'
import { Link } from 'react-router-dom'
import { useCart } from '../AddToCart/CartContext';
import New_Launch from '../Data/NewLaunch';

export default function NewAllProduct() {
    const { dispatch } = useCart();

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };
    return (
        <div className='mt-5'>
            <h2 className='section-header__title show-sep text-center'><b>New <span style={{ color: "#ff4f33" }}>Launch</span></b></h2>
            <div className='d-flex container justify-content-center gap-2 flex-wrap'>

                {
                    New_Launch.map((item, i) => {
                        return <>
                            <div className='Cart '>
                                <div className='Img-main d-flex justify-content-center align-items-center'>
                                    <Link to={`/NwLaunch/${item.id}`}>
                                        <img src={item.img} alt={item.title} />
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-between align-items-center p-2 title'>
                                    <h3>{item.title}</h3>
                                    <p className='mt-2'>{item.rating}</p>
                                </div>
                                <div className=' p-1 ps-2 '>
                                    <h4>{item.price}</h4>
                                </div>
                                <div className='ps-2 p-1 Addtocart'>
                                    <Link className='Link' to={"/AddToCart"} onClick={() => addToCart(item)}>
                                        <h5 className='text-dark'>Add to cart</h5>
                                    </Link>
                                </div>
                            </div>
                        </>
                    })
                }


            </div>
        </div>

    )
}
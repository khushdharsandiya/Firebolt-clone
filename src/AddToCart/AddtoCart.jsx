import React from 'react';
import { useCart } from './CartContext';
import '../style/AddToCart/AddToCart.css'
import { Link } from 'react-router-dom';
export default function AddtoCart() {
    const { state, dispatch } = useCart();

    const removeFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: index });
    };


    return (
        <div className="AddtoCart">
            <button className="close-button" >
                <Link className='Close_Link' to={"/"}>Close</Link>
            </button>
            <h2>Your Cart</h2>
            {state.cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {state.cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>

                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

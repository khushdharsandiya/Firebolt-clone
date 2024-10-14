import React from 'react'
import '../style/ProductPage.css'
import watch_Data from '../Data/Watch'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductPage() {
    const { id } = useParams();
    const product = watch_Data.find(item => item.id === parseInt(id));
    const navigate = useNavigate();

    const handleBuyNow = () => {
        localStorage.setItem('productPrice', product.price);
        navigate('/BuyNow');
    };
    return (
        <>
            {
                <div className='Product_Main'>
                    <div className='Product_img'>
                        <div>
                            <img src={product.img} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className='Product_details'>
                        <div className='Details'>
                            <h1>{product.title}</h1>
                            <h4>Sale Price: {product.price} </h4>
                            <p>M.R.P.: <del>{product.mrp}</del> (Incl of all taxes)</p>
                            <div className='Deatails_img'>
                                <div><img src={product.img} alt="" /></div>
                            </div>
                            <div className='buyMain'>
                                <div className='But_now' onClick={handleBuyNow}>Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

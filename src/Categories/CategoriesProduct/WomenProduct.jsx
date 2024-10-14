import React from 'react'
// import '../style/ProductPage.css'
import {  useNavigate, useParams } from 'react-router-dom';
import Women_collection from '../../Data/HeaderData/Women_collection';

export default function WomenProduct() {
    const { id } = useParams();
    const product = Women_collection.find(item => item.id === parseInt(id));
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
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/gladiator-plus-black-steel_1_400x.png?v=1712730368" alt="" /></div>
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/gladiator-plus-silver-steel_1_360x.png?v=1689074955" alt="" /></div>
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/sphere-gold-black_1_360x.png?v=1686139935" alt="" /></div>
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/commando-black_1_360x.png?v=1692850244" alt="" /></div>
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/black_2_360x.png?v=1714652268" alt="" /></div>
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/BlackGreen01_360x.png?v=1693911961" alt="" /></div>
                                <div><img src="https://www.fireboltt.com/cdn/shop/files/ninja-series_1024x1024.png?v=1690280196" alt="" /></div>
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

import React from 'react'
import '../style/Blog.css';
import { Link } from 'react-router-dom';


export default function Blog() {
    return (

        <div>
            <div className='presss_title'>
                <div>
                    <h2 className='section-header__title show-sep text-center pt-5'>
                        Fire-Boltt <span style={{ color: "#ff4f33" }}>Blogs</span>
                    </h2>
                    
                </div>
            </div>

            <div className='Blog_Main'>
                <div className='Blog_Img_Main'>
                    <Link to={'/FirstBlog'}>
                        <img src="https://www.fireboltt.com/cdn/shop/articles/Artboard_5_1_720x.jpg?v=1711106728" alt="" />
                    </Link>
                    <h5>Oracle Android Wristphone Just Launched- Embrace the </h5>
                </div>
                <div className='Blog_Img_Main'>
                    <Link to={'/SecondBlog'}>
                        <img src="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_copy_4_58d28eba-69e3-4256-9fab-320ea79e35ea_720x.jpg?v=1707198637" alt="" />
                    </Link>
                    <h5>Unveiling the Best Budget-Friendly Smartwatches for Every Lifestyle.</h5>
                </div>

                <div className='Blog_Img_Main'>
                    <Link to={'/ThirdBlog'}>
                        <img src="https://www.fireboltt.com/cdn/shop/articles/Artboard_q_720x.jpg?v=1705576188" alt="" /> </Link>

                    <h5>Tips & Tricks for Maximizing Your Smartwatch’s Battery Power.</h5>
                </div>
                <div className='Blog_Img_Main'>
                    <Link to={'/FourthBlog'}>
                        <img src="https://www.fireboltt.com/cdn/shop/articles/3_720x.jpg?v=1705577161" alt="" />
                    </Link>
                    <h5>Beyond Notifications: Exploring the Hidden Feature of Your Watch.</h5>
                </div>
            </div>

        </div>
    )
}

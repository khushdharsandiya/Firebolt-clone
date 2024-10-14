import React from 'react'
import '../../style/Blogpage/FirstBlog.css'
import { Link } from 'react-router-dom'

export default function FirstBlog() {
    return (
        <div className='Section '>
            <div className='font '>
                <h1 className='mt-5 pt-5'> Oracle Android Wristphone Just Launched-<br /> Embrace the Future</h1>

            </div>
            <div className='font mt-3'>
                <h5>Home News Unveiling the Best Budget-Friendly Smartwatches for Every Lifestyle</h5>

            </div>

            <div className='imges mt-5 '>
                <img className='img-fluid' src="https://www.fireboltt.com/cdn/shop/articles/Artboard_5_1_1000x.jpg?v=1711106728" alt="" />
            </div>

            <div className='Main_Letter'>
                <div className='letter'>
                    <p className='p1'>What if we were to tell you that you can do everything on your smartwatch that you currently do with your smartphone?</p>

                    <p className='p1'>Seems unbelievable, right? Well, it is not a dream anymore. Fire-Boltt has just launched another Android wristphone with a 4G SIM slot feature to enhance your wearable experience. Let’s look at the reasons why Oracle is a catch.</p>


                </div>
            </div>

            <div className='btn1'>
                <button className='buttonn'><b>Shop Now</b></button>
            </div>

            <div className='Main_Letterr mt-4'>
                <h2>Clear Calls & Instant Connectivity</h2>
            </div>


            <div className='Main_Letter '>
                <div className='letter'>
                    <p>No more fumbling with your smartphone in your pocket with Fire-Boltt Oracle. It makes taking and making calls as easy as a flick of the wrist.</p>

                    <p>Packed with 4G LTE SIM and WiFi connectivity, Oracle ensures smooth connectivity across all telecom operators.</p>

                    <p>Now you won’t miss a single call even if you don’t have your smartphone with you.</p>


                </div>
            </div>


            <div className='Main_Letterr'>
                <h2>Android OS- Fire OS for endless possibilities</h2>
            </div>

            <div className='Main_Letter'>
                <div className='letter'>
                    <p>Create endless possibilities on your wrist in a limitless world with Android OS, or as we like to call it Fire OS.</p>

                    <p>Just sign in to your Google account and explore millions of apps waiting to be downloaded.</p>

                    <p>Download your go-to apps and complete your everyday tasks like booking a cab, ordering food, online shopping, checking social media apps, and more, right from your wrist.</p>


                </div>
            </div>


            <div className='Main_Letterr'>
                <h2>User-friendly Interface with Inbuilt Keyboard and voice input</h2>
            </div>


            <div className='Main_Letter'>
                <div className='letter'>
                    <p>Texting on the go has never been easier with Oracle’s smooth interface, smooth keyboard, and voice assistance.</p>

                    <p>Whether you prefer typing or dictating, oracle has you covered with its integrated voice input. Plus, its built-in speaker delivers crisp audio allowing you to communicate effortlessly, anywhere anytime.</p>

                </div>
            </div>

            <div className='Main_Letterr'>
                <h2>Tech Specs Power</h2>
            </div>



            <div className='Main_Letter'>
                <div className='letter'>
                    <p>Oracle is a blend of sleek exterior and powerhouse technology. It features a cortex Quad Core ARM CPU, Mail GPU, 2GB RAM, and 16 GB storage capacity</p>

                    <p>Its tech power ensures smooth performance and enough space for all your apps and data.</p>

                    <p>With 4G LTE nano-SIM / WiFi connectivity and a 700 mAh big battery, this advanced wristphone is built to keep up with your busy lifestyle.</p>


                </div>
            </div>



            <div className='Main_Letterr'>
                <h2>Dual Notifications for Double the Connectivity</h2>
            </div>


            <div className='Main_Letter'>
                <div className='letter'>
                    <p>Stay connected on two fronts with dual notifications. Linked via Bluetooth to your smartphone, you'll receive all your important alerts, from calls and messages to social media notifications, directly on your wrist. Say hello to multitasking like never before!</p>

                    <p>Oracle WristPhone is a game-changer in the world of technology. With its seamless integration of smartphone features, superior connectivity, and sleek design,</p>

                    <p>this Android wristphone is set to revolutionize the way you stay connected on the go. So why wait? Embrace the future today with the Oracle wristphone and take your digital experience to new heights!</p>

                </div>
            </div>

            
            {/* <hr style={{w:'200px'}}/> */}

            <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}>
                <div className='Main_Letter mt-3'>
                    <i className="fa-solid fa-arrow-left-long "></i><h3>Back to News</h3>
                </div>
            </Link>


            <div className='Main_Letter  mt-5'>
                <h1>Most Read Blogs</h1>
            </div>

            <div className='Most_Blog_Main pb-4'>
                <div className='Most_Blog' >
                    <img className='img-fluid' src="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_copy_4_58d28eba-69e3-4256-9fab-320ea79e35ea_720x.jpg?v=1707198637" alt="" />
                    <h5 className='h5  mt-3 text-start'>Unveiling the Best Budget-Friendly Smartwatches for Every Lifestyle</h5>
                    <p className='p  mt-3'>Smartwatches have become indispensablecompanions, seamlessly blending style with functionality. Today, we'll embark on an exciting... </p>
                    <button className='button'><b>Countinu Reading</b></button>
                </div>
                <div className='Most_Blog'>
                    <img className='img-fluid' src="https://www.fireboltt.com/cdn/shop/articles/Artboard_q_720x.jpg?v=1705576188" alt="" />
                    <h5 className='h5  mt-3 text-start'>Tips & Tricks for Maximizing Your Smartwatch’s Battery Power</h5>
                    <p className='p mt-3'>Technology is constantly at our fingertips, the battery life of our devices has become more crucial than ever. Smartwatches, the epitome of conveni...</p>
                    <button className='button'><b>Countinu Reading</b></button>

                </div>
            </div>




        </div>
    )
}

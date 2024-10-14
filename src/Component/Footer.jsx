import React from 'react'
import '../style/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 pt-4">
                            <h5>Follow Us</h5>
                            <ul className="social-icons list-inline">
                                <li className="list-inline-item">
                                    <Link to={"https://www.facebook.com/bolttsports/"}>
                                        <i className="fab fa-facebook" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to={"https://www.instagram.com/fireboltt_/?hl=en"}>
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to={"https://x.com/fireboltt__?lang=en"}>
                                        <i className="fab fa-twitter" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to={"https://www.youtube.com/channel/UCQh4jrmKaQdNlY_wsrCBAuQ"}>
                                        <i className="fab fa-youtube" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 pt-4">
                            <h5>About Boltt</h5>
                            <div>About Us</div>
                            <div>Privacy Policy</div>
                            <div>Shipping & Returns</div>
                            <div>Read Our Blogs</div>
                            <div>Fire-Boltt Authorized Stores</div>
                            <div>Recent Stories</div>
                        </div>

                        <div className="col-lg-3 pt-4">
                            <h5>Smartwatch By Price</h5>
                            <div>Smartwatch Under 1500</div>
                            <div>Smartwatch Under 2000</div>
                            <div>Smartwatch Under 3000</div>
                            <div>best smartwatch under 4000</div>
                            <div>best smartwatch under 5000</div>
                            <div>Best Smartwatch Under 10000</div>
                        </div>

                        <div className="col-lg-3 pt-4">
                            <h5>Shop By Feature</h5>
                            <div>Luxury Stainless steel Smartwatch</div>
                            <div>Bluetooth calling Smartwatch</div>
                            <div>Rugged Smartwatches </div>
                            <div>AMOLED Display Smartwatches </div>
                            <div>Essential smartwatches </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-lg-3 pt-4"></div>

                        <div className="col-lg-3 pt-4">
                            <h5>Our Products</h5>
                            <div>Audio</div>
                            <div>Smart watches</div>
                        </div>
                        
                        <div className="col-lg-3 pt-4">
                            <h5>Help Desk</h5>
                            <div>Support</div>
                            <div>Track Complaint Status</div>
                            <div>Track Your Order</div>
                            <div>Warranty Registration</div>
                            <div>Warranty Policy</div>
                            <div>Register a Complaint</div>
                        </div>
                        <div className="col-lg-3 pt-4">
                            <h5>Legal</h5>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    )
}
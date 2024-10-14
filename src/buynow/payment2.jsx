
import React from 'react';
import '../style/Buynow/payment.css';
import { useNavigate } from 'react-router-dom';

export default function Payment2() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/SelectPayment');


        const formData = {
            name: e.target['shipping-name'].value,
            address: e.target['shipping-address'].value,
            city: e.target['shipping-city'].value,
            zip: e.target['shipping-zip'].value,
            country: e.target['shipping-country'].value,
        };

        localStorage.setItem("data", JSON.stringify(formData))
    };

    return (
        <div className="container Address_payment_Page">
            <div className="payment-container">
                <h1>Payment Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h2>Shipping Address</h2>
                        <div className="form-group">
                            <label htmlFor="shipping-name">Full Name</label>
                            <input type="text" id="shipping-name" name="shipping-name" required />
                        </div>
                        <div className="form-group-group">
                            <div className="form-group">
                                <label htmlFor="shipping-address">Address</label>
                                <input className="taller-input" type="text" id="shipping-address" name="shipping-address" required />
                            </div>
                        </div>
                        <div className="form-group-group">
                            <div className="form-group">
                                <label htmlFor="shipping-city">City</label>
                                <input type="text" id="shipping-city" name="shipping-city" required />
                            </div>
                        </div>
                        <div className="form-group-group">
                            <div className="form-group">
                                <label htmlFor="shipping-zip">Zip Code</label>
                                <input type="text" id="shipping-zip" name="shipping-zip" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shipping-country">Country</label>
                                <input type="text" id="shipping-country" name="shipping-country" required />
                            </div>
                        </div>
                    </div>
                    {/* <Link to={"/SelectPayment"}> */}
                    <button className='Payment_Submit_Page' type="submit">Submit Payment</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
}

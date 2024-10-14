import React from 'react';
import '../style/Buynow/selectpayment.css';
import { Link } from 'react-router-dom';

export default function SelectPaymentMethod() {
    return (
        <div className='container Select-Method'>
            <div className="Select-payment-container">
                <h1>How would you like to pay?</h1>
                <div className="payment-methods">
                    <div className="payment-method">
                        <Link to={`/Gpay`}>
                            <img src="https://animationvisarts.com/wp-content/uploads/2023/11/Frame-43-1.png" alt="Visa" />
                        </Link>
                    </div>
                    <div className="payment-method">
                        <Link to={`/Phonepay`}>
                            <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" />
                        </Link>
                    </div>
                    <div className="payment-method">
                        <Link to={`/Cartpay`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaAcPwRYKIiIwB1uWIbkx6BXLikpjcfSKuQ&s" alt="American Express" />
                        </Link>
                    </div>
                    <div className="payment-method">
                        <Link to={`/Paytm`}>
                            <img src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="Paytm" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

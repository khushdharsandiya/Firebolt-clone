import React, { useEffect, useState } from 'react';
import '../style/Buynow/GpaypaymentPage.css';
import { useNavigate } from 'react-router-dom';


export default function Phonepay() {
    const [upiId, setUpiId] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedAmount = localStorage.getItem('productPrice');
        if (storedAmount) {
            setAmount(storedAmount);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (upiId && amount) {
            localStorage.setItem('PhonePayPaymentData', JSON.stringify({ upiId, amount }));
            // alert(`request success`);
            navigate('/payment-success');

        } else {
            alert('Please enter both UPI ID and amount.');
        }
    };

    return (
        <div className="gpay_main">
            <div className='container'>
                <div className="Gpay-container">
                    <h1>Phone Pay Payment</h1>
                    <form className="payment-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="upiId">UPI ID:</label>
                            <input
                                type="text"
                                id="upiId"
                                placeholder="Enter your UPI ID"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="text"
                                id="amount"
                                value={amount}
                                readOnly
                            />
                        </div>
                        <button type="submit" className="pay-button">
                            <b>Pay with Phone Pay</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

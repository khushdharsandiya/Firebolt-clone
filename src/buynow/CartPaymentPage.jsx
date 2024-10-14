import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Buynow/CartPaymentPage.css';

export default function CartPaymentPage() {
    const [cardNumber, setCardNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedAmount = localStorage.getItem('productPrice');
        if (storedAmount) {
            setAmount(storedAmount);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!cardNumber  || !expiryDate || !cvv) {
            alert('Please fill in all fields.');
            return;
        }
        navigate('/payment-success');
    };

    return (
        <div className='credit-card-form-main'>
            <div className="credit-card-form">
                <h2>Cart Payment</h2>
                <img
                    className="Image1"
                    src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
                    alt="Card mockup"
                    border={0}
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="card-number">Card Number</label>
                        <input
                            type="text"
                            id="card-number"
                            placeholder="Card number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
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
                    <div className="form-row">
                        <div className="form-group form-column">
                            <label htmlFor="expiry-date">Expiry Date</label>
                            <input
                                type="date"
                                id="expiry-date"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group form-column">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="number"
                                id="cvv"
                                placeholder="CVV"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>

                    </div>
                    <button type="submit" className="click-button">PAY NOW</button>
                </form>
            </div>
        </div>
    );
}

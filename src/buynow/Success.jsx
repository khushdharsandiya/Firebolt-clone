import React from 'react';
import '../style/Buynow/success.css'; 

export default function Success() {
    return (
        <div className="payment-success">
            <div className="card">
                <div className="checkmark-container">
                    <div className="checkmark">✓</div>
                </div>
                <h1>Payment Success</h1>
                <p>
                    We received your purchase request;
                    <br /> we'll be in touch shortly!
                </p>
            </div>
        </div>
    );
}

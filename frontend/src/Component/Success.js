import React from 'react';
import { Link } from "react-router-dom";
import success from '../success.png'

const Success = () => {
    return (
        <div className="containe">
            <div className="conten">
                <h1 className="titl">Payment Successful</h1>
                <p className="subtitl">
                    Your order is in our system
                </p>
                <div className="imageContaine">
                    <img src={success} alt="Success" className="imag" />
                </div>
                <Link to="/" className="lin">
                    Back to Home Page
                </Link>
            </div>
        </div>
    );
};

export default Success;
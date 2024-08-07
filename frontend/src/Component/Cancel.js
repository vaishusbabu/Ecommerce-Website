import React from 'react';
import { Link } from "react-router-dom";
import cancel from '../cancel.png';


const Cancel = () => {
    return (
        <div className="containe">
            <div className="conten">
                <h1 className="titl">Something went wrong!</h1>
                <p className="subtitl">
                    Please retry after some time
                </p>
                <div className="imageContaine">
                    <img src={cancel} alt="Cancel" className="imag" />
                </div>
                <Link to="/" className="lin">Back to Home</Link>
            </div>
        </div>
    );
};

export default Cancel;
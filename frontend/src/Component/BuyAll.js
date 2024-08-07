import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Lush.png';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link  } from "react-router-dom";


function BuyAll() {
    const location = useLocation();
    const navigate = useNavigate();
    const { products, ship, deliverydate } = location.state;
    const [orderDetails, setOrderDetails] = useState({
        products: [],
        shippingAddress: '',
        paymentType: '',
        totalAmount: 0,
        deliveryDate: deliverydate
    });

    useEffect(() => {

        const validProducts = products.filter(item => item.pdtid != null).map(item => ({
            pdtid: item.pdtid._id,
            pdtname: item.pdtid.pdtname,
            quantity: item.quantity,
            price: item.pdtid.price
        }));


        const total = validProducts.reduce((acc, item) => {
            return acc + (item.quantity * parseFloat(item.price));
        }, 0) + ship;

        setOrderDetails(prev => ({
            ...prev,
            products: validProducts,
            totalAmount: total
        }));
    }, [products, ship]);

    const handleInputChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    };

    const handleSubmitOrder = async () => {
        try {
            const response = await axios.post('http://localhost:4003/createOrder', orderDetails);
            if (response.data.status === 200) {
                alert('Order placed successfully!');
                navigate('/orderConfirmation', { state: { orderId: response.data.orderId } });
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

    return (
        <div>
            <div className='smain'>
                <img src={logo} height="135" className="img" alt="logo" />
                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Lush Blooms</Navbar.Brand>
                            <div className="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link className="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                                    <Nav.Link href="#Regiter"><Link className="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                                    <Nav.Link href="#Login"><Link className="btn btn-outline-light" aria-current="page" to='/Cart_list'>CartList</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link className="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link className="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br />
                </div>
            </div>
            <div className="reg">
                <h1>Orders</h1>
                <hr />
                <div>
                    <h2>Complete Your Order</h2>
                    {orderDetails.products.length > 0 ? (
                        orderDetails.products.map((item, index) => (
                            <div key={index}>
                                <p>{item.pdtname} - Quantity: {item.quantity} - Price: ${parseFloat(item.price) * item.quantity}</p>
                            </div>
                        ))
                    ) : (
                        <p>No valid products in your cart.</p>
                    )}
                    <p>Shipping: ${ship}</p>
                    <p>Total: ${orderDetails.totalAmount.toFixed(2)}</p>
                    <input
                        type="text"
                        name="shippingAddress"
                        value={orderDetails.shippingAddress}
                        onChange={handleInputChange}
                        placeholder="Shipping Address"
                    />
                    <select
                        name="paymentType"
                        value={orderDetails.paymentType}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Payment Type</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                    <button onClick={handleSubmitOrder}>Place Order</button>
                </div>
            </div>
        </div>



    );
}

export default BuyAll;
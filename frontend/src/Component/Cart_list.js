import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Cart_list() {
    const id = localStorage.getItem('userid');
    console.log(id);

    const [ship, setShip] = useState(100);
    const [values, setValues] = useState([]);
    let current = new Date();
    let date = new Date();
    date.setDate(current.getDate() + 10);

    const [order, setOrders] = useState({
        pdtid: id,
        quantity: 1,
        paymenttype: "",
        shippingaddress: "",
        deliverydate: date,
        totalamount: 0, // Initially setting it to 0
    });

    const Change = (e) => {
        setOrders({
            ...order,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        axios.post(`http://localhost:4003/viewcart/${id}`)
            .then((res) => {
                console.log(res, "res");
                if (res.data.data) {
                    setValues(res.data.data);
                    console.log("data", res.data.data);
                }
            })
            .catch((e) => {
                console.error("Error fetching cart data", e);
            });
    }, [id]);

    useEffect(() => {
        if (values.length > 0) {
            const total = values.reduce((acc, item) => acc + item.pdtid.price * order.quantity, 0) + ship;
            setOrders({ ...order, totalamount: total });
        }
    }, [values, order.quantity, ship]);

    return (
        <div>
            <div className='smain'>
                <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" className="img" alt="logo" />
                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                                    <Nav.Link href="#Regiter"><Link class="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                                    <Nav.Link href="#Login"><Link class="btn btn-outline-light" aria-current="page" to='/Cart_list'>CartList</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br />
                </div>
            </div>
            <div className='reg'>
                <h1> Cart List</h1><hr />
                {
                    Array.isArray(values) && values.length > 0 ? (
                        values.map((e) => {
                            const imageName = e.pdtid.img.split('/').pop();
                            const newImageUrl = `http://localhost:4003/${imageName}`;
                            return (
                                <div class="card">
                                    <div class="card" style={{ width: "18rem", margin: "25px" }}>
                                        <div class="card-body">
                                            <img src={newImageUrl} width={200} /><br /><br />
                                            <label>Product Name :</label>
                                            {e.pdtid.pdtname}<br />
                                            <label> Quantity :</label>
                                            <input type="number" name="quantity" value={order.quantity} onChange={(e) => { setOrders({ ...order, [e.target.name]: e.target.value, totalamount: e.target.value * values.price + ship }) }} /><br />
                                            <label>Price :</label>
                                            {e.pdtid.price}<br />
                                            <label>   Total amount :</label>
                                            {order.quantity * e.pdtid.price}<br />
                                            <button type="button" class="btn btn-dark">Remove Cart</button>
                                            <hr />
                                        </div> </div>
                                </div>
                            )
                        })
                    ) : (
                        <p>No items in the cart</p>
                    )
                }
                <button type="Submit" class="btn btn-dark"><Link to='/Order'>Buy Now</Link></button>
            </div>
        </div >
    )
}

export default Cart_list;

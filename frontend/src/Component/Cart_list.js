import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../Lush.png';

function Cart_list() {
    const id = localStorage.getItem('userid');
    const [ship, setShip] = useState(100);
    const [values, setValues] = useState([]);
    const navigate = useNavigate();

    let current = new Date();
    let date = new Date();
    date.setDate(current.getDate() + 10);

    const [order, setOrders] = useState({
        userid: id,
        products: [],
        paymenttype: "",
        shippingaddress: "",
        deliverydate: date,
        totalamount: 0,
    });

    const removeFromCart = async (pdtid) => {
        try {
            await axios.delete(`http://localhost:4003/removeFromCart/${id}/${pdtid}`);
            setValues(values.filter(item => item.pdtid._id !== pdtid));
        } catch (error) {
            console.error("Error removing item from cart", error);
        }
    };

    useEffect(() => {
        axios.post(`http://localhost:4003/viewcart/${id}`)
            .then((res) => {
                if (res.data.data) {
                    const updatedValues = res.data.data.map(item => ({
                        ...item,
                        quantity: item.quantity || 1,
                    }));
                    setValues(updatedValues);
                }
            })
            .catch((e) => {
                console.error("Error fetching cart data", e);
            });
    }, [id]);

    useEffect(() => {
        if (values.length > 0) {
            const total = values.reduce((acc, item) => acc + (item.quantity * item.pdtid.price), 0) + ship;
            const products = values.map(item => ({
                pdtid: item.pdtid._id,
                quantity: item.quantity
            }));
            setOrders({ ...order, totalamount: total, products });
        }
    }, [values, ship]);

    const handleQuantityChange = (pdtid, newQuantity) => {
        const product = values.find(item => item.pdtid._id === pdtid);
        if (product) {
            const quantity = parseInt(newQuantity, 10);
            if (quantity > product.pdtid.quantity) {
                alert("Quantity exceeds available stock");
                return;
            }

            setValues(values.map(item =>
                item.pdtid._id === pdtid ? { ...item, quantity } : item
            ));
        }
    };

    const handleBuyAll = () => {
        navigate('/Order', { state: { order } });
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
            <div className='reg'>
                <h1>Cart List</h1>
                <hr />
                {
                    Array.isArray(values) && values.length > 0 ? (
                        values.map((e, key) => {
                            const imageUrls = e.pdtid.img;
                            return (
                                <div key={key} className="card" style={{ width: "18rem", margin: "25px" }}>
                                    <div className="card-body">
                                        <Carousel autoPlay={true} showThumbs={false}>
                                            {imageUrls.map((imgPath, idx) => {
                                                const imageName = imgPath.split('/').pop();
                                                const newImageUrl = `http://localhost:4003/${imageName}`;
                                                return (
                                                    <div key={idx}>
                                                        <img src={newImageUrl} alt={e.pdtid.pdtname} style={{ margin: '10px', objectFit: 'contain', height: '300px', width: '250px' }} />
                                                    </div>
                                                );
                                            })}
                                        </Carousel>
                                        <br /><br />
                                        <label>Product Name :</label> {e.pdtid.pdtname}<br />
                                        <label>Quantity :</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={e.quantity}
                                            onChange={(event) => handleQuantityChange(e.pdtid._id, event.target.value)}
                                            min="1"
                                            max={e.pdtid.quantity}
                                        />
                                        <br />
                                        <label>Price :</label> {e.pdtid.price}<br />
                                        <label>Total amount :</label> {e.quantity * e.pdtid.price}<br />
                                        <Button variant="dark" onClick={() => removeFromCart(e.pdtid._id)}>Remove from cart</Button>
                                        <Link to={`/Order/${e._id}`}><Button variant='primary' className='Submit'>Buy Now</Button></Link>
                                        <hr />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No items in the cart</p>
                    )
                }
                <div>Total Amount: {order.totalamount}</div>
                <Button variant='warning' className='Submit' onClick={handleBuyAll}>Buy All</Button>
            </div>
        </div>
    );
}

export default Cart_list;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../Lush.png'

function Cust_all_pdt() {
    const [values, setValues] = useState([]);

    const id = localStorage.getItem('userid');
    console.log(id);

    useEffect(() => {
        axios.post(`http://localhost:4003/allpdt`)
            .then((res) => {
                console.log(res, "res");
                if (res.data.data !== undefined) {
                    setValues(res.data.data);
                }
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    const Cart = (e) => {
        console.log("Userid :", id);
        console.log("pdtid :", e);

        console.log("values", values);
        axios.post(`http://localhost:4003/cartlist/${id}`, { pdtid: e })
            .then((a) => {
                if (a.data.status === 200) {
                    console.log(a);
                    alert("Added to cart");
                } else {
                    alert(a.data.msg);
                }
                console.log(a);
            })
            .catch((e) => {
                alert("Missing cart item");
            });
    }

    return (
        <div>
            <div className='smain'>
                <img src={logo} height="135" className="img" alt="Store Logo" />
                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Lush Blooms</Navbar.Brand>
                            <div className="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link className="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                                    <Nav.Link href="#Regiter"><Link className="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                                    <Nav.Link href="#Login"><Link className="btn btn-outline-light" aria-current="page" to='/Cart_list'>Cart Lists</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link className="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link className="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br />
                </div>
            </div>
            <div>
                <h1 style={{ color: "darkred", backgroundColor: "lavenderblush" }}> Products</h1>
                <hr />

                <div className="row">
                    {
                        values.map((e, index) => (
                            <div className="col-4" key={index}>
                                <div className="card" style={{ width: "28rem", margin: "13px", textAlign: "center" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "darkblue" }}>{e.pdtname}</h5>
                                        <label>Quantity :</label> {e.quantity}<br />
                                        <label>Price :</label> {e.price}<br />
                                        <div>
                                            <Carousel autoPlay={true} showThumbs={false}>
                                                {e.img.map((imgPath, idx) => {
                                                    const imageName = imgPath.split('/').pop();
                                                    const newImageUrl = `http://localhost:4003/${imageName}`;
                                                    return (
                                                        <div key={idx}>
                                                            <img src={newImageUrl} alt={e.pdtname} style={{ margin: '10px', objectFit: 'contain', height: '300px', width: '250px' }} />
                                                        </div>
                                                    );
                                                })}
                                            </Carousel>
                                        </div>
                                        <Button variant="info" type='button' className='Submit' onClick={() => Cart(e._id)}>Add to Cart</Button>

                                        {console.log("id", id)}
                                        <Link to={`/Order/${e._id}`}><Button variant='warning' className='Submit'>Buy Now</Button></Link>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cust_all_pdt;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Cust_all_pdt() {

    const [values, setValues] = useState(
        []
    )
    // const [data, setData] = useState({
    //   pdtid: "",
    //   custid: ""
    //   })

    const id = localStorage.getItem('userid')
    console.log(id)

    useEffect(() => {
        axios.post(`http://localhost:4003/allpdt`)
            .then((res) => {
                console.log(res, "res");
                if (res.data.data != undefined) {
                    setValues(res.data.data)
                }
            })
            .catch((e) => {
                //alert("error")
                // console.log(e)
            })
    }, [])


    const Cart = (e) => {
        console.log("Userid :", id)
        console.log("pdtid :", e)

        // e.preventDefault()
        console.log("values", values)
        axios.post(`http://localhost:4003/cartlist/${id}`, { pdtid: e })
            .then((a) => {
                if (a.data.status === 200) {
                    console.log(a);
                    alert("Added to cart")
                }
                else {
                    alert(a.data.msg)
                }
                console.log(a)
            })
            .catch((e) => {
                alert("Missing cart item")
            })
    }

    return (
        <div>

            <div className='smain'>
                <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" class="img" ></img>
                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                                    <Nav.Link href="#Regiter"><Link class="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                                    <Nav.Link href="#Login"><Link class="btn btn-outline-light" aria-current="page" to='/Cart_list'>Cart Lists</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br>
                    </br>
                </div>
            </div>
            <div className='reg'>
                <h1 style={{ color: "darkred" }}> Products</h1><hr></hr>
                {
                    values.map((e) => {

                        const imageName = e.img.split('/').pop();
                        const newImageUrl = `http://localhost:4003/${imageName}`;

                        return (
                            <div className='forms' style={{ marginLeft: "5%" }}>
                                <h4 card_title1> Product Name : {e.pdtname}</h4>
                                <h6>Quantity : {e.quantity}</h6>
                                <h6>Price : {e.price}</h6>
                                <img src={newImageUrl} width={200} /><br /><br />
                                <Button variant="info" type='button' className='Submit' onClick={() => Cart(e._id)} >Add to Cart</Button>
                                <Link to={`/Order/${e._id}`}><Button variant='warning' className='Submit'>Buy Now</Button></Link>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cust_all_pdt
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from "../Lush.png";


function CustOrder() {

    const id = localStorage.getItem('userid')

    const [values, setValues] = useState(
        [

        ]
    )
    useEffect(() => {
        axios.post(`http://localhost:4003/ord`)
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


    return (
        <div>
            <div class='smain'>
                <img src={logo}
                    height="135" class="img" ></img>

                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Lush Blooms</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#products"><Link class="btn btn-outline-light" aria-current="page" to='/Pdt_add'>Addpdt</Link></Nav.Link>
                                    <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/View_pdt'>Viewpdt</Link></Nav.Link>
                                    <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/ViewCust'>Customer</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/'>Orders</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/adminlogin'>Logout</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br>
                    </br>
                </div>
            </div>
            <div className='reg'>
                <h1 style={{ color: "darkred" }}> Current Orders </h1><hr></hr>

                {
                    values.map((e) => {
                        return (
                            <><div className='card col-12 mb-3'>
                                <div className='card-body'>
                                    {/* <label><h4>Customer Name :</h4></label> {e.custid.firstname}<br></br><hr/> */}
                                    {/* <h5 class="card-title" style={{ color: 'darkblue' }}>Product Name :{e.pdtid.pdtname}</h5> */}

                                    <label>Quantity:</label> {e.quantity}<br></br><hr />
                                    <label>Delivery Date :</label> {e.deliverydate}<br></br>
                                    <label>Purchase Date :</label> {e.date}<br></br><hr />
                                    <label>Total amount:</label> {e.totalamount}<br></br>
                                    <label>paymenttype :</label> {e.paymenttype}<br></br><hr />
                                    <label>Shipping Address :</label> {e.shippingaddress}<br></br><hr />

                                    <hr></hr>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default CustOrder
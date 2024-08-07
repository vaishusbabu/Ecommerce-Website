import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../Lush.png";
function Edit() {

    const { id } = useParams(); //hook-- to took the id

    const [values, setValues] = useState({});

    const Change = (e) => {
        if (e.target.name === "image") {
            setValues({ ...values, img: e.target.files[0] });
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
    };

    const Submit = (e) => {
        console.log(e);
        e.preventDefault();
        console.log(values);
        axios
            .post(`http://localhost:4003/editpdt/${id}`, values)
            .then((a) => {
                if (a.status === 200) {
                    alert("Product Updated Sucessfully");
                }
                console.log(a);
            })
            .catch((e) => {
                alert("error");
                console.log(e);
            });
    };

    return (
        <div>
            <div className='smain'>
                <img src={logo} height="135" className="img" alt="logo" />

                <div className="main1">
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#products">
                                        <Link
                                            class="btn btn-outline-light"
                                            aria-current="page"
                                            to="/Pdt_add"
                                        >
                                            Addpdt
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#customers">
                                        <Link
                                            class="btn btn-outline-light"
                                            aria-current="page"
                                            to="/View_pdt"
                                        >
                                            Viewpdt
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#customers">
                                        <Link
                                            class="btn btn-outline-light"
                                            aria-current="page"
                                            to="/ViewCust"
                                        >
                                            Customers
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#logout">
                                        <Link
                                            class="btn btn-outline-light"
                                            aria-current="page"
                                            to="/CustOrder"
                                        >
                                            Orders
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#logout">
                                        <Link
                                            class="btn btn-outline-light"
                                            aria-current="page"
                                            to="/Admin_login"
                                        >
                                            Logout
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br></br>
                </div>
            </div>
            <div>
                {" "}

                <div>
                    <div className="reg">
                        <h3 style={{ textAlign: 'center' }}>Edit Profile</h3>
                        <div className="forms">
                            <form onSubmit={Submit}  >
                                <hr />
                                <div style={{ marginLeft: "5%", display: "flex", alignItems: "center" }}>
                                    <p>
                                        Product name :{" "}


                                        <input

                                            class="form-control"
                                            id="exampleInputEmail1"
                                            type="text"
                                            value={values.pdtname}
                                            onChange={Change}
                                            name="pdtname"
                                        />
                                        <br />
                                        <br />
                                        Quantity :
                                        <input

                                            class="form-control"
                                            id="exampleInputEmail1"
                                            type="number"
                                            value={values.quantity}
                                            onChange={Change}
                                            name="quantity"
                                        />
                                        <br />
                                        <br />
                                        Price :{" "}
                                        <input

                                            class="form-control"
                                            id="exampleInputEmail1"
                                            type="number"
                                            value={values.price}
                                            onChange={Change}
                                            name="price"
                                        />
                                        <br />
                                        <br />
                                        Image :
                                        <input

                                            class="form-control"
                                            id="exampleInputEmail1"
                                            type="file"
                                            value={values.img}
                                            onChange={Change}
                                            name="img"
                                        />
                                        <br />
                                        <br />
                                        <br></br>
                                        <Button variant="info" className="submit" type="Submit">
                                            Submit{" "}
                                        </Button>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Edit;
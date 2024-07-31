import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Order() {
  const Navigate = useNavigate();

  const _id = localStorage.getItem("userid");
  console.log("user id", _id);

  const { id } = useParams();

  const [values, setValues] = useState({
    img: "",
    pdtname: "",
    price: 0,
  }); //values of pdt as obj

  const [count, setCount] = useState(1); //quantity set

  const [ship, setShip] = useState(100); //shipping charge

  console.log("pdt_id", id); //product id

  let current = new Date();
  let date = new Date();
  date.setDate(current.getDate() + 10); //Estimate date settting



  //----------------fetching one pdt

  console.log("totalamount", count * values.price + ship);


  // useEffect(()=>{
  //   setOrders({...order,Total :(order.quantity*values.price)+ship})
  // },[order.quantity,value.price,ship])

  useEffect(() => {
    axios
      .post(`http://localhost:4003/idfetch/${id}`)
      .then((res) => {
        if (res.data.data != undefined) {
          setValues(res.data.data);
          setOrders({
            ...order, totalamount: parseInt(res.data.data.price) + ship
          })
          console.log("data", res.data.data);
        }
      })
      .catch((e) => {
        //alert("error")
        console.log(e);
      });
  }, []);

  const [order, setOrders] = useState({
    pdtid: id,
    quantity: 1,
    paymenttype: "",
    shippingaddress: "",
    deliverydate: date,
    totalamount: values.price + ship,
  });

  const Change = (e) => {
    setOrders({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(order);
  })

  const Submit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(values);
    axios
      .post(`http://localhost:4003/orderlist/${_id}`, order)
      .then((a) => {
        if (a.status === 200) {
          if (a.data.data.paymenttype == 'card') {
            Navigate(`/Card/${a.data.data._id}`)
          }
          else {
            Navigate('/Cash_cod')
          }
        }
        console.log(a);
      })
      .catch((e) => {
        alert("Error");
        console.log(e);
      });
  };

  return (
    <div>
      <div className='smain'>
        <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" class="img" ></img>
        <div className="main1">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
              <div class="nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">
                    <Link
                      class="btn btn-outline-light"
                      aria-current="page"
                      to="/CustHome"
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#Regiter">
                    <Link
                      class="btn btn-outline-light"
                      aria-current="page"
                      to="/Cust_all_pdt"
                    >
                      Collections
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#Login">
                    <Link
                      class="btn btn-outline-light"
                      aria-current="page"
                      to="/Cart_list"
                    >
                      Cart Lists
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#about">
                    <Link
                      class="btn btn-outline-light"
                      aria-current="page"
                      to="/Order"
                    >
                      My Bag
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#logout">
                    <Link
                      class="btn btn-outline-light"
                      aria-current="page"
                      to="/Home"
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
      <div class="reg">
        <h1>Orders</h1>
        <hr />
        <>
          <Form onSubmit={Submit}>
            {/* <img
              src={`http://localhost:4003/${values.img.filename}`}
              height="200px"
              width="150px"
            /> */}
            <br></br>
            <label>
              <h4>Product Name : {values.pdtname} </h4>
            </label>
            <br />
            <label>
              <h4>Price : {values.price}</h4>
            </label>
            <br />
            <label>
              Quantity :{" "}
              {" "}
              <input type="number"
                name="quantity"
                min={1}
                value={order.quantity}
                onChange={(e) => {
                  setOrders({
                    ...order, [e.target.name]: e.target.value,
                    totalamount: e.target.value * values.price + ship
                  })
                }} />

            </label>
            <br />
            <label>
              <h4>Total amount :{order.quantity * values.price + ship}</h4>
            </label>
            <br />
            <label>
              <h4>Shipping Charge : {ship} </h4>
            </label>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h4>Shipping Address :</h4>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Shipping Address"
                onChange={Change}
                name="shippingaddress"
                rows={1}
              />
            </Form.Group>
            <label>Estimate Delivery : {date.toString().slice(0, 10)}</label>
            <hr />
            Payment Mode :
            <div class="radio">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Credit Card / Debit Card"
                      name="paymenttype"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={Change}
                      value="card"
                    />
                    <Form.Check
                      inline
                      label="Cash on Delivery"
                      name="paymenttype"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={Change}
                      value="cod"
                    />
                  </div>
                ))}
              </Form>
            </div>
            <button type="Submit">Confirm</button>
          </Form>
        </>
      </div>
    </div>
  );
}

export default Order;
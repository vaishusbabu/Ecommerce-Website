import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import logo from '../Lush.png';
import styles from '../assets/Order.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51PkJjT07k5vAkIOryvrtGFNcxuPeN3bqavsAPaJFvNbABy7PAvXJNDDmo9OOEOgAkfU66MBAPFmbrpcMPGaOJAUh00WKQNUnff');

function CheckoutForm({ order }) {
  const stripe = useStripe();
  const elements = useElements();
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const response = await axios.post('http://localhost:4003/create-payment-intent', {
        amount: order.totalamount * 100,
        payment_method_id: paymentMethod.id,
        order_id: order._id,
      });

      const { clientSecret } = response.data;

      const result = await stripe.confirmCardPayment(clientSecret);

      if (result.error) {
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Payment successful, update order status
          await axios.post(`http://localhost:4003/cardpay/${order._id}`);
          Navigate('/payment-success');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

function Order() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const _id = localStorage.getItem("userid");

  const [values, setValues] = useState({ img: "", pdtname: "", price: 0, quantity: 0 });

  const [ship, setShip] = useState(100);
  const [order, setOrders] = useState({
    pdtid: id,
    quantity: 1,
    paymenttype: "",
    shippingaddress: "",
    deliverydate: new Date(new Date().setDate(new Date().getDate() + 10)),
    totalamount: 0,
  });

  useEffect(() => {
    axios.post(`http://localhost:4003/idfetch/${id}`)
      .then(res => {
        if (res.data.data) {
          setValues(res.data.data);
          setOrders(order => ({
            ...order,
            totalamount: res.data.data.price + ship
          }));
        }
      })
      .catch(console.log);
  }, [id, ship]);

  useEffect(() => {
    setOrders(order => ({
      ...order,
      totalamount: order.quantity * values.price + ship
    }));
  }, [order.quantity, values.price, ship]);

  const Change = (e) => {
    setOrders({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (order.quantity > values.quantity) {
      alert("Quantity exceeds available stock");
      return;
    }
    try {
      const response = await axios.post(`http://localhost:4003/orderlist/${_id}`, order);
      if (response.status === 200) {
        const paymentRoute = response.data.data.paymenttype === 'card' ? '/success' : '/Cash_cod';
        Navigate(paymentRoute);
      }
    } catch (error) {
      alert("Error placing order");
      console.log(error);
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
      <div className={styles.container}>
        <h1 className={styles.title}>Order Details</h1>
        <Form onSubmit={Submit}>
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{values.pdtname}</h3>
            <h4 className={styles.price}>Price: ${values.price}</h4>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                min={1}
                max={values.quantity}
                value={order.quantity}
                onChange={(e) => setOrders({ ...order, [e.target.name]: e.target.value, totalamount: e.target.value * values.price + ship })}
                className={styles.quantityInput}
              />
            </label>
            <h4 className={styles.totalAmount}>Total amount: ${order.totalamount}</h4>
            <h4 className={styles.shippingCharge}>Shipping Charge: ${ship}</h4>
          </div>

          <div className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>Shipping Address:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Shipping Address"
              onChange={Change}
              name="shippingaddress"
              rows={3}
              className={styles.formControl}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Estimate Delivery: {order.deliverydate.toString().slice(0, 10)}</label>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Payment Mode:</label>
            <div className={styles.radioGroup}>
              <Form.Check
                inline
                label="Credit Card / Debit Card"
                name="paymenttype"
                type="radio"
                onChange={Change}
                value="card"
              />
              <Form.Check
                inline
                label="Cash on Delivery"
                name="paymenttype"
                type="radio"
                onChange={Change}
                value="cod"
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>Confirm Order</button>
        </Form>
        <div>

          {order.paymenttype === 'card' && (
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;

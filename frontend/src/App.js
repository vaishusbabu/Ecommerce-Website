
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from './Component/Home';
import Login from './Component/Login';
import About from './Component/About';
import Register from './Component/Register';
import CustHome from './Component/CustHome';
import AdminHome from './Component/AdminHome';
import AdminLogin from './Component/AdminLogin';
import ViewCust from './Component/ViewCust';
import Pdt_add from './Component/Pdt_add';
import ViewPdts from './Component/ViewPdts';
import Edit from './Component/Edit';
import Cust_all_pdt from './Component/Cust_all_pdt';
import Cart_list from './Component/Cart_list';
import Order from './Component/Order';
import Orderlist from './Component/Orderlist';
import COD from './Component/COD';
import CreditCard from './Component/CreditCard';
import BuyAll from './Component/BuyAll';
import CheckoutForm from './Component/CheckOutForm';
import Success from './Component/Success';
import Cancel from './Component/Cancel';
import CustOrder from './Component/CustOrder';

const stripePromise = loadStripe('pk_test_51PkJjT07k5vAkIOryvrtGFNcxuPeN3bqavsAPaJFvNbABy7PAvXJNDDmo9OOEOgAkfU66MBAPFmbrpcMPGaOJAUh00WKQNUnff');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/adminHome' element={<AdminHome />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/CustHome' element={<CustHome />} />
            <Route path='/ViewCust' element={<ViewCust />} />
            <Route path='/Pdt_add' element={<Pdt_add />} />
            <Route path='/View_pdt' element={<ViewPdts />} />
            <Route path='/Edit/:id' element={<Edit />} />
            <Route path='/Cust_all_pdt' element={<Cust_all_pdt />} />
            <Route path='/Cart_list' element={<Cart_list />} />
            <Route path='/Order/:id' element={<Order />} />
            <Route path='/Orderlist' element={<Orderlist />} />
            <Route path='/Cod' element={<COD />} />
            <Route path='/Credit' element={<CreditCard />} />
            <Route path='/buyall' element={<BuyAll />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
            <Route path='/CustOrder' element={<CustOrder />} />
          </Routes>
        </Elements>
      </BrowserRouter>
    </div>
  );
}

export default App;

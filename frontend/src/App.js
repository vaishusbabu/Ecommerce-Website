import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import About from './Component/About';
import Register from './Component/Register';
import CustHome from './Component/CustHome';
import AdminHome from './Component/AdminHome';
import AdminLogin from './Component/AdminLogin';
import ViewCust from './Component/ViewCust';
import Pdt_add from './Component/Pdt_add';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
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

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
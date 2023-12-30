import './App.css';
import Cart from './component/Cart';
import CheckOut from './component/CheckOut';
import ConfirmPassword from './component/ConfirmPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './component/ForgotPassword';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Order from './component/Order';
import Profile from './component/Profile';
import Signin from './component/Signin';
import Singup from './component/Signup';
import Pagenotfound from './component/Pagenotfound';
import Footer from './component/Footer';
import Logout from './component/Logout';
import PrivacyPolciy from './component/PrivacyPolciy';
import TermaandRefund from './component/TermaandRefund';
import FQA from './component/FQA';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/Signin' element={<Signin />} />
          <Route exact path='/Signup' element={<Singup />} />
          <Route exact path='/ForgotPassword' element={<ForgotPassword />} />
          <Route exact path='/ConfirmPassword' element={<ConfirmPassword />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/CheckOut' element={<CheckOut />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Order' element={<Order />} />
          <Route exact path='/*' element={<Pagenotfound />} />
          <Route exact path='/Profile' element={<Profile />} />
          <Route exact path='/Logout' element={<Logout />} />
          <Route exact path='/PrivacyPolciy' element={<PrivacyPolciy />} />
          <Route exact path='/TermaandRefund' element={<TermaandRefund />} />
          <Route exact path='/FQA' element={<FQA />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

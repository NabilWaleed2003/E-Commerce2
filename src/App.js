
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Colliection from './pages/Colliection';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';

import Login from './pages/Login';
import Products from './pages/Products';
import About from './pages/About';

import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
    <ToastContainer />
    <Nav />
    <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/colliection" element={<Colliection />} />
        <Route path="/order" element={<Order />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

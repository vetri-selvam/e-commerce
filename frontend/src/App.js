import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);


  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<Home />}/>
            <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}  />}/>
          </Routes>
        </div>
      </Router>   
      <Footer />
    </div>
  );
}

export default App;

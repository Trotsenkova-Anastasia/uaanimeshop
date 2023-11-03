
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/home'
import CardProduct from './page/cardProduct'
import Cart from './page/cart'
import Category from './page/category'
import Contact from './page/contact'
import DeliveryPayment from './page/deliveryPayment'

function App() {
  
  return (
    
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cardProduct' element={<CardProduct/>}/>
            <Route path='/cart/:id' element={<Cart/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/deliveryPayment' element={<DeliveryPayment/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
    
  );
}



export default App;

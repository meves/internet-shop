import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Banners from './components/Banners/Banners';
import Cart from './components/Content/Cart/Cart';
import Delivery from './components/Content/Delivery/Delivery';
import Main from './components/Content/Main/Main';
import Orders from './components/Content/Orders/Orders';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="delivery" element={<Delivery/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Routes>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Banners/>}/>
            <Route path="cart" element={<Banners/>}/>  
          </Routes>  
        </Sidebar>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Favourite } from './Components/Favourite';
import { Catergory } from './Components/Catergory';
import { CategoryDescription } from './Components/CategoryDescription';
import { NoPage } from './Components/NoPage';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/category/:productName' element={<Catergory />} />
            <Route path='/category-details/:id' element={<CategoryDescription />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;

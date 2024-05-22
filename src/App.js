// App.js
import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Favourite } from './Components/Favourite';
import { Catergory } from './Components/Catergory';
import { CategoryDescription } from './Components/CategoryDescription';
import { NoPage } from './Components/NoPage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

export const CartContext = createContext();

function App() {
  const [data, setData] = useState({
    formattedEmail: ''
  });

  const setEmail = (email) => {
    setData({ formattedEmail: email });
  };
 

  return (
    <CartContext.Provider value={{ data, setEmail }}>
      <Router>
        <Header />
        {console.log("app.js"+data.formattedEmail)}
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home   />} />
            <Route path='/favourite' element={<Favourite email={data.formattedEmail} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
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

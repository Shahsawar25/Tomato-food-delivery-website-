import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOder/placeOder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopUp from './components/LoginPopUP/LoginPopUp.jsx'
const App = () => {

  const [showLogin, setShowLogin]= useState(false)
  return (
 
    <>
     {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar  setShowLogin={setShowLogin} />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App

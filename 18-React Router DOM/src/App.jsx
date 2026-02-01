import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
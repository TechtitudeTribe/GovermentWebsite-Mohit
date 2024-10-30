import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Media from './pages/Media'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Footer from './components/Footer'
import Location from './components/Location'
import InvalidPage from './pages/InvalidPage'
import SearchHouse from './pages/SearchHouse'
import Dashboard from './pages/Dashboard'

function App() {
  const [activeRoute, setActiveRoute] = useState('/')
  
const UpdateRoute = ()=>{
  const location = useLocation()
  useEffect(()=>{
   
    setActiveRoute(location.pathname)
  },[location])
}

  return (
    <>
    <Header/>
    <Navbar active={activeRoute}/>
    <UpdateRoute/>
    {activeRoute != '/' && <Location active={activeRoute}/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/media' element={<Media/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/search' element={<SearchHouse/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<InvalidPage/>}/>
    </Routes>
    <Footer active={activeRoute}/>
    </>
  )
}

export default App

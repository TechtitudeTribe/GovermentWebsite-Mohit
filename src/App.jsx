import { useContext, useEffect, useState } from 'react'
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
import { AuthContext } from './contexts/AuthContext'
import axios from 'axios'
import Attendance from './pages/Attendance'

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [activeRoute, setActiveRoute] = useState('/')
  const {user , setUser } = useContext(AuthContext)
  const verifyLogin = async ()=>{
    if(!user) return
    try {
      const response = await axios.post(`${API_URL}/auth/verify-login`,null,{headers :{
        authorization :`bearer ${user.token}`
      }})
      if(response.status === 200) return
    } catch (error) {
      
      if(error.response.status === 401){
        setUser(null)
        localStorage.setItem('auth',null)
      }else{
        return
      }
    }
  }
const UpdateRoute = ()=>{
  const location = useLocation()
  useEffect(()=>{
   verifyLogin()
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
      <Route path='/download-pariwar-nakal' element={<SearchHouse/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/attendance' element={<Attendance/>}/>
      <Route path='*' element={<InvalidPage/>}/>
    </Routes>
    <Footer active={activeRoute}/>
    </>
  )
}

export default App

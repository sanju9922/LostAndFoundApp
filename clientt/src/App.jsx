/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import DashBoard from './pages/DashBoard'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/about" element={<About/> }/>
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/signin" element={<SignIn/> }/>
        <Route path="/dashboard" element={<DashBoard/> }/>
        <Route path="/projects" element={<Projects/> }/>
      </Routes>
    </BrowserRouter>
  )
}

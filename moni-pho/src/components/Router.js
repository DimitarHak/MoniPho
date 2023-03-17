import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Myblog from '../pages/Myblog';
import MyWork from '../pages/MyWork';
import Navbar from "./Navbar";
import Calendar from "../pages/Calendar";


export default function Router() {
  return ( 
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Myblog' element={<Myblog />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/MyWork' element={<MyWork />} />
      <Route path='/Calendar' element={<Calendar />} />
    </Routes>
  </BrowserRouter>
  );
}

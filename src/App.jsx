import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Banner from './components/banner/Banner'
import AppStore from './components/appStore/AppStore'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { Route,Routes } from 'react-router-dom'

const App = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing:'ease-in-sine',
      delay:100,
    });
    AOS.refresh();
  },[])

  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
        
    </>
  )
}

export default App

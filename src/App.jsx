import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Banner from './components/banner/Banner'

const App = () => {
  return (
    <>
      {/* <div className='bg-white dark'> */}
        <Navbar />
        <Hero />
        <Services />
        <Banner />
      {/* </div> */}
    </>
  )
}

export default App

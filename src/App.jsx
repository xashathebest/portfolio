import React from 'react'
import Hero from './components/hero'
import Nav from './components/Nav'
import Services from './components/services'
import Brands from './components/brands'
import Testimonials from './components/testimonials'
import Expect from './components/expect'
import Footer from './components/footer'

const App = () => {
  return (
    <main className='relative scroll-smooth bg-[#F196E5] w-screen overflow-x-hidden'>
    <Nav/>
    <Hero />
    <Services/>
    <Brands/>
    <Testimonials/>
    <Expect/>
    <Footer/>
    </main>
  )
}

export default App
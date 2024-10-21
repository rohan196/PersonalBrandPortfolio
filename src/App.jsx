import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Phases from './components/phases'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-customGray'>
      <div className="w-full min-h-screen lg:w-11/12 mx-auto p-4 lg:py-8">
        <Navbar />
        <Hero />
        <Projects />
        <TechStack />
        <Testimonials />
        <Phases />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}

export default App

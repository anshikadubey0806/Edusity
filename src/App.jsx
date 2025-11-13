import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
     <Hero/>
     <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
    <section id='programs'>
        < Programs/>
    </section>
      <section id='about'>
        <About/>
      </section>
      <Title subTitle='Gallery' title='Campus Photos'/>
  <section id='campus'>
        <Campus/>
  </section>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
    <section id='contact'>
        <Contact/>
    </section>
      <Footer/>
    </div>
    
    </div>
  )
}

export default App

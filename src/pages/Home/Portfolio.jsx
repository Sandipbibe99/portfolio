import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Leftsider from './Leftsider'

const Portfolio = () => {
  return (
    <div >
         
         <div className='bg-primary px-40 sm:px-5'>
         <Header />
           <Intro />
           <About />
           <Experiences />
           <Projects />
           <Contact />
           <Leftsider />
           <Footer />
         </div>
        
      </div>
  )
}

export default Portfolio
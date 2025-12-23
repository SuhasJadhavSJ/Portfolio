import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Certifications from './components/Certification/Certifications'
import Blogs from './components/Blog/Blogs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <CustomCursor/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Blogs/>
    <Certifications/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
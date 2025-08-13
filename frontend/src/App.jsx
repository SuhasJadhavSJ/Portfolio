import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
<div id="home"><Home /></div>
<div id="about"><About /></div>
<div id="skills"><Skills /></div>
<div id="project"><Projects /></div>
<div id="contact">
  <Contact/>
</div>
    </>
  )
}

export default App

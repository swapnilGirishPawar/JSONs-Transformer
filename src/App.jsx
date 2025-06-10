import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import TrustedClients from './Components/TrustedClients/TrustedClients'
import DevSp from './Components/developerSection/devSp'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import MainPage from './Components/MainPage/MainPage'
import Statistics from './Components/Statistics/Statistics'
import Career from './Components/Career/Career'
import AboutUs from './Components/AboutUs/AboutUs'

const MainContent = () => {
  return (
    <>
      <MainPage />
      <Products/>
      <Statistics />
      <TrustedClients />
      <About/>
      <DevSp/>
    </>
  )
}

const App = () => {
  return (
    <Router basename="/JSONs-Transformer">
      <div>
        <Navbar/>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
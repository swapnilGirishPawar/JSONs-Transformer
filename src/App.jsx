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
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
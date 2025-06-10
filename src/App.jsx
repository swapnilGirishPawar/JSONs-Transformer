import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import TrustedClients from './Components/TrustedClients/TrustedClients'
import DevSp from './Components/developerSection/devSp'
import ComingSoon from './Components/ComingSoon/ComingSoon'

const MainContent = () => {
  return (
    <>
      <div style={{ height: '1400px' }}></div>
      <Products/>
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
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
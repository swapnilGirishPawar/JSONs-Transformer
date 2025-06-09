import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import TrustedClients from './Components/TrustedClients/TrustedClients'
import DevSp from './Components/developerSection/devSp'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Products/>
      <Services/> */}
      {/* Spacer Block */}
      <div style={{ height: '1400px' }}></div> {/* 50px space */}
      <TrustedClients />
      <About/>
      <DevSp/>
    </div>
  )
}

export default App
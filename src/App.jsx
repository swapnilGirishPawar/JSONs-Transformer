import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Products/>
      <Services/> */}
      {/* Spacer Block */}
      <div style={{ height: '1400px' }}></div> {/* 50px space */}
      <About/>
    </div>
  )
}

export default App
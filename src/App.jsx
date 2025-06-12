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
import FAQ from './Components/FAQ/FAQ'
import Newsroom from './Components/Newsroom/Newsroom'
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions'
import Downloads from './Components/Downloads/Downloads'
import ComingSoon from './Components/ComingSoon/ComingSoon'

const MainContent = () => {
  return (
    <>
      <MainPage />
      <Products/>
      <Statistics />
      <TrustedClients />
      <About/>
    </>
  )
}

const SharedLayout = ({ children }) => {
  return (
    <>
      {children}
      <DevSp />
    </>
  )
}

const App = () => {
  return (
    <Router basename="">
      <div>
        <Navbar/>
        <Routes>
          <Route path="/services" element={
            <SharedLayout>
              <Services />
            </SharedLayout>
          } />
          <Route path="/projects" element={
            <SharedLayout>
              <Projects />
            </SharedLayout>
          } />
          <Route path="/career" element={
            <SharedLayout>
              <Career />
            </SharedLayout>
          } />
          <Route path="/about-us" element={
            <SharedLayout>
              <AboutUs />
            </SharedLayout>
          } />
          <Route path="/faq" element={
            <SharedLayout>
              <FAQ />
            </SharedLayout>
          } />
          <Route path="/newsroom" element={
            <SharedLayout>
              <Newsroom />
            </SharedLayout>
          } />
          <Route path="/terms-and-conditions" element={
            <SharedLayout>
              <TermsAndConditions />
            </SharedLayout>
          } />
          <Route path="/downloads" element={
            <SharedLayout>
              <Downloads />
            </SharedLayout>
          } />
          <Route path="/coming-soon" element={
            <SharedLayout>
              <ComingSoon />
            </SharedLayout>
          } />
          <Route path="/" element={
            <SharedLayout>
              <MainContent />
            </SharedLayout>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
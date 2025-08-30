import React, { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NinjaCaseStudy from './components/Projects/Project-Details/NinjaCode'
import MartCaseStudy from './components/Projects/Project-Details/MulMart'
import './App.css'
import AuthCaseStudy from './components/Projects/Project-Details/AuthApp'   
import GreenCart from './components/Projects/Project-Details/GreenCart'   
import Prescripto from './components/Projects/Project-Details/Prescripto'   
import RealEstateCaseStudy from './components/Projects/Project-Details/RealEstateAppCaseStudy'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const location = useLocation()

  const isCaseStudy = location.pathname.includes('/Project-Details')

  return (
    <div className={`${themeName} app`}>
      {!isCaseStudy && <Header />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/Project-Details/ninjacode" element={<NinjaCaseStudy />} />
          <Route path="/Project-Details/MulMart" element={<MartCaseStudy />} />
          <Route path="/Project-Details/AuthApp" element={<AuthCaseStudy />} />
          <Route path="/Project-Details/RealEstateAppCaseStudy" element={<RealEstateCaseStudy />} />
          <Route path="/Project-Details/GreenCart" element={<GreenCart />} />
          <Route path="/Project-Details/Prescripto" element={<Prescripto/>} />
        </Routes>
      </main>

      {!isCaseStudy && <Footer />}
      <ScrollToTop />
    </div>
  )
}

export default App

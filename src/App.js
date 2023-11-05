import React from 'react'
import Home from './pages/Home'
import Faq from './pages/Faq'
import AboutMe from './pages/AboutMe'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
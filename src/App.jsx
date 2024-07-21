'use client'

import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Header from './components/Navbar'
import Hero from './components/Hero'
import Music from './components/Music'
import Video from './components/Video'
import ShowsMerchToCome from './components/ShowsMerchToCome'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Music />
      <Video />
      <ShowsMerchToCome />
      <About />
      <Footer />
    </>
  )
}

export default App

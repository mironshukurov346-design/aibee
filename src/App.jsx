import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from "./components/Hero"
import Sec1 from "./components/Sec1"
import Sec2 from "./components/Sec2"
import Sec3 from "./components/Sec3"
import Sec4 from "./components/Sec4"

export default function App() {
  return (
    <div>
      <Navbar />
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      
      <Footer />
    </div>
  )
}

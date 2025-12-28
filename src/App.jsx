import React from "react"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/Programs"
import Tittle from "./Components/Tittle/title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subtitle="OUR PROGRAMS" title="What we offer" />
        <Programs />
        <About />
        <Tittle subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Tittle subtitle="Testimonials" title="what student says" />
        <Testimonials />
        <Tittle subtitle="Contact  Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </div>
  )
}

export default App


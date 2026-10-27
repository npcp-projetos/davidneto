import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portifolio from "./sections/portifolio"
import ProcessAndTestimonials from "./sections/about"
import Contact from "./sections/contact"
import Footer from "./sections/footer"

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <About />
      <Portifolio />
      <ProcessAndTestimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import "./App.css"
import { LanguageProvider } from "./context/LanguageContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portifolio from "./sections/portifolio"
import ProcessAndTestimonials from "./sections/about"
import Contact from "./sections/contact"
import Footer from "./sections/footer"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-off-white">
        <Navbar />
        <Hero />
        <About />
        <Portifolio />
        <ProcessAndTestimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

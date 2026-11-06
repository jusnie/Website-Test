import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Week from './components/Week.jsx'
import Process from './components/Process.jsx'
import Proof from './components/Proof.jsx'
import Tools from './components/Tools.jsx'
import Rate from './components/Rate.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Week />
        <Process />
        <Proof />
        <Tools />
        <Rate />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

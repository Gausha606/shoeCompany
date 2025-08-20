"use client"
import { useEffect, useState } from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from './Accordion'
 

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
 
  useEffect(() => {
    const initAOS = () => {
      Aos.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        mirror: false
      });
      // सभी एलिमेंट्स की पोजीशन को री-कैलकुलेट करें
       Aos.refreshHard();
    };

    // 'load' इवेंट तब फायर होता है जब पूरा पेज (इमेज, स्क्रिप्ट, आदि) लोड हो जाता है
    if (document.readyState === 'complete') {
      initAOS();
    } else {
      window.addEventListener('load', initAOS);
    }

    // कॉम्पोनेन्ट अनमाउंट होने पर इवेंट लिसनर को हटा दें
    return () => {
      window.removeEventListener('load', initAOS);
    };
  }, []); // खाली डिपेंडेंसी अरे

  return (
    <div >
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    <main onClick={(e)=>setIsMenuOpen(false)} >
    <Hero/>
    <HowItWorks/>
    <About/>
    <Testimonials/>
    <Contact/>
    <Accordion />
    </main>
    <Footer/>
    </div>
  )
}

export default App

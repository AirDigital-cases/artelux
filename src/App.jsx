import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Brands from './components/Brands'
import Differentials from './components/Differentials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App(){
  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio')
    if(el) el.scrollIntoView({behavior:'smooth'})
  }

  const requestQuote = () => {
    const el = document.querySelector('#footer')
    if(el) el.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
      <Hero onPortfolio={scrollToPortfolio} onQuote={requestQuote} />
      <main>
        <About />
        <Services />
        <div id="portfolio"><Portfolio /></div>
        <Brands />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

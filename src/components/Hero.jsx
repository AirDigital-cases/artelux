import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onPortfolio, onQuote }){
  return (
    <header className="min-h-[80vh] flex items-center" style={{background:'#06070a'}}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.8}}>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight gold-text">Artelux</h1>
            <h2 className="mt-6 text-3xl lg:text-4xl font-extrabold text-white">“Grandes letreiros em grandes alturas.”</h2>
            <p className="mt-6 text-gray-300 max-w-xl">A Artelux transforma fachadas, letreiros e estruturas externas em projetos modernos, seguros e de alto impacto visual.</p>
            <div className="mt-8 flex gap-4">
              <button onClick={onPortfolio} className="px-6 py-3 bg-transparent border border-gray-700 glass rounded-md text-white">Ver obras realizadas</button>
              <button onClick={onQuote} className="px-6 py-3 bg-gold text-black rounded-md font-semibold">Solicitar orçamento</button>
            </div>
          </motion.div>
          <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.9}} className="order-first lg:order-last">
            <div className="w-full h-64 lg:h-96 rounded-md overflow-hidden gold-border border glass flex items-end p-6" style={{backgroundImage:'linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))'}}>
              <div>
                <p className="text-sm text-gray-300">Projetos recentes</p>
                <h3 className="text-2xl font-bold">Estrutura metálica elevadas</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

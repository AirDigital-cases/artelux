import React from 'react'
import { whatsappLink } from '../data'

export default function CTA(){
  return (
    <section className="py-16 mt-8" style={{background:'#050608'}}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h3 className="text-3xl font-bold gold-text">Grandes projetos pedem atendimento à altura.</h3>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Quando a sua empresa precisa de presença visual, escala estrutural e acabamento premium, o próximo passo é falar com quem executa isso todos os dias.</p>
        <div className="mt-6">
          <a
            className="inline-block px-6 py-3 bg-gold text-black rounded font-semibold"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  )
}

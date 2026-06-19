import React from 'react'

export default function CTA(){
  return (
    <section className="py-16 mt-8" style={{background:'#050608'}}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h3 className="text-3xl font-bold gold-text">Sua marca merece ser vista de longe.</h3>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Conte com a Artelux para transformar sua fachada, letreiro ou estrutura externa em um projeto moderno, seguro e impactante.</p>
        <div className="mt-6">
          <a className="inline-block px-6 py-3 bg-gold text-black rounded font-semibold" href="#">Solicitar orçamento no WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

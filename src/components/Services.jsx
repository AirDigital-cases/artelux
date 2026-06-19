import React from 'react'
import ServiceCard from './ServiceCard'
import SectionCta from './SectionCta'
import { services } from '../data'

export default function Services(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h3 className="text-2xl font-bold gold-text">Serviços</h3>
        <p className="mt-2 max-w-3xl text-gray-300">Cada frente de atuação agora é ilustrada com obra real da Artelux, valorizando altura, iluminação, impacto visual e acabamento estrutural.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
        <SectionCta />
      </div>
    </section>
  )
}

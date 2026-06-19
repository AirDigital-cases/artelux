import React from 'react'
import SectionCta from './SectionCta'
import { differentials } from '../data'

export default function Differentials(){
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h4 className="text-xl font-bold gold-text">Diferenciais</h4>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentials.map((d,i) => (
            <li key={i} className="p-4 bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded">{d}</li>
          ))}
        </ul>
        <SectionCta />
      </div>
    </section>
  )
}

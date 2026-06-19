import React from 'react'
import BrandCard from './BrandCard'
import { brands } from '../data'

export default function Brands(){
  return (
    <section className="py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Clientes atendidos</p>
        <h4 className="mt-3 text-3xl font-black text-white">Marcas identificadas nas obras fotografadas</h4>
        <p className="mt-3 max-w-3xl text-gray-300">Sempre que possível, relacionamos as marcas reais visíveis nas instalações. Nesta primeira curadoria, Golden Tulip, Prime Car Curitiba, RC7 Motors e Madero já aparecem como prova visual de execução.</p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => <BrandCard key={brand.id} brand={brand} />)}
        </div>
      </div>
    </section>
  )
}

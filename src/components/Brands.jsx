import React from 'react'
import BrandCard from './BrandCard'
import { brands } from '../data'

export default function Brands(){
  return (
    <section className="py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <h4 className="text-xl font-bold gold-text">Marcas que já confiaram na Artelux</h4>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {brands.map(b => <BrandCard key={b.id} brand={b} />)}
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolio } from '../data'

export default function Portfolio(){
  const [filter, setFilter] = useState('Todos')
  const cats = ['Todos', 'letreiros', 'fachadas', 'pergolados', 'coberturas']
  const items = filter === 'Todos' ? portfolio : portfolio.filter(p => p.cat === filter)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h3 className="text-2xl font-bold gold-text">Obras realizadas</h3>
        <div className="mt-4 flex gap-3 flex-wrap">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1 rounded ${filter===c? 'bg-gold text-black':'bg-[rgba(255,255,255,0.02)] text-gray-300'}`}>{c}</button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => <PortfolioItem key={it.id} item={it} />)}
        </div>
      </div>
    </section>
  )
}

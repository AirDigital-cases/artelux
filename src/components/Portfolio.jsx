import React, { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioModal from './PortfolioModal'
import { categoryMeta, portfolio } from '../data'

export default function Portfolio(){
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(null)
  const categories = ['all', ...Object.keys(categoryMeta)]
  const items = filter === 'all' ? portfolio : portfolio.filter((project) => project.cat === filter)

  useEffect(() => {
    if (selectedId && !items.some((project) => project.id === selectedId)) {
      setSelectedId(items[0]?.id ?? null)
    }
  }, [items, selectedId])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Portfólio</p>
            <h3 className="mt-3 text-3xl font-black text-white lg:text-4xl">Obras reais organizadas por categoria</h3>
            <p className="mt-3 max-w-3xl text-gray-300">Substituímos todos os placeholders por fotos reais da Artelux e priorizamos altura, iluminação, grandes letreiros, estruturas metálicas e acabamentos de maior impacto visual.</p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
            {items.length} obra{items.length > 1 ? 's' : ''} em exibição
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                filter === category
                  ? 'bg-[#d4af37] text-black'
                  : 'border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.07]'
              }`}
            >
              {category === 'all' ? 'Todas' : categoryMeta[category].label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <PortfolioItem
              key={item.id}
              item={item}
              featured={filter === 'all' && item.featured}
              onOpen={setSelectedId}
            />
          ))}
        </div>
      </div>
      <PortfolioModal
        items={items}
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
        onSelect={setSelectedId}
      />
    </section>
  )
}

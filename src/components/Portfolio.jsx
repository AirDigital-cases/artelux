import React, { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioModal from './PortfolioModal'
import SectionCta from './SectionCta'
import { categoryMeta, portfolio } from '../data'

export default function Portfolio(){
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(null)
  const categories = ['all', ...Object.keys(categoryMeta)]
  const defaultFeaturedItem = portfolio.find((project) => project.featured) ?? portfolio[0]
  const featuredItem = filter === 'all'
    ? defaultFeaturedItem
    : portfolio.find((project) => project.cat === filter) ?? defaultFeaturedItem
  const filteredItems = filter === 'all'
    ? portfolio.filter((project) => project.id !== featuredItem.id)
    : portfolio.filter((project) => project.cat === filter && project.id !== featuredItem.id)
  const activeCategory = filter === 'all' ? null : categoryMeta[filter]

  useEffect(() => {
    const modalItems = [featuredItem, ...filteredItems]

    if (selectedId && !modalItems.some((project) => project.id === selectedId)) {
      setSelectedId(modalItems[0]?.id ?? null)
    }
  }, [featuredItem, filteredItems, selectedId])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Portfólio</p>
            <h3 className="mt-3 text-3xl font-black text-white lg:text-4xl">Uma vitrine de obras executadas com escala, rigor técnico e presença premium.</h3>
            <p className="mt-3 max-w-3xl text-gray-300">Redesenhamos a galeria para funcionar como showroom de projetos: enquadramentos consistentes, cards curados e uma leitura visual mais próxima de arquitetura e design de alto padrão.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.95fr)]">
          <PortfolioItem
            item={featuredItem}
            featured
            onOpen={setSelectedId}
          />

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">Curadoria visual</p>
            <h4 className="mt-4 text-2xl font-black text-white">Projeto destaque da vitrine</h4>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              {filter === 'all'
                ? 'O Golden Tulip abre a seleção por combinar altura, escala arquitetônica e leitura de marca com padrão visual premium.'
                : `${featuredItem.title} assume o destaque da vitrine ao representar a categoria ${activeCategory?.label.toLowerCase()} com presença visual, acabamento e enquadramento consistentes.`}
            </p>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">Filtrar projetos</p>
              <div className="mt-4 flex flex-wrap gap-3">
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
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-black/[0.16] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                {activeCategory ? `Categoria ativa: ${activeCategory.label}` : 'Vitrine completa'}
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                {activeCategory
                  ? activeCategory.desc
                  : 'Explore a seleção completa de letreiros, fachadas, pergolados e coberturas com linguagem visual unificada e apresentação de showroom.'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              item={item}
              onOpen={setSelectedId}
            />
          ))}
        </div>
        <SectionCta />
      </div>
      <PortfolioModal
        items={[featuredItem, ...filteredItems]}
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
        onSelect={setSelectedId}
      />
    </section>
  )
}

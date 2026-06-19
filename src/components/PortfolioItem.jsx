import React from 'react'
import { motion } from 'framer-motion'
import { categoryMeta } from '../data'

export default function PortfolioItem({ item, featured = false, onOpen }){
  const category = categoryMeta[item.cat]

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item.id)}
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.45}}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] text-left shadow-[0_24px_60px_rgba(0,0,0,0.2)] ${featured ? 'xl:col-span-2' : ''}`}
      aria-label={`Abrir detalhes da obra ${item.title}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-[30rem]' : 'h-80'}`}>
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{objectPosition: item.imagePosition}}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.04),rgba(5,6,8,0.35)_45%,rgba(5,6,8,0.88)_100%)]" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-black/[0.25] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
            {category.label}
          </span>
          {featured ? (
            <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3dea0]">
              Hero do acervo
            </span>
          ) : null}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          <div className="rounded-[24px] border border-white/10 bg-black/30 p-5 backdrop-blur-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">{item.client}</p>
                <h4 className="mt-2 text-2xl font-black text-white">{item.title}</h4>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                {item.location}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200">{item.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-white/[0.85]">
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
              <span>Ampliar obra</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">+</span>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

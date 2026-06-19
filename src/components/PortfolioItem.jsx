import React from 'react'
import { motion } from 'framer-motion'
import { categoryMeta } from '../data'

export default function PortfolioItem({ item, featured = false, onOpen }){
  const category = categoryMeta[item.cat]
  const cardDescription = item.cardDesc ?? item.desc

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item.id)}
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.45}}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090b0e] text-left shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(0,0,0,0.38)]`}
      aria-label={`Abrir detalhes da obra ${item.title}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[4/5]'}`}>
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
          style={{objectPosition: item.imagePosition}}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/15 bg-black/[0.25] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
            {category.label}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          <div className={`rounded-[24px] border border-white/10 bg-black/[0.24] backdrop-blur-md ${featured ? 'max-w-[65%] p-6 lg:p-7' : 'p-5'}`}>
            <h4 className={`font-black text-white ${featured ? 'text-3xl lg:text-[2.1rem]' : 'text-2xl'}`}>{item.title}</h4>
            <p className={`mt-3 overflow-hidden text-sm leading-6 text-gray-200 ${featured ? 'max-w-2xl' : 'h-12'}`}>
              {cardDescription}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f3dea0]">
              <span>{featured ? 'Descobrir projeto' : 'Ver projeto'}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">+</span>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

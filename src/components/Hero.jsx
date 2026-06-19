import React from 'react'
import { motion } from 'framer-motion'
import { brands, heroHighlights, heroProject, showcaseMetrics } from '../data'

export default function Hero({ onPortfolio, onQuote }){
  return (
    <header className="relative overflow-hidden" style={{background:'#050608'}}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="container relative mx-auto px-6 py-16 lg:px-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.8}}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b64a]">Portfolio real Artelux</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] text-white lg:text-7xl">Comunicação visual e estruturas metálicas que vendem antes da entrada.</h1>
            <h2 className="mt-6 max-w-2xl text-2xl font-bold text-white/95 lg:text-3xl">Selecionamos automaticamente a obra de maior impacto do acervo para abrir o site.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 lg:text-lg">A Artelux apresenta obras reais com foco em altura, fachadas iluminadas, grandes letreiros e acabamento premium para empresas que precisam ser vistas de longe e lembradas de perto.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onPortfolio} className="rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5">
                Ver obras realizadas
              </button>
              <button onClick={onQuote} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10">
                Solicitar orçamento
              </button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {showcaseMetrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white">{metric.value}</div>
                  <div className="mt-2 text-sm leading-6 text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Marcas identificadas nas obras</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span key={brand.id} className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/[0.08] px-4 py-2 text-sm text-[#f3dea0]">
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{scale:0.96, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.9}} className="order-first lg:order-last">
            <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:min-h-[620px]">
              <img
                src={heroProject.image}
                alt={heroProject.alt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{objectPosition: heroProject.imagePosition}}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.08),rgba(6,7,10,0.2)_35%,rgba(6,7,10,0.88)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Hero selecionado automaticamente
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="max-w-xl rounded-[28px] border border-white/10 bg-black/[0.35] p-6 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b64a]">{heroProject.client}</p>
                  <h3 className="mt-3 text-3xl font-black text-white lg:text-4xl">{heroProject.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-200 lg:text-base">{heroProject.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {heroProject.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

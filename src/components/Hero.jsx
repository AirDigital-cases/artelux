import React from 'react'
import { motion } from 'framer-motion'
import { authorityItems, brands, heroProject, showcaseMetrics, whatsappLink } from '../data'

export default function Hero({ onPortfolio }){
  return (
    <header className="relative overflow-hidden" style={{background:'#050608'}}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="container relative mx-auto px-6 py-16 lg:px-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.8}}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b64a]">Artelux | comunicação visual premium</p>
            <h1 className="mt-4 max-w-5xl text-6xl font-black leading-[0.9] text-white lg:text-[6.2rem] xl:text-[7.4rem]">
              Grandes letreiros
              <br />
              em grandes alturas.
            </h1>
            <h2 className="mt-6 max-w-3xl text-xl font-bold leading-8 text-white/95 lg:text-3xl lg:leading-[1.25]">
              Projetamos, fabricamos e instalamos letreiros, fachadas, pergolados e coberturas que transformam empresas em referências visuais.
            </h2>
            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {authorityItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white">
                  <span className="text-[#d4af37]">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d4af37] px-7 py-4 text-base font-semibold text-black shadow-[0_16px_40px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Solicitar orçamento
              </a>
              <button onClick={onPortfolio} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10">
                Ver obras realizadas
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
            <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:min-h-[580px]">
              <img
                src={heroProject.image}
                alt={heroProject.alt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{objectPosition: heroProject.imagePosition}}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.16),rgba(6,7,10,0.28)_35%,rgba(6,7,10,0.9)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Obra em altura | Golden Tulip
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="max-w-xl rounded-[28px] border border-white/10 bg-black/[0.35] p-6 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b64a]">{heroProject.client}</p>
                  <h3 className="mt-3 text-2xl font-black text-white lg:text-3xl">{heroProject.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-200 lg:text-base">O Golden Tulip permanece no Hero como apoio visual para reforçar escala, altura e presença de marca instalada.</p>
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

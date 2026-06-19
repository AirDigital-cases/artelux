import React from 'react'
import { whatsappLink } from '../data'

export default function SectionCta({ className = '' }){
  return (
    <div className={`mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 ${className}`}>
      <p className="text-sm text-gray-300">Pronto para transformar sua marca em uma referência visual de alto impacto?</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
      >
        Fale com um especialista
      </a>
    </div>
  )
}

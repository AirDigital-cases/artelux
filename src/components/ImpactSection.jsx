import React from 'react'
import SectionCta from './SectionCta'

export default function ImpactSection(){
  return (
    <section className="py-14">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(255,255,255,0.03)_32%,rgba(255,255,255,0.02))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.18)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Impacto</p>
              <h3 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] text-white lg:text-6xl">
                Nós não instalamos apenas estruturas.
                <br />
                Nós construímos presença.
              </h3>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/[0.16] p-6">
              <p className="text-base leading-7 text-gray-200">
                Há anos transformando fachadas, empresas e marcas em referências visuais através de projetos executados com precisão, segurança e acabamento profissional.
              </p>
            </div>
          </div>
          <SectionCta className="mt-8 bg-black/[0.12]" />
        </div>
      </div>
    </section>
  )
}

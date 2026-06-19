import React from 'react'

export default function BrandCard({brand}){
  return (
    <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
      <div className="relative h-40 overflow-hidden">
        <img
          src={brand.image}
          alt={brand.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{objectPosition: brand.imagePosition}}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.55))]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
          Marca visível
        </div>
      </div>
      <div className="p-5">
        <div className="text-lg font-bold text-white">{brand.name}</div>
        <div className="mt-1 text-sm text-[#d4af37]">{brand.sector}</div>
        <p className="mt-3 text-sm leading-6 text-gray-300">{brand.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {brand.projects.map((project) => (
            <span key={project} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-200">
              {project}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

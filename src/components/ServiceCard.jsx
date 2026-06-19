import React from 'react'

export default function ServiceCard({service}){
  return (
    <article className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-3 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden rounded-[20px]">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{objectPosition: service.imagePosition}}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.55))]" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-2xl backdrop-blur-md">
          {service.icon}
        </div>
      </div>
      <div className="p-3 pb-2">
        <h4 className="text-xl font-semibold text-white">{service.title}</h4>
        <p className="mt-3 text-sm leading-6 text-gray-300">{service.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-200">
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

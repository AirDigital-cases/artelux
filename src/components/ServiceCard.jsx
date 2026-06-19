import React from 'react'

export default function ServiceCard({service}){
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-gray-800 p-6 rounded-lg hover:scale-[1.01] transition-transform">
      <div className="text-4xl">{service.icon}</div>
      <h4 className="mt-4 text-xl font-semibold">{service.title}</h4>
      <p className="mt-2 text-gray-300">{service.desc}</p>
      <div className="mt-4 h-40 bg-cover bg-center rounded-md" style={{backgroundImage:`url(${service.image})`}} />
    </div>
  )
}

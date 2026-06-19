import React from 'react'

export default function PortfolioItem({item}){
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded-md overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{backgroundImage:`url(${item.img})`}} />
      <div className="p-4">
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-sm text-gray-300">{item.desc}</p>
        <span className="mt-2 inline-block text-xs text-gray-500">{item.cat}</span>
      </div>
    </div>
  )
}

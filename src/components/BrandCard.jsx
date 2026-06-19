import React from 'react'

export default function BrandCard({brand}){
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-gray-800 p-6 rounded flex items-center justify-center">
      <div className="text-gray-300 font-semibold">{brand.name}</div>
    </div>
  )
}

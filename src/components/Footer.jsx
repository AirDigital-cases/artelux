import React from 'react'

export default function Footer(){
  return (
    <footer id="footer" className="py-8 border-t border-gray-900">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-bold gold-text">Artelux</div>
          <div className="text-sm text-gray-500 mt-2">Letreiros • Fachadas • Pergolados • Coberturas</div>
        </div>
        <div className="flex gap-6 items-center text-sm text-gray-300">
          <div>WhatsApp: <span className="text-gray-100">(00) 0 0000-0000</span></div>
          <div>Instagram: <span className="text-gray-100">@artelux</span></div>
          <div>Atendimento: São Paulo / Região</div>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Artelux. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

import React from 'react'
import { instagramHandle, whatsappLink, whatsappNumber } from '../data'

export default function Footer(){
  return (
    <footer id="footer" className="py-8 border-t border-gray-900">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-bold gold-text">Artelux</div>
          <div className="text-sm text-gray-500 mt-2">Letreiros • Fachadas • Pergolados • Coberturas</div>
        </div>
        <div className="flex flex-col items-center gap-3 text-sm text-gray-300 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          <div>
            WhatsApp:{' '}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-gray-100">
              {whatsappNumber}
            </a>
          </div>
          <div>
            Instagram:{' '}
            <a href="https://instagram.com/artelux" target="_blank" rel="noreferrer" className="text-gray-100">
              {instagramHandle}
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Artelux. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

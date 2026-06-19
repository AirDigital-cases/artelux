import React from 'react'
import { whatsappLink, whatsappNumberIntl } from '../data'

export default function FloatingWhatsApp(){
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar com a Artelux no WhatsApp ${whatsappNumberIntl}`}
      className="fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_18px_45px_rgba(37,211,102,0.32)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.4 2.18 11.84c0 1.74.46 3.44 1.33 4.95L2 22l5.39-1.49a9.84 9.84 0 0 0 4.63 1.18h.01c5.43 0 9.85-4.41 9.85-9.84 0-2.63-1.03-5.1-2.83-6.94Zm-7.02 15.1h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.2.88.86-3.12-.2-.32a8.18 8.18 0 0 1-1.25-4.3c0-4.51 3.67-8.18 8.19-8.18 2.18 0 4.23.84 5.77 2.38a8.12 8.12 0 0 1 2.39 5.8c0 4.51-3.67 8.18-8.18 8.18Zm4.48-6.11c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.17-.71-.63-1.2-1.4-1.34-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.48-.4-.42-.54-.43l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.61.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </span>
    </a>
  )
}

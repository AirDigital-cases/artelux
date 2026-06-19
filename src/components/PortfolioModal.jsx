import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categoryMeta } from '../data'

export default function PortfolioModal({ items, selectedId, onClose, onSelect }){
  const selectedIndex = items.findIndex((item) => item.id === selectedId)
  const selectedItem = selectedIndex >= 0 ? items[selectedIndex] : null

  useEffect(() => {
    if (!selectedItem) return undefined

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight' && items.length > 1) {
        const nextIndex = (selectedIndex + 1) % items.length
        onSelect(items[nextIndex].id)
      }

      if (event.key === 'ArrowLeft' && items.length > 1) {
        const previousIndex = (selectedIndex - 1 + items.length) % items.length
        onSelect(items[previousIndex].id)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [items, onClose, onSelect, selectedIndex, selectedItem])

  if (!selectedItem) return null

  const nextItem = () => {
    if (items.length < 2) return
    const nextIndex = (selectedIndex + 1) % items.length
    onSelect(items[nextIndex].id)
  }

  const previousItem = () => {
    if (items.length < 2) return
    const previousIndex = (selectedIndex - 1 + items.length) % items.length
    onSelect(items[previousIndex].id)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        onClick={onClose}
      >
        <motion.div
          className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0c0f] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          initial={{scale: 0.96, opacity: 0, y: 24}}
          animate={{scale: 1, opacity: 1, y: 0}}
          exit={{scale: 0.98, opacity: 0, y: 12}}
          transition={{duration: 0.25}}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/[0.35] px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
          >
            Fechar
          </button>
          <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[320px] bg-black lg:min-h-[720px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="h-full w-full object-cover"
                style={{objectPosition: selectedItem.imagePosition}}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.3)_55%,rgba(0,0,0,0.65)_100%)]" />
              {items.length > 1 ? (
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={previousItem}
                    className="rounded-full border border-white/10 bg-black/[0.35] px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    Anterior
                  </button>
                  <div className="rounded-full border border-white/10 bg-black/[0.35] px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                    {selectedIndex + 1} / {items.length}
                  </div>
                  <button
                    type="button"
                    onClick={nextItem}
                    className="rounded-full border border-white/10 bg-black/[0.35] px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    Proxima
                  </button>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col justify-between p-6 lg:p-8">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3dea0]">
                    {categoryMeta[selectedItem.cat].label}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300">
                    {selectedItem.location}
                  </span>
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">{selectedItem.client}</p>
                <h4 className="mt-3 text-3xl font-black text-white">{selectedItem.title}</h4>
                <p className="mt-5 text-base leading-7 text-gray-300">{selectedItem.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedItem.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/[0.85]">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Leitura curada do projeto</div>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Esta obra foi priorizada por combinar imagem real, qualidade visual, presença de marca instalada e potencial comercial dentro da categoria.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

'use client'
import { useState, useEffect, useCallback } from 'react'
import { imagenes } from '@/data/galeria'
import './galeria.css'

const categorias = [
  { id: 'todas',      label: 'Todos' },
  { id: 'marmol',     label: 'Mármol' },
  { id: 'columbario', label: 'Columbarios' },
  { id: 'mdf',        label: 'MDF & Acrílico' },
]

export default function Galeria() {
  const [activa,   setActiva]   = useState('todas')
  const [lightbox, setLightbox] = useState(null)   // índice de la imagen abierta

  const filtradas = activa === 'todas'
    ? imagenes
    : imagenes.filter(i => i.categoria === activa)

  const cerrar    = () => setLightbox(null)
  const anterior  = useCallback(() => setLightbox(i => (i - 1 + filtradas.length) % filtradas.length), [filtradas.length])
  const siguiente = useCallback(() => setLightbox(i => (i + 1) % filtradas.length), [filtradas.length])

  // Navegar con teclado
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape')     cerrar()
      if (e.key === 'ArrowLeft')  anterior()
      if (e.key === 'ArrowRight') siguiente()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, anterior, siguiente])

  // Bloquear scroll del body cuando hay lightbox abierto
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section className="galeria" id="portafolio">
      <div className="container">

        <div className="galeria__header">
          <p className="section-subtitle">Nuestros trabajos</p>
          <h2 className="section-title">Portafolio</h2>
          <div className="section-divider" style={{ margin: '1.5rem auto 2.5rem' }} />
        </div>

        <div className="galeria__filtros" role="tablist">
          {categorias.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activa === cat.id}
              className={`galeria__filtro ${activa === cat.id ? 'galeria__filtro--activo' : ''}`}
              onClick={() => setActiva(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="galeria__grid">
          {filtradas.map((img, i) => (
            <button
              key={img.src}
              className="galeria__item"
              onClick={() => setLightbox(i)}
              aria-label={`Ver: ${img.titulo}`}
            >
              <img src={img.src} alt={img.titulo} loading="lazy" />
              <div className="galeria__hover">
                <span className="galeria__hover-icon">+</span>
                <span className="galeria__hover-title">{img.titulo}</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="lightbox" onClick={cerrar} role="dialog" aria-modal="true">

          <button className="lightbox__close" onClick={cerrar} aria-label="Cerrar">✕</button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); anterior() }}
            aria-label="Anterior"
          >‹</button>

          <div className="lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtradas[lightbox].src}
              alt={filtradas[lightbox].titulo}
            />
            <p className="lightbox__caption">
              {filtradas[lightbox].titulo}
              <span className="lightbox__counter">{lightbox + 1} / {filtradas.length}</span>
            </p>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); siguiente() }}
            aria-label="Siguiente"
          >›</button>

        </div>
      )}
    </section>
  )
}

'use client'
import { useState, useEffect } from 'react'
import './header.css'

const navLinks = [
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio',label: 'Portafolio' },
  { href: '#contacto',  label: 'Contacto' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">

        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <img src="/logos/ve.jpg" alt="Laser Artístico" width={44} height={44} />
          <span>Laser Artístico</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="header__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary header__cta" onClick={closeMenu}>
            Cotizar
          </a>
        </nav>

        <button
          className={`header__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>

      </div>
    </header>
  )
}

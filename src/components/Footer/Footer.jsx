import './footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logos/ve.jpg" alt="Laser Artístico" className="footer__logo" />
            <span className="footer__name">Laser Artístico</span>
          </div>

          <nav className="footer__nav">
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="footer__flags">
            <img src="/logos/ve.jpg"  alt="Venezuela" title="Venezuela" />
            <img src="/logos/co.jpg"  alt="Colombia"  title="Colombia" />
            <img src="/logos/usa.jpg" alt="EE.UU."    title="Estados Unidos" />
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Laser Artístico. Todos los derechos reservados.</p>
          <a href="https://laserartistico.net" target="_blank" rel="noopener noreferrer">
            laserartistico.net
          </a>
        </div>

      </div>
    </footer>
  )
}

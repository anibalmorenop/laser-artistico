import './hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__pretitle">Grabado Láser de Precisión</p>
        <h1 className="hero__title">
          Arte que<br />
          <span className="hero__gold">perdura</span>
        </h1>
        <p className="hero__desc">
          Grabamos en mármol, MDF y acrílico con tecnología láser de alta
          precisión. Lápidas, placas conmemorativas y trabajos a medida en
          Venezuela, Colombia y EE.UU.
        </p>
        <div className="hero__ctas">
          <a href="#portafolio" className="btn-primary">Ver trabajos</a>
          <a href="#contacto"   className="btn-outline">Solicitar cotización</a>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

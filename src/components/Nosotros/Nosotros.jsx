import './nosotros.css'

export default function Nosotros() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="container">
        <div className="nosotros__grid">

          <div className="nosotros__text">
            <p className="section-subtitle">Quiénes somos</p>
            <h2 className="section-title">Tradición y<br />tecnología láser</h2>
            <div className="section-divider" />
            <p className="nosotros__p">
              Laser Artístico es un taller especializado en grabado láser de alta precisión.
              Cada diseño es creado y grabado directamente por el maestro artesano, garantizando
              atención personalizada y resultados únicos que perduran en el tiempo.
            </p>
            <p className="nosotros__p">
              Trabajamos el mármol, la madera MDF y el acrílico con una máquina de grabado
              láser de gran formato. Desde lápidas para cementerios y placas para columbarios,
              hasta medallas, trofeos y placas conmemorativas totalmente a medida.
            </p>
            <p className="nosotros__p">
              Con presencia en <strong>Venezuela</strong>, <strong>Colombia</strong> y{' '}
              <strong>Estados Unidos</strong>, llevamos el arte del grabado láser a quienes
              más lo necesitan.
            </p>
            <div className="nosotros__flags">
              <img src="/logos/ve.jpg"  alt="Venezuela" />
              <img src="/logos/co.jpg"  alt="Colombia" />
              <img src="/logos/usa.jpg" alt="Estados Unidos" />
            </div>
          </div>

          <div className="nosotros__gallery">
            <div className="nosotros__img nosotros__img--main">
              <img src="/img/lapidas/Carora.jpg" alt="Lápida grabada en mármol" />
            </div>
            <div className="nosotros__img nosotros__img--secondary">
              <img src="/img/tallados/VENEPAN.jpg" alt="Placa grabada en MDF" />
            </div>
            <div className="nosotros__img nosotros__img--accent">
              <img src="/img/lapidas/20221016_143808-COLLAGE.jpg" alt="Colección de trabajos" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

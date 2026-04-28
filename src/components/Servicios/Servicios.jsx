import './servicios.css'

const servicios = [
  {
    num: '01',
    titulo: 'Lápidas en Mármol',
    desc: 'Grabado láser de alta precisión sobre mármol natural. Nombres, fechas, epitafios e imágenes. Acabado duradero que resiste la intemperie y el paso del tiempo.',
  },
  {
    num: '02',
    titulo: 'Placas para Columbarios',
    desc: 'Placas de menor formato para nichos y columbarios donde reposan las cenizas de seres queridos. Diseños delicados y personalizados con cada detalle que el cliente desee.',
  },
  {
    num: '03',
    titulo: 'Placas Conmemorativas',
    desc: 'Placas de inauguración, reconocimiento o conmemoración en mármol o acrílico. Ideales para instituciones, empresas, iglesias y eventos especiales.',
  },
  {
    num: '04',
    titulo: 'MDF y Acrílico Custom',
    desc: 'Medallas, trofeos, reconocimientos y piezas decorativas grabadas en MDF o acrílico. Producciones en serie para torneos o piezas únicas completamente a tu medida.',
  },
]

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">

        <div className="servicios__header">
          <p className="section-subtitle">Lo que hacemos</p>
          <h2 className="section-title">Nuestros servicios</h2>
          <div className="section-divider" style={{ margin: '1.5rem auto 0' }} />
        </div>

        <div className="servicios__grid">
          {servicios.map(s => (
            <div key={s.num} className="servicio">
              <span className="servicio__num">{s.num}</span>
              <h3 className="servicio__titulo">{s.titulo}</h3>
              <p  className="servicio__desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

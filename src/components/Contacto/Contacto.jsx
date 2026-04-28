'use client'
import { useState, useRef } from 'react'
import './contacto.css'

// ── Reemplaza con el número real de WhatsApp (código de país + número, sin espacios ni +)
const WHATSAPP = '584121234567'

const tipos = [
  'Lápida en mármol',
  'Placa para columbario',
  'Placa conmemorativa',
  'Grabado en MDF',
  'Grabado en acrílico',
  'Otro',
]

const INITIAL = { nombre: '', telefono: '', tipo: '', mensaje: '', honeypot: '' }

export default function Contacto() {
  const [form,      setForm]      = useState(INITIAL)
  const [enviando,  setEnviando]  = useState(false)
  const [error,     setError]     = useState('')
  const lastSubmit  = useRef(0)

  const change = (e) => {
    setError('')
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = (e) => {
    e.preventDefault()

    // Honeypot: si el campo oculto tiene valor, es un bot
    if (form.honeypot) return

    // Rate limit: no más de una solicitud cada 30 segundos
    const ahora = Date.now()
    if (ahora - lastSubmit.current < 30_000) {
      setError('Por favor espera unos segundos antes de enviar otra solicitud.')
      return
    }

    // Validación mínima de longitud
    if (form.nombre.trim().length < 2) {
      setError('Por favor ingresa tu nombre completo.')
      return
    }
    if (form.mensaje.trim().length < 10) {
      setError('La descripción es muy corta. Cuéntanos un poco más sobre tu trabajo.')
      return
    }

    setEnviando(true)
    lastSubmit.current = ahora

    const texto =
      `Hola! Soy *${form.nombre.trim()}*.\n\n` +
      `Estoy interesado en: *${form.tipo}*\n\n` +
      `${form.mensaje.trim()}\n\n` +
      (form.telefono ? `Mi teléfono: ${form.telefono}` : '')

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener,noreferrer'
    )

    setTimeout(() => {
      setForm(INITIAL)
      setEnviando(false)
    }, 1000)
  }

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <div className="contacto__grid">

          {/* ── Info ── */}
          <div className="contacto__info">
            <p className="section-subtitle">Hablemos</p>
            <h2 className="section-title">Solicita tu<br />cotización</h2>
            <div className="section-divider" />
            <p className="contacto__desc">
              Completa el formulario y te contactaremos directamente por WhatsApp para
              discutir tu proyecto y darte una cotización personalizada sin compromiso.
            </p>
            <ul className="contacto__items">
              <li>
                <span className="contacto__dot" />
                <div>
                  <strong>Venezuela · Colombia · EE.UU.</strong>
                  <p>Atendemos pedidos internacionales</p>
                </div>
              </li>
              <li>
                <span className="contacto__dot" />
                <div>
                  <strong>Diseños propios y a medida</strong>
                  <p>Comparte tu idea y la hacemos realidad</p>
                </div>
              </li>
              <li>
                <span className="contacto__dot" />
                <div>
                  <strong>laserartistico.net</strong>
                  <p>Más de una década de experiencia</p>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Formulario ── */}
          <form className="contacto__form" onSubmit={submit} noValidate>

            {/* Honeypot — oculto para humanos, visible para bots */}
            <div className="contacto__honeypot" aria-hidden="true">
              <label htmlFor="website">No completar</label>
              <input
                id="website"
                name="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={change}
              />
            </div>

            <div className="contacto__field">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                id="nombre" name="nombre" type="text"
                required minLength={2} maxLength={80}
                value={form.nombre} onChange={change}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div className="contacto__field">
              <label htmlFor="telefono">WhatsApp / Teléfono</label>
              <input
                id="telefono" name="telefono" type="tel"
                maxLength={20}
                value={form.telefono} onChange={change}
                placeholder="+58 XXX XXX XXXX"
                autoComplete="tel"
              />
            </div>

            <div className="contacto__field">
              <label htmlFor="tipo">Tipo de trabajo *</label>
              <select id="tipo" name="tipo" required value={form.tipo} onChange={change}>
                <option value="">Selecciona una opción</option>
                {tipos.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="contacto__field">
              <label htmlFor="mensaje">Descripción del trabajo *</label>
              <textarea
                id="mensaje" name="mensaje"
                rows={4} required minLength={10} maxLength={1000}
                value={form.mensaje} onChange={change}
                placeholder="Describe tu trabajo: dimensiones, texto, imagen, cantidad…"
              />
              <span className="contacto__chars">{form.mensaje.length} / 1000</span>
            </div>

            {error && <p className="contacto__error" role="alert">{error}</p>}

            <button type="submit" className="btn-primary contacto__submit" disabled={enviando}>
              {enviando ? 'Abriendo WhatsApp…' : 'Enviar por WhatsApp →'}
            </button>

            <p className="contacto__note">
              Al enviar abriremos WhatsApp con tu mensaje pre-completado.
            </p>
          </form>

        </div>
      </div>
    </section>
  )
}

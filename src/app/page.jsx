import Header   from '@/components/Header/Header'
import Hero      from '@/components/Hero/Hero'
import Nosotros  from '@/components/Nosotros/Nosotros'
import Servicios from '@/components/Servicios/Servicios'
import Galeria   from '@/components/Galeria/Galeria'
import Contacto  from '@/components/Contacto/Contacto'
import Footer    from '@/components/Footer/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn/WhatsAppBtn'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}

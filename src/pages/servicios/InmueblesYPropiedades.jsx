import { motion, AnimatePresence } from 'framer-motion'
import { Home, FileText, Key, Scale, FileCheck, FileSignature, Handshake, Phone, MessageCircle, ChevronRight, Shield } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const InmueblesYPropiedades = () => {
  const [activeTab, setActiveTab] = useState('compraventa');
  
  const tabs = [
    {
      id: 'compraventa',
      title: 'Compraventa',
      icon: <FileText className="h-5 w-5 mr-2" />,
      subtitle: 'Compraventa de Bienes Inmuebles',
      description: 'Formalizamos la compraventa de tu casa, terreno o departamento en Loja a través de una escritura pública, el único documento que te acredita como propietario legítimo.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900">Seguridad para tu Inversión</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            Este es el trámite más importante para asegurar tu inversión, protegiendo tanto al comprador como al vendedor. Nos encargamos de que el proceso sea transparente, claro y seguro.
          </p>
          
          <a 
            href="/servicios/compraventa-inmuebles" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
          >
            Conocer el Proceso de Compraventa
            <FileText className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'hipotecas',
      title: 'Hipotecas',
      icon: <Scale className="h-5 w-5 mr-2" />,
      subtitle: 'Constitución y Cancelación de Hipotecas',
      description: 'Gestionamos el trámite para que tu propiedad quede debidamente registrada o libre de gravámenes.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-bold text-white">Tranquilidad en tus Finanzas</h3>
          </div>
          
          <p className="text-white mb-6">
            Ya sea que necesites registrar una hipoteca en Loja para obtener un crédito bancario, o que finalmente hayas terminado de pagar tu deuda y necesites la cancelación de la hipoteca para liberar tu propiedad, nosotros te guiamos en ambos procesos.
          </p>
          
          <a 
            href="/servicios/hipotecas" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
          >
            Más sobre Trámites de Hipotecas
            <Scale className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'particion',
      title: 'Partición',
      icon: <FileCheck className="h-5 w-5 mr-2" />,
      subtitle: 'Partición y Adjudicación de Bienes',
      description: 'Evita conflictos futuros y define la propiedad de cada parte con claridad.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">3</div>
            <h3 className="text-xl font-bold text-white">División Legal de Propiedades</h3>
          </div>
          
          <p className="text-white mb-6">
            Cuando una propiedad pertenece a varias personas (por una herencia, un divorcio o una sociedad), es necesario formalizar su división. La partición y adjudicación de bienes en Loja es el acto notarial que permite asignar a cada copropietario la parte que le corresponde de forma legal y definitiva.
          </p>
          
          <a 
            href="/servicios/particion-y-adjudicacion" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
          >
            Cómo Dividir una Propiedad Legalmente
            <FileCheck className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'promesa',
      title: 'Promesa de Compraventa',
      icon: <FileSignature className="h-5 w-5 mr-2" />,
      subtitle: 'Seguridad en tus Acuerdos',
      description: 'Asegura tu futura compra con un documento legalmente vinculante.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">4</div>
            <h3 className="text-xl font-bold text-white">Reserva tu Propiedad</h3>
          </div>
          
          <p className="text-white mb-6">
            ¿Encontraste la propiedad ideal pero aún no se cumplen todas las condiciones para la compra definitiva? La promesa de compraventa notariada "congela" el acuerdo. Es un contrato que obliga a ambas partes a realizar la compraventa en el futuro, respetando el precio y las condiciones pactadas.
          </p>
          
          <p className="text-gray-700 mb-6 font-medium">
            Es la mejor herramienta para asegurar tu futura escritura de casa en Loja.
          </p>
          
          <a 
            href="/servicios/promesa-compraventa" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
          >
            Asegura tu Futura Compraventa
            <FileSignature className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'arrendamiento',
      title: 'Arrendamiento',
      icon: <Key className="h-5 w-5 mr-2" />,
      subtitle: 'Inscripción de Contratos de Arrendamiento',
      description: 'Protege tus derechos como arrendador o inquilino con un contrato legalmente válido.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">5</div>
            <h3 className="text-xl font-bold text-white">Seguridad en el Alquiler</h3>
          </div>
          
          <p className="text-white mb-6">
            Para proteger los derechos tanto del dueño como del inquilino, inscribir un contrato de arriendo en Loja es una decisión inteligente. Este acto le da validez y fecha cierta ante terceros, ofreciendo una capa extra de seguridad durante toda la vigencia del alquiler.
          </p>
          
          <p className="text-gray-700 mb-6 font-medium">
            Recomendado especialmente para alquileres comerciales o de largo plazo.
          </p>
          
          <a 
            href="/servicios/inscripcion-arriendo" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
          >
            Detalles sobre Inscripción de Arriendos
            <Key className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    }
  ];
  
  return (
    <div className="pt-16">
      <Helmet>
        <title>Inmuebles y Propiedades | Notaría Octava de Loja</title>
        <meta 
          name="description" 
          content="Trámites notariales para bienes raíces en Loja: compraventas, hipotecas, partición de bienes, promesas de compraventa y contratos de arrendamiento." 
        />
        <meta 
          name="keywords" 
          content="notaría Loja, compraventa inmuebles, hipoteca, escritura pública, partición de bienes, promesa de compraventa, contrato de arrendamiento, bienes raíces" 
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/portada.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-1"></div>
        
        {/* Content */}
        <div className="container-max text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <Key className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu Guía Notarial para Inmuebles y Propiedades en Loja
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprar, vender o hipotecar una propiedad es una de las decisiones financieras más importantes de tu vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parallax Background Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/portada1.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
      </div>

      {/* Sección de Introducción */}
      <section className="py-16 bg-white">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Un error o una omisión en el proceso pueden costar caro. En la Notaría Octava de Loja, nos especializamos en todos los trámites de inmuebles para garantizar que tu inversión esté segura y tu patrimonio, protegido.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Te acompañamos en cada paso, desde el acuerdo inicial hasta la inscripción final, asegurando que cada documento tenga total validez y te brinde la tranquilidad que mereces.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios con Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container-max px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Tabs laterales */}
                <div className="md:w-1/3 bg-gray-50 border-r border-gray-200">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
                    <nav className="space-y-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                            activeTab === tab.id
                              ? 'bg-red-700 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex items-center">
                            {tab.icon}
                            {tab.title}
                          </span>
                          <ChevronRight 
                            className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                              activeTab === tab.id ? 'rotate-90 text-white' : 'text-gray-400'
                            }`} 
                          />
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Contenido del tab activo */}
                <div className="md:w-2/3">
                  <AnimatePresence mode="wait">
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.id && (
                          <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="p-8 h-full"
                          >
                            <div className="flex items-center mb-6">
                              <div className="p-3 rounded-full bg-red-100 text-red-700 mr-4">
                                {tab.icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900">{tab.subtitle}</h3>
                                <p className="text-gray-600">{tab.description}</p>
                              </div>
                            </div>
                            <div className="prose max-w-none">
                              {tab.content}
                            </div>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-red-700">
        <div className="container-max text-center text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas asesoramiento sobre inmuebles?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Nuestro equipo especializado está listo para guiarte en todos los aspectos 
              legales de tu propiedad. Contáctanos para una consulta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20información%20sobre%20servicios%20de%20inmuebles%20y%20propiedades."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consultar por WhatsApp
              </a>
              <a 
                href="tel:+59372570406"
                className="btn-secondary"
              >
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InmueblesYPropiedades


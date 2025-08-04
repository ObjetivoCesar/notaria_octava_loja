import { motion } from 'framer-motion'
import { FileCheck, Stamp, Shield, CheckCircle, FileText, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

const DeclaracionesYOtros = () => {
  // Actualizar el título y meta tags para SEO
  useEffect(() => {
    // Actualizar el título
    document.title = 'Declaración Juramentada y Protocolización en Loja | Notaría 8';
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = '¿Necesitas una declaración juramentada o protocolizar un documento en Loja? Te guiamos en el proceso para darle validez legal. Trámite rápido y seguro.';
    
    // Actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'declaración juramentada Loja, protocolizar documento Loja, notaría para declaraciones Loja, declaración jurada costo Loja, para qué sirve una declaración juramentada, protocolizar contrato privado, dar fe pública a un documento';
    
    // Actualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Declaración Juramentada y Protocolización en Loja | Notaría 8';
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = '¿Necesitas una declaración juramentada o protocolizar un documento en Loja? Te guiamos en el proceso para darle validez legal. Trámite rápido y seguro.';
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = 'website';
    
    // Limpiar al desmontar el componente
    return () => {
      document.title = 'Notaría Octava de Loja';
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with Dark Overlay */}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Declaración Juramentada y Protocolización de Documentos
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Validez legal y seguridad jurídica para tus documentos más importantes
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

      {/* Sección Declaración Juramentada */}
      <section className="py-20 bg-white">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Tarjeta Principal */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="p-8 md:p-10 md:w-2/5 bg-blue-600 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Declaración Juramentada
                    <span className="block text-blue-100 mt-2 text-2xl">Tu Palabra con Plena Validez Legal</span>
                  </h2>
                  <p className="text-blue-100 leading-relaxed">
                    Una declaración juramentada es un acto personalísimo y poderoso. Consiste en afirmar, bajo juramento y ante notario, la veracidad de ciertos hechos que solo tú conoces. Este simple acto transforma tu palabra en una prueba con fuerza legal.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Usos Principales</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                          </svg>
                        ),
                        title: "Trámites Migratorios",
                        desc: "Visas, dependencia económica y lazos familiares"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        title: "Asuntos Financieros",
                        desc: "Procedencia de fondos y justificación de gastos"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        ),
                        title: "Asuntos Personales",
                        desc: "Estado civil, convivencia y declaración de bienes"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        ),
                        title: "Trámites IESS",
                        desc: "Pensiones, montepío y afiliaciones"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        ),
                        title: "Requisitos Académicos",
                        desc: "Becas y procesos de admisión universitaria"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-bold text-gray-900">Requisitos Necesarios</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900">Documentos Personales</h4>
                      </div>
                      <p className="text-gray-600 pl-11">Cédula de identidad y certificado de votación vigentes en buen estado.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900">Contenido Claro</h4>
                      </div>
                      <p className="text-gray-600 pl-11">Tener claro el contenido a declarar. Nuestro equipo te asesora para que sea preciso y legalmente correcto.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">¿Necesitas ayuda con tu declaración?</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>Nuestros notarios están listos para asesorarte en la redacción de tu declaración juramentada, asegurando que cumpla con todos los requisitos legales.</p>
                        </div>
                        <div className="mt-4">
                          <a href="#contacto" className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-600">
                            Contáctanos ahora
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Sección de Tarifas */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Tarifas Claras para tu Gestión
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              En la Notaría Octava de Loja, la transparencia es un pilar fundamental. Los costos de estos servicios están regulados por el Consejo de la Judicatura, garantizando un precio justo y sin sorpresas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Declaración Juramentada
                </h3>
                <p className="text-muted-foreground">
                  La tarifa varía si es para una persona natural o jurídica, conforme al Art. 95 de la resolución de tarifas notariales.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Protocolización de Documentos
                </h3>
                <p className="text-muted-foreground">
                  El valor se calcula por cada foja (cara) del documento que se va a incorporar al protocolo, según lo estipula el Art. 73 de la misma resolución.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mt-8">
              Para una cotización exacta y sin compromiso, no dudes en contactarnos con los detalles de tu caso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container-max text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para Darle Seguridad a tus Documentos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ya sea que necesites que tu palabra tenga fuerza de ley o quieras proteger un contrato importante, estamos aquí para ayudarte. Nuestro equipo en Loja te guiará para que tu trámite sea rápido, seguro y sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20información%20sobre%20declaraciones%20juramentadas%20y%20protocolización."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Agendar una Cita Ahora</span>
              </a>
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20información%20sobre%20declaraciones%20juramentadas%20y%20protocolización."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Protocolización de Documentos */}
      <section className="py-20 bg-white">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Tarjeta Principal */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="p-8 md:p-10 md:w-2/5 bg-blue-600 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Protocolización de Documentos
                    <span className="block text-blue-100 mt-2 text-2xl">Asegura tus Acuerdos y Contratos</span>
                  </h2>
                  <p className="text-blue-100 leading-relaxed">
                    "Protocolizar" un documento significa incorporarlo al archivo oficial y público de la notaría. Este procedimiento, aunque sencillo, es fundamental para proteger tus documentos privados.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Beneficios Clave</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: "Fecha Cierta",
                        desc: "Establece una fecha oficial e indiscutible para tu documento"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                          </svg>
                        ),
                        title: "Conservación",
                        desc: "Protección y almacenamiento seguro a largo plazo"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ),
                        title: "Validez Legal",
                        desc: "Mayor respaldo jurídico para tus documentos"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        ),
                        title: "Seguridad",
                        desc: "Protección contra alteraciones o pérdidas"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-bold text-gray-900">Documentos que puedes protocolizar</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { 
                        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2z" clipRule="evenodd" /></svg>,
                        title: "Contratos Privados",
                        desc: "Arrendamiento, promesas de compraventa, préstamos entre particulares o acuerdos comerciales."
                      },
                      { 
                        icon: <svg xmlns="http://www.wnd3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>,
                        title: "Actas y Finiquitos",
                        desc: "Finiquito laboral, acuerdos de mediación o actas de reuniones importantes."
                      },
                      { 
                        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>,
                        title: "Documentos Técnicos",
                        desc: "Planos arquitectónicos, informes periciales o cualquier documento que necesite una fecha de creación verificable."
                      },
                      { 
                        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>,
                        title: "Testamentos Ológrafos",
                        desc: "Para asegurar la conservación de un testamento escrito a mano."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Requisitos para la Protocolización</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>El proceso es muy directo, solo necesitas:</p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>El documento original que deseas protocolizar.</li>
                            <li>Tu cédula de identidad y certificado de votación vigentes como solicitante.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DeclaracionesYOtros


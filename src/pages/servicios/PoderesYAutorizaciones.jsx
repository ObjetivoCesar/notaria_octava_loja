import { motion } from 'framer-motion'
import { Shield, FileText, FileSignature, Plane, Gavel, FileX, ChevronRight, CheckCircle, Users } from 'lucide-react'
import { useEffect } from 'react'

const PoderesYAutorizaciones = () => {
  // Efecto para SEO
  useEffect(() => {
    document.title = 'Poderes y Autorizaciones en Loja | Notaría 8';
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Delega con total seguridad con poderes notariales y autorizaciones. Poderes especiales, generales, autorización de salida del país y más en Loja.';
    
    // Actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'poder notarial Loja, autorización salida país, poder especial, poder general, procuración judicial, revocatoria de poder, notaría Loja';
    
    // Actualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Poderes y Autorizaciones en Loja | Notaría 8';
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = 'Delega con total seguridad con poderes notariales y autorizaciones. Poderes especiales, generales, autorización de salida del país y más en Loja.';
    
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Poderes y Autorizaciones en Loja
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Delega con Total Seguridad
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
              Hay momentos en que no puedes estar presente para firmar un contrato, gestionar un trámite o acompañar a tus hijos en un viaje, pero tus asuntos importantes no pueden esperar. Para eso existen los poderes notariales y las autorizaciones, herramientas legales que te permiten delegar tu voluntad con plena confianza y respaldo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En la Notaría Octava de Loja, te asesoramos para que elijas y redactes el documento exacto que necesitas, protegiendo tus intereses y asegurando que tus instrucciones se cumplan al pie de la letra.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Poderes Notariales */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Tarjeta Principal */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="p-8 md:p-10 md:w-2/5 bg-red-700 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Poderes Generales y Especiales
                  </h2>
                  <p className="text-red-100 leading-relaxed">
                    Un poder notarial es un mandato que le otorgas a una persona de tu confianza para que actúe en tu nombre. La diferencia es clave: un poder especial es para un acto específico y concreto, mientras que un poder general otorga facultades mucho más amplias. Elegir el correcto es fundamental.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">¿Para qué se usan los poderes notariales en Loja?</h3>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Para la compra o venta de una propiedad o un vehículo en Loja.',
                      'Para realizar trámites bancarios, en el IESS, SRI o cualquier institución pública.',
                      'Para que un familiar pueda cobrar tu pensión de jubilación.',
                      'Para administrar un negocio o representarte en una junta de accionistas a distancia.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/servicios/poderes-notariales" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
                  >
                    Más sobre Poderes Notariales
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Autorización de Salida del País */}
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
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex flex-row-reverse">
                <div className="p-8 md:p-10 md:w-2/5 bg-red-700 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <Plane className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Autorización de Salida del País
                  </h2>
                  <p className="text-red-100 leading-relaxed">
                    La seguridad de tus hijos es lo más importante. Cuando un niño, niña o adolescente viaja fuera de Ecuador sin uno o ambos padres, la ley exige una autorización de salida del país notariada. Este es un requisito indispensable en los puntos de migración.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Tranquilidad en los Viajes de tus Hijos</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Gestionamos este permiso de viaje para menores en Loja de forma ágil, asegurando que el documento cumpla con todas las formalidades para un viaje sin contratiempos.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Válido para viajes nacionales e internacionales</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Tiempo de gestión rápido y eficiente</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Cumple con todos los requisitos legales</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="/servicios/autorizacion-salida-pais" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
                  >
                    Ver Requisitos para Permiso de Viaje
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Procuración Judicial */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Tarjeta Principal */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="p-8 md:p-10 md:w-2/5 bg-red-700 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <Gavel className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Procuración Judicial
                  </h2>
                  <p className="text-red-100 leading-relaxed">
                    La procuración judicial es una figura jurídica que te permite nombrar a un representante legal para que actúe en tu nombre en un proceso judicial específico. Es fundamental cuando necesitas que alguien de confianza te represente ante los tribunales de justicia en Loja o cualquier parte del país.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Representación Legal en Juicios</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Nuestros servicios de procuración judicial incluyen:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Representación en juicios civiles, penales, laborales y de familia</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Facultades específicas según el tipo de proceso</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Asesoría legal personalizada</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="/servicios/procuracion-judicial" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
                  >
                    Más sobre Procuración Judicial
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Revocatoria de Poderes */}
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
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex flex-row-reverse">
                <div className="p-8 md:p-10 md:w-2/5 bg-red-700 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <FileX className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Revocatoria de Poderes
                  </h2>
                  <p className="text-red-100 leading-relaxed">
                    Así como otorgaste un poder, puedes revocarlo cuando lo consideres necesario. La revocatoria de poderes es el acto jurídico mediante el cual dejas sin efecto un poder que hayas otorgado previamente, ya sea porque cumplió su propósito o porque deseas cambiar de representante.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">¿Cuándo es necesario revocar un poder?</h3>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Cuando la persona a quien le otorgaste el poder ya no es de tu confianza</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Si el poder ya cumplió su finalidad</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Cuando deseas nombrar a un nuevo representante</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Por cambio en las circunstancias que motivaron el poder</span>
                    </li>
                  </ul>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          Importante: La revocatoria debe notificarse a todas las partes involucradas y registrarse en las mismas instituciones donde se inscribió el poder original.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="/servicios/revocatoria-poderes" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
                  >
                    Más sobre Revocatoria de Poderes
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container-max px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Necesitas asesoría sobre poderes o autorizaciones?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo de notarios públicos en Loja está listo para ayudarte a elegir el documento que mejor se adapte a tus necesidades y guiarte en cada paso del proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20poderes%20y%20autorizaciones."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.22 8.24-8.22z"></path>
                </svg>
                Consultar por WhatsApp
              </a>
              <a 
                href="tel:+59372570406"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200"
              >
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PoderesYAutorizaciones


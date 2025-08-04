import { motion, AnimatePresence } from 'framer-motion'
import { Car, FileText, Shield, CheckCircle, ChevronRight, FileCheck, FileSignature, CarIcon, FileCheck2, FileSearch, CarTaxiFront, Key, Gift, Home, FileType } from 'lucide-react'
import { useEffect, useState } from 'react'

const Vehiculos = () => {
  const [activeTab, setActiveTab] = useState('proceso');
  
  // Actualizar el título y meta tags para SEO
  useEffect(() => {
    // Actualizar el título
    document.title = 'Trámites Legales de Vehículos en Loja | Notaría 8';
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Servicios notariales especializados en trámites vehiculares: compraventa, prenda con reserva de dominio, donaciones y más. Asesoría legal en Loja.';
    
    // Actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'compraventa vehículos Loja, contrato prenda vehículo, traspaso de vehículo, notaría vehicular Loja, documentos para vender auto, trámites legales vehículos, notaría octava Loja, contrato compraventa vehículo, trámites notariales automotores, legalización de vehículos';
    
    // Actualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Trámites Legales de Vehículos en Loja | Notaría 8';
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = 'Servicios notariales especializados en trámites vehiculares: compraventa, prenda con reserva de dominio, donaciones y más. Asesoría legal en Loja.';
    
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
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/portada.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="container-max px-4 z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trámites Legales de Vehículos
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Servicios notariales especializados en trámites vehiculares con la garantía de la Notaría Octava de Loja
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Ver servicios
              </a>
              <a
                href="https://wa.me/59372570406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.96.58 3.783 1.577 5.315l-1.23 3.8 3.94-1.23A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 018.5 8.5 8.5 8.5 0 01-8.5 8.5 8.46 8.46 0 01-4.55-1.324l-.32-.196-3.34.88.892-3.28-.21-.334A8.44 8.44 0 013.5 12 8.5 8.5 0 0112 3.5zM8.75 7.5c-.24 0-.47.11-.62.3a.75.75 0 00-.08.82l.9 2.05-1.47 3.6a.75.75 0 00.69 1.03h.1a.75.75 0 00.69-.46l1.1-2.5a.25.25 0 00-.02-.25l-.5-.63a.25.25 0 01.04-.36l.4-.3a.25.25 0 01.3 0l1.5 1.13a.75.75 0 00.9 0l1.1-.82a.25.25 0 01.3 0l.4.3a.25.25 0 01.04.36l-.5.63a.25.25 0 00-.02.25l.4.93a.75.75 0 00.7.49h.1a.75.75 0 00.7-.49l1.1-2.5a.75.75 0 00-.08-.82.75.75 0 00-.62-.3h-3.5z" clipRule="evenodd" />
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Background Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/portada1.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
      </div>

      {/* Sección de Servicios con Tabs */}
      <section className="py-20 bg-white">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
            id="servicios"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Tabs laterales */}
                <div className="md:w-1/3 bg-gray-50 border-r border-gray-200">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Servicios Vehiculares</h2>
                    <nav className="space-y-1">
                      <button
                        onClick={() => setActiveTab('proceso')}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                          activeTab === 'proceso'
                            ? 'bg-red-700 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="flex items-center">
                          <FileCheck2 className="h-5 w-5 mr-2" />
                          Nuestro Proceso
                        </span>
                        <ChevronRight 
                          className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                            activeTab === 'proceso' ? 'rotate-90 text-white' : 'text-gray-400'
                          }`} 
                        />
                      </button>
                      
                      <button
                        onClick={() => setActiveTab('requisitos')}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                          activeTab === 'requisitos'
                            ? 'bg-red-700 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="flex items-center">
                          <FileCheck className="h-5 w-5 mr-2" />
                          Requisitos
                        </span>
                        <ChevronRight 
                          className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                            activeTab === 'requisitos' ? 'rotate-90 text-white' : 'text-gray-400'
                          }`} 
                        />
                      </button>
                      
                      <button
                        onClick={() => setActiveTab('costo')}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                          activeTab === 'costo'
                            ? 'bg-red-700 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="flex items-center">
                          <FileSearch className="h-5 w-5 mr-2" />
                          Costo del Trámite
                        </span>
                        <ChevronRight 
                          className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                            activeTab === 'costo' ? 'rotate-90 text-white' : 'text-gray-400'
                          }`} 
                        />
                      </button>
                    </nav>
                  </div>
                </div>

                {/* Contenido del tab activo */}
                <div className="md:w-2/3">
                  <AnimatePresence mode="wait">
                    {/* Pestaña 1: Nuestro Proceso */}
                    {activeTab === 'proceso' && (
                      <motion.div
                        key="proceso"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full p-4"
                      >
                        <div className="h-full">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8">
                              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Proceso para Legalizar la Venta de tu Carro en Loja</h2>
                              <p className="text-gray-700 text-lg mb-8">Hacemos que el trámite para vender un auto en Loja sea un proceso claro y sin complicaciones. Te llevamos de la mano en cada etapa:</p>
                              
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">1</div>
                                    <h3 className="text-xl font-semibold text-gray-900">Verificación de Documentos</h3>
                                  </div>
                                  <p className="text-gray-600">Revisamos que toda la documentación, tanto de las partes como del vehículo, esté en perfecto orden para evitar cualquier contratiempo.</p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">2</div>
                                    <h3 className="text-xl font-semibold text-gray-900">Redacción del Contrato</h3>
                                  </div>
                                  <p className="text-gray-600">Elaboramos un contrato de compraventa de vehículo profesional, con cláusulas claras que definen el precio, las condiciones de entrega y las responsabilidades, protegiendo los intereses de ambas partes.</p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">3</div>
                                    <h3 className="text-xl font-semibold text-gray-900">Reconocimiento de Firmas</h3>
                                  </div>
                                  <p className="text-gray-600">Damos fe pública del acuerdo. Las partes firman el contrato en nuestra presencia, un paso crucial para notarizar el contrato del vehículo y hacerlo legalmente vinculante.</p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">4</div>
                                    <h3 className="text-xl font-semibold text-gray-900">Entrega de Documentación</h3>
                                  </div>
                                  <p className="text-gray-600">Al finalizar, cada parte recibe su copia del contrato notariado, un documento que les da total tranquilidad y respaldo legal sobre la transacción realizada aquí, en Loja.</p>
                                </div>
                              </div>
                              
                              <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Asesoría legal especializada en trámites vehiculares</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Atención personalizada y seguimiento de tu trámite</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Precios competitivos y sin sorpresas</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Tramitación ágil y segura</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    {/* Pestaña 2: Requisitos */}
                    {activeTab === 'requisitos' && (
                      <motion.div
                        key="requisitos"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full p-4"
                      >
                        <div className="h-full">
                          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8">
                              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requisitos para la Compraventa de Vehículos en Loja</h2>
                              <p className="text-gray-700 text-lg mb-8">Para agilizar el trámite de compraventa de tu vehículo en Loja, asegúrate de contar con la siguiente documentación:</p>
                              
                              <div className="grid md:grid-cols-2 gap-8">
                                {/* Requisitos para el Vendedor */}
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                      <FileCheck className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Para el Vendedor</h3>
                                  </div>
                                  <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Cédula de identidad y certificado de votación originales y vigentes.</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Matrícula original del vehículo.</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Último pago del Impuesto a la Propiedad de Vehículos (Predial).</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Certificado de no tener multas o infracciones de tránsito pendientes.</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                {/* Requisitos para el Comprador */}
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                      <FileCheck2 className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Para el Comprador</h3>
                                  </div>
                                  <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Cédula de identidad y certificado de votación originales y vigentes.</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Si es representante legal, poder notarial vigente.</span>
                                    </li>
                                  </ul>
                                </div>
                                
                                {/* Requisitos del Vehículo */}
                                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                      <Car className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Del Vehículo</h3>
                                  </div>
                                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Pago del Impuesto al Rodaje del año en curso.</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Certificado de no tener multas o gravámenes pendientes (se puede consultar en la ANT).</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Revisión Técnica Vehicular vigente (si aplica según la normativa de Loja).</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Certificado de no adeudar impuestos municipales.</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <div className="flex">
                                  <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                      <strong>Importante:</strong> Los documentos deben presentarse en original y copia. Es recomendable verificar con anticipación el estado del vehículo en el Registro de la Propiedad Automotor para evitar contratiempos.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Pestaña 3: Costo del Trámite */}
                    {activeTab === 'costo' && (
                      <motion.div
                        key="costo"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full p-4"
                      >
                        <div className="h-full">
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8">
                              <h2 className="text-3xl font-bold text-gray-900 mb-6">Costo del Trámite de Compraventa Vehicular en Loja</h2>
                              <p className="text-gray-700 text-lg mb-8">En la Notaría Octava de Loja, ofrecemos precios competitivos y transparentes para el trámite de compraventa de vehículos. Nuestros honorarios incluyen:</p>
                              
                              <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Honorarios Notariales
                                  </h3>
                                  <p className="text-gray-600 mb-4">Nuestros honorarios incluyen:</p>
                                  <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Asesoría legal especializada</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Elaboración del contrato de compraventa</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Reconocimiento de firmas</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span>Registro del documento notarial</span>
                                    </li>
                                  </ul>
                                  <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                                    <p className="text-purple-800 font-medium">Costo: <span className="text-2xl font-bold">$120.00</span></p>
                                    <p className="text-sm text-purple-600 mt-1">(Incluye IVA)</p>
                                  </div>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Gastos Adicionales
                                  </h3>
                                  <p className="text-gray-600 mb-4">Adicionalmente, debes considerar:</p>
                                  <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                      <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                      <span><strong>Registro de propiedad:</strong> Aprox. $15.00 - $30.00</span>
                                    </li>
                                    <li className="flex items-start">
                                      <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                      <span><strong>Impuesto al Valor Agregado (IVA):</strong> 12% sobre el valor del vehículo</span>
                                    </li>
                                    <li className="flex items-start">
                                      <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                      <span><strong>Impuesto a la Propiedad:</strong> Varía según el valor del vehículo</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Preguntas Frecuentes</h3>
                                <div className="space-y-4">
                                  <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 flex items-center">
                                      <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      ¿Qué métodos de pago aceptan?
                                    </h4>
                                    <p className="mt-2 text-gray-600">Aceptamos efectivo, transferencia bancaria y todas las tarjetas de crédito y débito.</p>
                                  </div>
                                  
                                  <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 flex items-center">
                                      <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      ¿El precio incluye IVA?
                                    </h4>
                                    <p className="mt-2 text-gray-600">Sí, todos nuestros precios incluyen el IVA correspondiente.</p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-medium text-gray-900 flex items-center">
                                      <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      ¿Ofrecen descuentos por referidos o grupos?
                                    </h4>
                                    <p className="mt-2 text-gray-600">Sí, ofrecemos descuentos especiales para grupos familiares o múltiples trámites. Contáctanos para más información.</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                <div className="flex">
                                  <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm text-blue-700">
                                      <strong>Nota:</strong> Los precios están sujetos a cambios según las regulaciones gubernamentales. Para una cotización exacta según tu caso particular, te invitamos a visitarnos en nuestra notaría o contactarnos por teléfono.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Cerrar AnimatePresence */}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container-max px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
            <h2 className="text-2xl font-bold text-gray-900">Costo del Trámite de Compraventa Vehicular en Loja</h2>
          </div>
          
          <div className="prose max-w-4xl mx-auto">
            <p className="text-gray-600 mb-6">La transparencia es fundamental. El costo para legalizar la venta de tu coche en Loja se basa en las tarifas oficiales del Consejo de la Judicatura. Este valor depende del precio de venta acordado para el vehículo. Contáctanos con el precio de tu auto o moto y te daremos una proforma exacta sin ningún compromiso.</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 100 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Preguntas Frecuentes sobre el Traspaso de Vehículos en Loja</h3>
                  <div className="mt-2 space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700">¿Puedo usar un contrato de internet? ¿Cuál es la diferencia?</h4>
                      <p className="text-blue-600 text-sm">Un contrato privado puede tener errores y no ofrece seguridad. Un contrato notariado en nuestra notaría en Loja para vehículos tiene fecha cierta, prueba legal irrefutable y la certeza de que las firmas son auténticas, protegiéndote ante cualquier reclamo futuro.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">¿Qué pasa si el vehículo aún tiene una prenda o deuda pendiente?</h4>
                      <p className="text-blue-600 text-sm">Es crucial resolver esto antes de la venta. Nosotros verificamos esta información y te asesoramos sobre cómo proceder con la cancelación de la prenda para que el traspaso de dominio en Loja sea limpio y seguro.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">Estoy vendiendo mi auto en Loja pero el comprador está en otra ciudad, ¿qué hacemos?</h4>
                      <p className="text-blue-600 text-sm">Podemos ayudarte. El comprador puede otorgar un poder especial a una persona de confianza en Loja para que firme el contrato en su nombre. Es una solución segura que también gestionamos en la notaría.</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href="https://wa.me/59372570406?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20compraventa%20de%20veh%C3%ADculos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-600"
                    >
                      ¡Resuelve todas tus dudas ahora!
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
      </section>

                  <AnimatePresence mode="wait">
                    {activeTab === 'prenda' ? (
                      <motion.div
                        key="prenda"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full p-4"
                      >
                        <div className="h-full">
                          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl overflow-hidden">
                            <div className="md:flex">
                              <div className="p-8 md:p-10 md:w-2/5 bg-green-600 text-white">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                                  <Shield className="h-8 w-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                  Contrato de Prenda
                                  <span className="block text-green-100 mt-2 text-2xl">con Reserva de Dominio</span>
                                </h2>
                                <p className="text-green-100 leading-relaxed">
                                  El contrato de prenda con reserva de dominio es un instrumento legal que permite al vendedor mantener la propiedad del vehículo hasta que se cancele la totalidad del precio. Es la opción más segura para ventas a plazos, ya que protege al vendedor mientras el comprador termina de pagar.
                                </p>
                              </div>
                              
                              <div className="p-8 md:p-10 md:w-3/5 bg-white">
                                {/* Contenido de la pestaña de Prenda */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : activeTab === 'otros' ? (
                      <motion.div
                        key="otros"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full p-4"
                      >
                        <div className="h-full">
                          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8 md:p-10">
                              <h2 className="text-3xl font-bold text-gray-900 mb-6">Otros Trámites Vehiculares</h2>
                              <p className="text-gray-600 mb-6">Contenido de la pestaña de otros trámites.</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Donación de Vehículos */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Gift className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Donación de Vehículos</h2>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    La donación de vehículos es un acto de generosidad que permite transferir la propiedad de un automóvil a otra persona sin recibir contraprestación económica a cambio. En la Notaría Octava de Loja, te asesoramos para que este proceso sea sencillo y cumpla con todos los requisitos legales.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Requisitos para la Donación</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Documento de identificación original y copia del donante y del donatario</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Matrícula original del vehículo</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Pago del impuesto a la propiedad vehicular al día</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Certificado de no tener multas o gravámenes pendientes</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Beneficios de la Donación Notariada</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Seguridad jurídica para ambas partes</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Asesoramiento legal personalizado</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Proceso ágil y transparente</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Documentación respaldada por fechas ciertas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Necesitas asesoría sobre donación de vehículos?</h3>
                    <p className="text-gray-600 mb-6">Nuestro equipo de notarios está listo para guiarte en cada paso del proceso de donación de tu vehículo.</p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://wa.me/59372570406"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.96.58 3.783 1.577 5.315l-1.23 3.8 3.94-1.23A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 018.5 8.5 8.5 8.5 0 01-8.5 8.5 8.46 8.46 0 01-4.55-1.324l-.32-.196-3.34.88.892-3.28-.21-.334A8.44 8.44 0 013.5 12 8.5 8.5 0 0112 3.5z" clipRule="evenodd" />
                        </svg>
                        Consultar por WhatsApp
                      </a>
                      <a
                        href="tel:+59372570406"
                        className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-base font-medium rounded-full text-red-600 bg-white hover:bg-red-50 transition-colors duration-200"
                      >
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        Llamar Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Prenda con Reserva de Dominio */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex flex-row-reverse">
                <div className="p-8 md:p-10 md:w-2/5 bg-green-600 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Contrato de Prenda
                    <span className="block text-green-100 mt-2 text-2xl">con Reserva de Dominio</span>
                  </h2>
                  <p className="text-green-100 leading-relaxed">
                    El contrato de prenda con reserva de dominio es un instrumento legal que permite al vendedor mantener la propiedad del vehículo hasta que se cancele la totalidad del precio. Es la opción más segura para ventas a plazos, ya que protege al vendedor mientras el comprador termina de pagar.
                  </p>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Beneficios Clave</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        icon: <Shield className="h-6 w-6" />,
                        title: "Seguridad Garantizada",
                        desc: "El vendedor mantiene la propiedad hasta el pago total"
                      },
                      {
                        icon: <FileCheck2 className="h-6 w-6" />,
                        title: "Legalmente Vinculante",
                        desc: "Documento con validez legal ante cualquier entidad"
                      },
                      {
                        icon: <FileText className="h-6 w-6" />,
                        title: "Condiciones Claras",
                        desc: "Plazos, montos y condiciones de pago establecidos"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6" />,
                        title: "Facilidad de Pago",
                        desc: "Posibilidad de establecer cuotas según convenio"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-green-50 text-green-600">
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
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-bold text-gray-900">Requisitos Necesarios</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <FileCheck className="h-5 w-5" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Documentos del Vehículo</h4>
                      </div>
                      <ul className="text-gray-600 pl-11 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Matrícula original
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Revisión técnica vigente
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Copia de la cédula del propietario
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <FileCheck2 className="h-5 w-5" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Documentos Personales</h4>
                      </div>
                      <ul className="text-gray-600 pl-11 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Cédula de identidad (ambas partes)
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Certificado de votación vigente
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Poder notarial si aplica
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 100 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">¿Necesitas asesoría con un contrato de prenda con reserva de dominio?</h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>Nuestros notarios te ayudarán a redactar un contrato seguro que proteja tus intereses en la venta a plazos de tu vehículo.</p>
                        </div>
                        <div className="mt-4">
                          <a 
                            href="https://wa.me/59372570406?text=Hola,%20necesito%20asesoría%20para%20un%20contrato%20de%20prenda%20con%20reserva%20de%20dominio%20para%20vehículo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-green-700 hover:text-green-600"
                          >
                            Consultar por WhatsApp
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

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container-max text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Necesitas asesoría legal para tu vehículo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo de notarios está listo para ayudarte con cualquier trámite vehicular.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/59372570406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.96.58 3.783 1.577 5.315l-1.23 3.8 3.94-1.23A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 018.5 8.5 8.5 8.5 0 01-8.5 8.5 8.46 8.46 0 01-4.55-1.324l-.32-.196-3.34.88.892-3.28-.21-.334A8.44 8.44 0 013.5 12 8.5 8.5 0 0112 3.5zM8.75 7.5c-.24 0-.47.11-.62.3a.75.75 0 00-.08.82l.9 2.05-1.47 3.6a.75.75 0 00.69 1.03h.1a.75.75 0 00.69-.46l1.1-2.5a.25.25 0 00-.02-.25l-.5-.63a.25.25 0 01.04-.36l.4-.3a.25.25 0 01.3 0l1.5 1.13a.75.75 0 00.9 0l1.1-.82a.25.25 0 01.3 0l.4.3a.25.25 0 01.04.36l-.5.63a.25.25 0 00-.02.25l.4.93a.75.75 0 00.7.49h.1a.75.75 0 00.7-.49l1.1-2.5a.75.75 0 00-.08-.82.75.75 0 00-.62-.3h-3.5z" clipRule="evenodd" />
                </svg>
                Escríbenos por WhatsApp
              </a>
              <a
                href="tel:+59372570406"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="h-5 w-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (07) 257-0406
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Vehiculos


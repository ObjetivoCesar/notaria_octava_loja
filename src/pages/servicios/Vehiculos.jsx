import { motion, AnimatePresence } from 'framer-motion';
import { Car, FileText, Shield, CheckCircle, ChevronRight, FileCheck, FileSignature, CarIcon, FileCheck2, FileSearch, CarTaxiFront, Key, Gift, Home, FileType } from 'lucide-react';
import { useEffect, useState } from 'react';

const Vehiculos = () => {
  const [activeTab, setActiveTab] = useState('proceso');
  
  // ... (resto del código anterior permanece igual)

  return (
    <div className="pt-16">
      {/* ... (secciones anteriores) ... */}

      {/* Sección de Tabs */}
      <section className="py-20 bg-white">
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
                {/* Contenido de los tabs */}
                <div className="md:w-2/3 p-6 md:p-10">
                  <AnimatePresence mode="wait">
                    {activeTab === 'prenda' && (
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
                    )}

                    {activeTab === 'otros' && (
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
                    )}
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
            {/* Contenido de la sección de donación */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vehiculos;

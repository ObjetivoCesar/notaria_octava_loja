import React, { useEffect } from 'react';
import { FileText, FileCheck, Plane, FileX } from 'lucide-react';
import VerticalTabs from '@/components/VerticalTabs';

const PoderesYAutorizaciones = () => {
  const tabs = [
    {
      id: 'poderes',
      title: 'Poderes Notariales',
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Poderes Notariales: Delega con Confianza y Precisión</h3>
          <p className="text-gray-700">
            Un poder notarial es el instrumento legal que te permite designar a una persona de tu absoluta confianza (llamada apoderado) para que actúe en tu nombre. Es la herramienta perfecta cuando no puedes estar presente para realizar una gestión importante. En la Notaría Octava de Loja, te asesoramos para que elijas el tipo de poder exacto que necesitas.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Poder Especial</h4>
            <p className="text-gray-700 mb-4">
              Es la opción más segura y recomendada para una tarea específica. Le otorga a tu apoderado facultades para un solo acto, claro y delimitado.
            </p>
            <p className="text-gray-700 font-medium mb-2">Ideal para:</p>
            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
              <li>Vender o comprar una propiedad específica en Loja</li>
              <li>Realizar un trámite bancario concreto</li>
              <li>Matricular un vehículo</li>
              <li>Representarte en un divorcio</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Poder General</h4>
            <p className="text-gray-700">
              Este poder es mucho más amplio y otorga a tu apoderado facultades para administrar todos o gran parte de tus bienes y negocios.
            </p>
            <p className="text-gray-700 font-medium mt-3 mb-2">Ideal para:</p>
            <p className="text-gray-700">
              Situaciones que requieren una gestión continua, como la administración general de tus asuntos mientras te encuentras en el extranjero. Requiere un nivel de confianza muy elevado.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Generales:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédula de identidad y certificado de votación vigentes de quien otorga el poder (poderdante).</li>
              <li>Nombres, apellidos completos y número de cédula de la persona que recibirá el poder (apoderado).</li>
              <li>Una descripción clara del acto o las facultades que deseas delegar.</li>
            </ul>
          </div>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Agendar Cita para Asesoría de Poder
          </button>
        </div>
      )
    },
    {
      id: 'autorizaciones',
      title: 'Autorizaciones',
      icon: <FileCheck className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Procuración Judicial y Otras Autorizaciones</h3>
          <p className="text-gray-700">
            Además de los poderes generales, existen autorizaciones específicas para contextos muy concretos, principalmente en el ámbito legal.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Procuración Judicial</h4>
            <p className="text-gray-700">
              Este es un tipo de poder especial diseñado exclusivamente para el ámbito de la justicia. Con él, autorizas formalmente a un abogado en Loja para que te represente en un proceso o juicio. Es un requisito indispensable para que tu defensor pueda actuar legalmente en tu nombre, presentar escritos y asistir a audiencias.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos para la Procuración Judicial:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédula de identidad y certificado de votación vigentes.</li>
              <li>Nombre completo y número de matrícula del abogado que te representará.</li>
              <li>Detalles del proceso judicial para el cual se otorga la procuración.</li>
            </ul>
          </div>

          <p className="text-gray-700 mt-6">
            ¿Necesitas otro tipo de autorización específica? Consúltanos. Estamos para orientarte.
          </p>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Consultar sobre Representación Legal
          </button>
        </div>
      )
    },
    {
      id: 'salida-pais',
      title: 'Salida del País',
      icon: <Plane className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Autorización de Salida del País para Menores</h3>
          <p className="text-gray-700">
            La seguridad de tus hijos es la prioridad. La ley ecuatoriana exige una autorización de salida del país notariada (también conocido como permiso de viaje) siempre que un niño, niña o adolescente vaya a viajar fuera de Ecuador en una de las siguientes situaciones:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Viajando completamente solo.</li>
            <li>Viajando con solo uno de sus padres.</li>
            <li>Viajando con un tercero (abuelos, tíos, etc.).</li>
          </ul>
          
          <p className="text-gray-700">
            Este documento es obligatorio y será solicitado en el control de Migración. En nuestra notaría en Loja, gestionamos este permiso de forma ágil para asegurar un viaje sin contratiempos.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Indispensables:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédulas de identidad y certificados de votación vigentes de ambos padres.</li>
              <li>Partida de nacimiento o cédula de identidad del menor.</li>
              <li>Detalles del viaje: destino, fechas aproximadas y, si viaja con un tercero, los datos completos de esa persona.</li>
            </ul>
          </div>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Gestionar Permiso de Viaje Ahora
          </button>
        </div>
      )
    },
    {
      id: 'revocatoria',
      title: 'Revocatoria de Poder',
      icon: <FileX className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Revocatoria de Poder: Anula un Mandato de Forma Segura</h3>
          <p className="text-gray-700">
            Así como otorgar un poder es un acto de confianza, revocarlo es un acto de seguridad. Las circunstancias cambian, las relaciones terminan o simplemente la representación ya no es necesaria. La revocatoria es el trámite legal que anula de forma definitiva un poder que habías otorgado previamente.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Este paso es fundamental para:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Evitar que un poder siga siendo utilizado indebidamente.</li>
              <li>Recuperar el pleno control sobre tus asuntos.</li>
              <li>Proteger tu patrimonio y tus decisiones a futuro.</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            Para revocar un poder en Loja, solo necesitas tu identificación y, si es posible, una copia del poder que deseas anular.
          </p>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Asegura tu Control y Revoca un Poder
          </button>
        </div>
      )
    }
  ];

  useEffect(() => {
    document.title = 'Poderes y Autorizaciones | Notaría 8';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(/images/portada.jpeg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Poderes y Autorizaciones
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Delega con total seguridad y respaldo legal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Hay momentos en que no puedes estar presente para firmar un contrato, gestionar un trámite o acompañar a tus hijos en un viaje, pero tus asuntos importantes no pueden esperar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En la Notaría Octava de Loja, te asesoramos para que elijas y redactes el documento exacto que necesitas, protegiendo tus intereses y asegurando que tus instrucciones se cumplan al pie de la letra.
            </p>
          </div>
          
          {/* Vertical Tabs */}
          <div className="max-w-6xl mx-auto">
            <VerticalTabs tabs={tabs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoderesYAutorizaciones;

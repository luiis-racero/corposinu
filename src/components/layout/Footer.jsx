import React from 'react';

const Footer = ({ setActiveSection, logoUrl }) => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoUrl} alt="CORPOSINUSANJORGE Logo" className="h-14 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Corporación del Sinú y San Jorge para la Ayuda Social. Comprometidos con el desarrollo integral y sostenible de nuestras comunidades.
            </p>
          </div>
          
          <div>
            <span className="font-semibold text-xl text-gray-200 mb-6 block">Contacto</span>
            <div className="space-y-3 text-gray-400 text-sm">
              <p><strong>Dirección:</strong> Región del Sinú y San Jorge</p>
              <p><strong>Departamento:</strong> Bolívar, Colombia</p>
              <p><strong>Email:</strong> <a href="mailto:info@corposinusanjorge.org" className="hover:text-white transition-colors">info@corposinusanjorge.org</a></p>
              <p><strong>Teléfono:</strong> <a href="tel:+57123456789" className="hover:text-white transition-colors">+57 (123) 456-7890</a></p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-xl text-gray-200 mb-6 block">Enlaces Rápidos</span>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveSection('inicio')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Inicio
              </button>
              <button 
                onClick={() => setActiveSection('proyectos')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Proyectos
              </button>
              <button 
                onClick={() => setActiveSection('empresa')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Nuestra Empresa
              </button>
              <button 
                onClick={() => setActiveSection('eventos')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Eventos
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Corporación del Sinú y San Jorge para la Ayuda Social. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado con ❤️ por Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
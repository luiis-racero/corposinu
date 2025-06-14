import React from 'react';
import { motion } from 'framer-motion';
import { ConciergeBell, FileCheck2, Users2, MessageSquare as MessageSquareHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiciosUsuarioSection = ({ showToast, setActiveSection }) => {
  const sectionTitle = "Servicios al Usuario";
  const sectionDescription = "Estamos aquí para ayudarte. Descubre los servicios y canales de atención que tenemos disponibles para ti.";

  const services = [
    { 
      id: "consultar_proyectos",
      title: "Consulta de Proyectos", 
      description: "Información detallada sobre el estado y avance de nuestros proyectos en ejecución.", 
      icon: FileCheck2, 
      color: "green",
      actionText: "Consultar Proyectos"
    },
    { 
      id: "participacion_ciudadana",
      title: "Participación Ciudadana", 
      description: "Espacios y mecanismos para que la comunidad participe activamente en nuestras iniciativas.", 
      icon: Users2,
      color: "sky",
      actionText: "Conocer Mecanismos"
    },
    { 
      id: "pqr",
      title: "Peticiones, Quejas y Reclamos (PQR)", 
      description: "Canal oficial para radicar tus solicitudes, inquietudes o sugerencias.", 
      icon: MessageSquareHeart,
      color: "amber",
      actionText: "Radicar PQR"
    },
  ];

  const serviceColors = {
    green: {
        iconBg: 'bg-gradient-to-br from-green-100 to-green-200',
        text: 'text-green-600',
        button: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
    },
    sky: {
        iconBg: 'bg-gradient-to-br from-sky-100 to-sky-200',
        text: 'text-sky-600',
        button: 'bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700'
    },
    amber: {
        iconBg: 'bg-gradient-to-br from-amber-100 to-amber-200',
        text: 'text-amber-600',
        button: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <ConciergeBell className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 mb-4">
            {sectionTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="project-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className={`w-16 h-16 ${serviceColors[service.color].iconBg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
                <service.icon className={`w-8 h-8 ${serviceColors[service.color].text}`} />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${serviceColors[service.color].text}`}>{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
              <Button 
                onClick={() => {
                  if (service.id === 'consultar_proyectos') {
                    setActiveSection('proyectos');
                  } else {
                    showToast(`Acceso a "${service.title}" no implementado`, "Esta funcionalidad estará disponible pronto.");
                  }
                }}
                className={`mt-auto w-full ${serviceColors[service.color].button} text-white`}
              >
                {service.actionText}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiciosUsuarioSection;
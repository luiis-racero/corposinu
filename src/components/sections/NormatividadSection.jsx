import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NormatividadSection = ({ showToast }) => {
  const sectionTitle = "Normatividad";
  const sectionDescription = "Consulte aquí las leyes, decretos, resoluciones y demás normativas que rigen nuestra actividad y proyectos.";

  const documents = [
    { title: "Ley 489 de 1998", description: "Normas sobre la organización y funcionamiento de las entidades del orden nacional.", icon: FileText, link: "#" },
    { title: "Estatutos de CORPOSINUSANJORGE", description: "Reglamento interno y estructura de la corporación.", icon: FileText, link: "#" },
    { title: "Código Civil Colombiano (Extracto)", description: "Disposiciones para asociaciones civiles de utilidad común.", icon: FileText, link: "#" },
    { title: "Manual de Contratación", description: "Políticas y procedimientos para la contratación.", icon: FileText, link: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <Gavel className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 mb-4">
            {sectionTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              className="project-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex items-center mb-3">
                  <doc.icon className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{doc.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
              </div>
              <Button 
                onClick={() => showToast("Funcionalidad de descarga no implementada", `Próximamente podrás descargar: ${doc.title}`)} 
                variant="outline" 
                className="w-full mt-auto border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar Documento
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Button 
            onClick={() => showToast("Acceso a repositorio completo no implementado", "Próximamente podrás acceder a todos los documentos.")}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
          >
            Ver Repositorio Completo
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NormatividadSection;
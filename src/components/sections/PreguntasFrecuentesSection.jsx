import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqsData = [
  {
    question: "¿Qué es CORPOSINUSANJORGE?",
    answer: "Somos una Persona jurídica de derecho público sin ánimo de lucro, de carácter mixto, comprometida con el desarrollo integral y sostenible de las comunidades en la región del Sinú y San Jorge."
  },
  {
    question: "¿Cómo se financia la corporación?",
    answer: "Nuestra financiación proviene de una combinación de aportes del sector público (más del 50%), cooperación internacional, donaciones y recursos generados por nuestros propios proyectos y servicios."
  },
  {
    question: "¿Qué tipo de proyectos realiza CORPOSINUSANJORGE?",
    answer: "Implementamos proyectos en áreas como infraestructura social, educación, salud, medio ambiente, desarrollo económico local y fortalecimiento comunitario, siempre buscando mejorar la calidad de vida de los habitantes."
  },
  {
    question: "¿Cómo puedo participar o colaborar con la corporación?",
    answer: "Existen diversas formas de colaborar: a través de voluntariado, donaciones, alianzas estratégicas o participando en nuestras convocatorias. Contáctanos para más información."
  },
  {
    question: "¿Bajo qué marco legal opera la corporación?",
    answer: "Nuestra dirección, administración y contratación se rigen por el DERECHO PRIVADO, acorde a la Ley 489 de 1998, Art. 96 inciso tercero, y las disposiciones del Código Civil para asociaciones civiles de utilidad común."
  }
];

const PreguntasFrecuentesSection = ({ showToast }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <HelpCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600">Encuentra respuestas a las dudas más comunes sobre nuestra corporación y su labor.</p>
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants}>
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              className="project-card rounded-xl shadow-lg overflow-hidden"
              variants={itemVariants}
              layout
            >
              <motion.button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? <ChevronUp className="w-6 h-6 text-green-600" /> : <ChevronDown className="w-6 h-6 text-gray-500" />}
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Button 
            onClick={() => showToast("Formulario de contacto no implementado", "Próximamente podrás enviarnos tus preguntas directamente.")}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
          >
            ¿Tienes otra pregunta? Contáctanos
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PreguntasFrecuentesSection;
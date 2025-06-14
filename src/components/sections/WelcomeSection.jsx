import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, ShieldCheck } from 'lucide-react';

const WelcomeSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <motion.section 
      className="project-card rounded-3xl p-8 md:p-16 shadow-xl"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600"
          variants={cardVariants}
        >
          BIENVENIDOS
        </motion.h2>
        <motion.div 
          className="text-gray-700 leading-relaxed space-y-6 text-lg"
          variants={cardVariants}
        >
          <p>
            Bienvenidos a la <strong className="text-green-700">Corporación del Sinú y San Jorge para la Ayuda Social</strong>. <strong>CORPOSINUSANJORGE</strong> es una <strong className="text-green-700">Persona jurídica de derecho público sin ánimo de lucro</strong> de carácter mixto con más del 50% de participación del sector público. Estamos dotados de personería jurídica con <strong className="text-green-700">autonomía administrativa</strong> y patrimonio propio e independiente de los asociados que la integran, administrada por sus propios estatutos.
          </p>
          <p>
            Nuestra dirección, administración y contratación se rigen por el <strong className="text-green-700">DERECHO PRIVADO</strong>, acorde a la Ley 489 de 1998, Art. 96 inciso tercero: "Cuando en virtud de lo dispuesto en el presente artículo, surjan personas jurídicas sin ánimo de lucro, estas se sujetarán a las disposiciones previstas en el Código Civil para las asociaciones civiles de utilidad común."
          </p>
        </motion.div>
        <motion.div 
          className="mt-12 grid md:grid-cols-3 gap-8 text-center"
          variants={cardVariants}
        >
          <div className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Derecho Público</h3>
            <p className="text-sm text-gray-600">Entidad sin ánimo de lucro con participación mayoritaria del sector público.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Autonomía</h3>
            <p className="text-sm text-gray-600">Administrativa y patrimonial, regida por estatutos propios.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Marco Legal</h3>
            <p className="text-sm text-gray-600">Operamos bajo el derecho privado según la Ley 489 de 1998.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
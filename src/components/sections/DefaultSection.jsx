import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';

const DefaultSection = ({ sectionName, showToast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <div className="project-card rounded-3xl p-12 md:p-16 max-w-2xl mx-auto shadow-xl">
        <Construction className="w-16 h-16 text-yellow-500 mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          {sectionName ? `Sección "${sectionName}"` : "Sección"} en Desarrollo
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Estamos trabajando arduamente para traerte el mejor contenido. ¡Esta sección estará disponible muy pronto!
        </p>
        <Button 
          onClick={showToast} 
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Notificarme cuando esté lista
        </Button>
      </div>
    </motion.div>
  );
};

export default DefaultSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, MapPin, FileText } from 'lucide-react';
import { projects as projectsData, getTypeColor } from '@/data/projectsData';

const ProyectosSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 py-8"
    >
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NUESTROS PROYECTOS
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubre las iniciativas que están transformando nuestras comunidades, impulsando el desarrollo social y mejorando la calidad de vida.
        </motion.p>
      </div>

      <div className="grid gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card rounded-3xl p-6 md:p-8 card-hover shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start justify-between mb-6">
              <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <FileText className="w-7 h-7 mr-3 text-green-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h3>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{project.location}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="ml-auto md:ml-4 rounded-full border-2 border-gray-300 hover:border-green-500 hover:bg-green-50"
              >
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <AnimatePresence>
              {expandedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {project.links.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 group"
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-3.5 h-3.5 rounded-full ${getTypeColor(link.type)} flex-shrink-0`}></div>
                            <div>
                              <p className="font-medium text-gray-900 group-hover:text-green-600 transition-colors text-sm">
                                {link.name}
                              </p>
                              <p className="text-xs text-gray-500">{link.type}</p>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {expandedProject !== project.id && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.links.slice(0, 4).map((link, linkIndex) => (
                  <span
                    key={linkIndex}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getTypeColor(link.type)} shadow-sm`}
                  >
                    {link.type}
                  </span>
                ))}
                {project.links.length > 4 && (
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-500 text-white shadow-sm">
                    +{project.links.length - 4} más
                  </span>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProyectosSection;
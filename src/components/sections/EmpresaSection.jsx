import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Briefcase, ShieldCheck, HeartHandshake as Handshake } from 'lucide-react';

const EmpresaSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardData = [
    {
      icon: Users,
      title: "QUIÉNES SOMOS",
      description: "Somos CORPOSINUSANJORGE, una organización comprometida con el desarrollo integral y sostenible de las comunidades de toda nuestra región caribe. Guiados por nuestros principios de transparencia, ética y compromiso con la comunidad, trabajamos incansablemente para promover el bienestar social, la equidad y la inclusión. Nos destacamos por nuestra capacidad para innovar y encontrar soluciones efectivas a los desafíos sociales, colaborando estrechamente con diversos actores para lograr un impacto significativo y duradero.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Target,
      title: "MISIÓN",
      description: "En CORPOSINUSANJORGE, nos comprometemos a promover el desarrollo integral y sostenible de las comunidades, a través de la implementación de proyectos y programas sociales que fomenten la equidad, la inclusión y el bienestar de sus habitantes. Trabajamos de la mano con el sector público y la sociedad civil para impulsar iniciativas que mejoren la calidad de vida, fortalezcan el tejido social y contribuyan al crecimiento económico, garantizando siempre la transparencia, la eficiencia y el respeto por los derechos humanos y el medio ambiente.",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: Eye,
      title: "VISIÓN",
      description: "En CORPOSINUSANJORGE aspiramos a ser líderes reconocidos en el impulso del desarrollo comunitario y la transformación social en la región del Sinú y San Jorge. Nos proyectamos como una organización innovadora y sostenible, que inspire el cambio positivo y el progreso en todas las dimensiones de la vida de las personas. Buscamos consolidarnos como un referente de excelencia en la gestión de proyectos sociales, la participación ciudadana y la construcción de alianzas estratégicas, contribuyendo así a la construcción de una sociedad más justa, equitativa y próspera para las generaciones presentes y futuras.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="space-y-16 py-12"
    >
      <motion.section 
        className="bg-gradient-to-br from-green-50 via-teal-50 to-sky-50 rounded-3xl p-8 md:p-16 shadow-xl"
        variants={itemVariants}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600">
          NUESTRA EMPRESA
        </h1>
        
        <div className="space-y-12">
          {cardData.map((card, index) => (
            <motion.div 
              key={index}
              className={`project-card rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${card.bg}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <card.icon className={`w-10 h-10 md:w-12 md:h-12 mr-4 ${card.color}`} />
                <h2 className={`text-2xl md:text-3xl font-bold ${card.color}`}>{card.title}</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="max-w-5xl mx-auto px-4"
        variants={itemVariants}
      >
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 pb-2">
            Nuestros Pilares
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mt-2"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Briefcase, title: "Profesionalismo", text: "Ejecución experta y eficiente de proyectos." },
            { icon: ShieldCheck, title: "Integridad", text: "Actuamos con ética y transparencia en todo momento." },
            { icon: Handshake, title: "Colaboración", text: "Fomentamos alianzas para un mayor impacto." }
          ].map((pillar, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-600">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EmpresaSection;
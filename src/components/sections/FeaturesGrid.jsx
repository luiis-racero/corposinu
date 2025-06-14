import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, HeartHandshake } from 'lucide-react';

const FeaturesGrid = () => {
  const featureVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.2,
      }
    })
  };

  const features = [
    {
      icon: Target,
      title: "Misión",
      description: "Promover el desarrollo integral y sostenible de las comunidades, mejorando su calidad de vida.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Ser líderes reconocidos en el impulso del desarrollo comunitario y la transformación social positiva.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: HeartHandshake,
      title: "Valores",
      description: "Transparencia, ética, compromiso, colaboración e innovación en cada acción que emprendemos.",
      color: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="project-card rounded-2xl p-8 text-center card-hover transform transition-all duration-300 hover:shadow-2xl"
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={featureVariants}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
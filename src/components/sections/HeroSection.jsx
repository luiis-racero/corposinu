import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  const title = "CORPORACIÓN DEL SINÚ Y SAN JORGE";
  const subtitle = "PARA LA AYUDA SOCIAL";
  const imageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/47cb4c18-bb04-4c69-980c-13d386cc24d5/8757804539885e9b9303101e40e9e854.jpg";

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center w-screen -ml-[calc((100vw-100%)/2)] -mt-8">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-parallax" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 py-20 md:py-32">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-12 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 150 }}
        >
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl transition-transform hover:scale-105"
            onClick={() => setActiveSection('proyectos')}
          >
            Explorar Proyectos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full animate-float opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default HeroSection;
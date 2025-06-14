import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import EmpresaSection from '@/components/sections/EmpresaSection';
import ProyectosSection from '@/components/sections/ProyectosSection';
import DefaultSection from '@/components/sections/DefaultSection';
import NormatividadSection from '@/components/sections/NormatividadSection';
import PreguntasFrecuentesSection from '@/components/sections/PreguntasFrecuentesSection';
import ServiciosUsuarioSection from '@/components/sections/ServiciosUsuarioSection';
import { menuItems } from '@/data/menuData';

const LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/47cb4c18-bb04-4c69-980c-13d386cc24d5/8724736a02b42d19d061ede030cfcd6e.png";

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const showToast = (title = "🚧 Esta función aún no está implementada", description = "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀") => {
    toast({
      title: title,
      description: description,
      duration: 3000,
      className: "bg-yellow-500 text-black border-yellow-600",
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-16 md:space-y-24">
            <HeroSection setActiveSection={setActiveSection} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <WelcomeSection />
              <FeaturesGrid />
            </div>
          </div>
        );
      case 'empresa':
        return <EmpresaSection />;
      case 'proyectos':
        return <ProyectosSection />;
      case 'normatividad':
        return <NormatividadSection showToast={showToast} />;
      case 'preguntas':
        return <PreguntasFrecuentesSection showToast={showToast} />;
      case 'servicios':
        return <ServiciosUsuarioSection showToast={showToast} setActiveSection={setActiveSection} />;
      default:
        const currentItem = menuItems.find(item => item.id === activeSection);
        return <DefaultSection sectionName={currentItem?.label} showToast={showToast} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col overflow-x-hidden">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        logoUrl={LOGO_URL}
      />
      
      <main className="flex-grow w-full">
        {activeSection !== 'inicio' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        ) : (
          renderContent() 
        )}
      </main>

      <Footer setActiveSection={setActiveSection} logoUrl={LOGO_URL} />
      <Toaster />
    </div>
  );
};

export default App;
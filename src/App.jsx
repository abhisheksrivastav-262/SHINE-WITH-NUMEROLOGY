import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleCanvas from './components/ParticleCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CalculatorPage from './pages/CalculatorPage';
import StoriesPage from './pages/StoriesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} setSelectedService={setSelectedService} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} setSelectedService={setSelectedService} />;
      case 'calculator':
        return <CalculatorPage setActivePage={setActivePage} />;
      case 'stories':
        return <StoriesPage setActivePage={setActivePage} />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'booking':
        return <BookingPage selectedService={selectedService} setSelectedService={setSelectedService} />;
      default:
        return <HomePage setActivePage={setActivePage} setSelectedService={setSelectedService} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0D] text-[#F8F5EF] relative font-sans selection:bg-[#C8A44D] selection:text-black">
      <LoadingScreen />
      <ParticleCanvas />
      <CustomCursor />
      
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="relative z-10">
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
      <FloatingAction />
    </div>
  );
}

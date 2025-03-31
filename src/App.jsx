import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BusinessServices from "./components/BusinessServices";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/StatsSection";
import ReasonsSection from "./components/ReasonsSection";
import BusinessSection from "./components/BusinessSection";
import CallToAction from "./components/CallToAction";
import SolutionsSection from "./components/SolutionsSection";
import ClientSlider from "./components/ClientSlider";
import MediaMentions from "./components/MediaMentions";
import Testimonials from "./components/Testimonials";
import MobileAppSection from "./components/MobileAppSection";
import ContactForm from "./components/ContactForm";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import CopyrightFooter from "./components/CopyrightFooter";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BusinessServices />
      <ProductsSection />
      <StatsSection />
      <ReasonsSection />
      <BusinessSection />
      <CallToAction />
      <SolutionsSection />
      <ClientSlider />
      <MediaMentions />
      <Testimonials />
      <MobileAppSection />
      <ContactForm />
      <DownloadApp />
      <Footer />
      <CopyrightFooter />
     
         
    </div>
  );
};

export default App;



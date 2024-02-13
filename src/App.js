import React from "react";
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import JoinUs from './pages/JoinUs';
import AboutUs from './pages/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Physicians from "./pages/Physicians";
import ServicesArea from "./pages/ServicesArea";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();
  UIkit.use(Icons);

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="services/:id" element={<Services />} />
          <Route path="team/:id" element={<OurTeam />} />
          <Route path="joinUs/" element={<JoinUs />} />
          <Route path="aboutUs/" element={<AboutUs />} />
          <Route path="contactUs/" element={<ContactUs />} />
          <Route path="blog/" element={<Blog />} />
          <Route path="physicians/" element={<Physicians />} />
          <Route path="serviceAreas/" element={<ServicesArea />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;

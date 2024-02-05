import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

function App() {
  UIkit.use(Icons);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services/:id" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

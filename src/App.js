import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

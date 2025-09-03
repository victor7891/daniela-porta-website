import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles/main.scss';

import Home from "./pages/Home";



const Servicios = () => (
  <div style={{ paddingTop: '80px', padding: '2rem', textAlign: 'center' }}>
    <h1>Servicios</h1>
    <p>Découvrez nos services</p>
  </div>
);

const Manifesto = () => (
  <div style={{ paddingTop: '80px', padding: '2rem', textAlign: 'center' }}>
    <h1>Manifesto</h1>
    <p>Notre philosophie</p>
  </div>
);

const SobreMi = () => (
  <div style={{ paddingTop: '80px', padding: '2rem', textAlign: 'center' }}>
    <h1>Sobre Mi</h1>
    <p>À propos de moi</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Barra from "./Barra";
import Landing from './Landing';
import Proyectos from './Proyectos';
import Ecos from './Ecos';
import Metamorfosis from './Metamorfosis';
import Libro from './Libro';
import Acerca from "./Acerca";
import Contacto from "./Contacto";

function App() {
  return (
    <>
      <Barra />
      <div className="contenedor"> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/ecos" element={<Ecos/>}/>
        <Route path="/metamorfosis" element={<Metamorfosis/>}/>
        <Route path="/libro" element={<Libro />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

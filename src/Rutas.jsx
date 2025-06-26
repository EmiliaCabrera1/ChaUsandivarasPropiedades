import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Contacto from "./Paginas/Contacto";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default Rutas;

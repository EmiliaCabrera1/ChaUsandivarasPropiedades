import { useState, useEffect, useRef } from "react";

export default function SelectPersonalizado({ id, opciones }) {
  const [seleccionado, setSeleccionado] = useState(opciones[0]);
  const [abierto, setAbierto] = useState(false);
  const referencia = useRef(null);

  useEffect(() => {
    const manejarClickFuera = (evento) => {
      if (referencia.current && !referencia.current.contains(evento.target)) {
        setAbierto(false);
      }
    };
    document.addEventListener("mousedown", manejarClickFuera);
    return () => document.removeEventListener("mousedown", manejarClickFuera);
  }, []);

  return (
    <div ref={referencia} className="inline-flex relative w-56 select-none">
      <div
        onClick={() => setAbierto(!abierto)}
        className="bg-transparent border border-white text-white py-2 px-4 rounded-md cursor-pointer flex justify-between items-center hover:bg-white/10 w-3xs"
      >
        {seleccionado.etiqueta}
        <input className="hidden" type="text" value={seleccionado.valor} id={id} name={id}/>
        <span
          className={`ml-2 transition-transform ${abierto ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </div>

      {abierto && (
        <ul className="absolute w-full bg-white/10 rounded-md mt-1 z-10 shadow-md backdrop-blur">
          {opciones.map(
            (opcion) =>
              opcion.valor !== "hide" && (
                <li
                  key={opcion.valor}
                  onClick={() => {
                    setSeleccionado(opcion);
                    setAbierto(false);
                  }}
                  className={`py-2 px-4 text-white hover:bg-white/20 border-t border-white/30 ${
                    seleccionado.valor === opcion.valor
                      ? "bg-white/30 font-bold"
                      : ""
                  }`}
                >
                  {opcion.etiqueta}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

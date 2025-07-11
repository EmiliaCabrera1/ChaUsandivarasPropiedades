import { useState } from "react";
import DetalleCard from "./DetalleCard";

const Card = ({ propiedad: propiedad, index: index }) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const onClose = () => {
    setMostrarDetalle(false);
  };

  return (
    <>
      <div
        id={index}
        className="w-[90%] sm:w-[50%] h-70 sm:h-50 bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] my-6 mx-4 sm:m-8 flex-col sm:flex gap-2 sm:gap-8"
        onClick={() => setMostrarDetalle(!mostrarDetalle)}
      >
        <div className="relative sm:static">
          <img
            className="w-[105%] sm:w-[40%] h-30 sm:h-53 object-cover rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ml-2 -mt-3 sm:mt-2 absolute sm:static "
            src={propiedad.img}
            alt="Img prueba"
          />
        </div>
        <div className="w-full h-30 sm:w-48 sm:h-full sm:flex" id="1"></div>
        <div className="mt-0 sm:mt-2 mr-2 justify-start text-blue-900 gap-2 px-3 sm:px-0 ">
          <div className="flex items-center ">
            <h2 className="text-base sm:text-lg font-semibold">
              {propiedad.valor}
            </h2>
            <h3 className="text-sm">USD</h3>
          </div>
          <p className="text-xs sm:text-base my-1 sm:my-2">
            {propiedad.descripcion}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <img src="/assets/m2-tarjeta.svg" alt="m2" />
              <h6 className="text-xs sm:text-base ">{propiedad.m2} m2</h6>
            </div>
            <div className="flex items-center gap-1">
              <img src="/assets/hab-tarjeta.svg" alt="hab" />
              <h6 className="text-xs sm:text-base ">
                {propiedad.habitaciones} Habs.
              </h6>
            </div>
            <div className="flex items-center gap-1">
              <img src="/assets/bano-tarjeta.svg" alt="baño" />
              <h6 className="text-xs sm:text-base ">{propiedad.banos} Baño</h6>
            </div>
          </div>
          <p className="my-2 text-sm sm:text-base font-semibold">
            {propiedad.direccion}
          </p>
          <div className="flex items-center gap-2 sm:gap-4 mt-4 ">
            <img
              className="w-3 sm:w-4 h-3 sm:h-4"
              src="/assets/wapp-tarjeta.svg"
              alt="Whatsapp"
            />
            <img
              className="w-3 sm:w-4 h-3 sm:h-4"
              src="/assets/tel-tarjeta.svg"
              alt="Llamada"
            />
            <img
              className="w-3 sm:w-4 h-3 sm:h-4"
              src="/assets/email-tarjeta.svg"
              alt="Gmail"
            />
          </div>
        </div>
      </div>
      {mostrarDetalle && (
        <DetalleCard propiedad={propiedad} onClose={onClose} />
      )}
    </>
  );
};

export default Card;

const DetalleCard = ({ propiedad: propiedad, onClose: onClose }) => {
  return (
    <div className="fixed inset-0 bg-azul/80 sm:bg-azul/70 flex items-center justify-center z-50">
      <div className="mt-15 relative flex flex-col md:flex-row bg-white/95 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] rounded p-7 w-[90%] md:w-[70%] mx-5 md:mx-20 mb-20 h-[90%] md:h-[70%] overflow-hidden">
        <div className="absolute top-3 right-3 z-20 ">
          <button>
            <img src="./assets/cerrar.svg" alt="cerrar" onClick={onClose} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex flex-col flex-2 md:flex-1 md:mx-2 h-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <img
              className="object-cover h-full w-full rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              src={propiedad.img}
              alt="Img Principal"
            />
          </div>
          <div className="flex gap-1 mt-2 md:mt-0  md:mr-3 md:flex-col flex-1 h-1/5 mb-1 md:mb-2 md:h-full md:grid md:grid-rows-3">
            <img
              className="object-cover h-full  w-full mb-2 rounded-sm md:rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              src={propiedad.imgs[0]}
              alt="Img Uno"
            />
            <img
              className="object-cover h-full  w-full mb-2 rounded-sm md:rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              src={propiedad.imgs[1]}
              alt="Img Dos"
            />
            <img
              className="object-cover h-full  w-full mb-2 rounded-sm md:rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              src={propiedad.imgs[2]}
              alt="Img Tres"
            />
          </div>
          <div className="mt-1 md:mt-2 justify-start flex-2 md:flex-[1.5] text-blue-900 gap-2">
            <div className="flex items-center ">
              <h2 className="text-lg font-semibold">{propiedad.valor}</h2>
              <h3 className="text-sm">USD</h3>
            </div>
            <p className="my-2 text-base font-semibold">
              {propiedad.direccion}
            </p>
            <p className="my-2">
              {propiedad.descripcion}
            </p>
            <div className="flex items-center gap-4 text-xs ">
              <div className="flex items-start md:items-center gap-1 flex-col md:flex-row ">
                <img src="/assets/m2-tarjeta.svg" alt="m2" />
                <h6>{propiedad.m2} m2</h6>
              </div>
              <div className="flex items-start md:items-center gap-1 flex-col md:flex-row">
                <img src="/assets/hab-tarjeta.svg" alt="hab" />
                <h6>{propiedad.habitaciones} Habs.</h6>
              </div>
              <div className="flex items-start md:items-center gap-1 flex-col md:flex-row">
                <img src="/assets/bano-tarjeta.svg" alt="baño" />
                <h6>{propiedad.bano} Baño</h6>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-8 justify-end">
              <img
                className="w-4 h-4"
                src="/assets/wapp-tarjeta.svg"
                alt="Whatsapp"
              />
              <img
                className="w-4 h-4"
                src="/assets/tel-tarjeta.svg"
                alt="Llamada"
              />
              <img
                className="w-4 h-4"
                src="/assets/email-tarjeta.svg"
                alt="Gmail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleCard;

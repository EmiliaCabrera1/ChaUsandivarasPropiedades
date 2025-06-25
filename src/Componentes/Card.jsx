const Card = () => {
  return (
    <div className="w-[50%] h-50 bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] m-8 flex gap-8">
      <div>
        <img
          className="w-75 h-53 object-cover rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ml-2 mt-2"
          src="/assets/img-prueba.jpg"
          alt="Img prueba"
        />
      </div>
      <div className="mt-2 mr-2 justify-start text-blue-900 gap-2">
        <div className="flex items-center ">
          <h1 className="text-lg font-semibold">52.00</h1>
          <h2 className="text-sm">USD</h2>
        </div>
        <p className="my-2">
          Descripcion, vendo casa en vaqueros bla b la comoda comodisima mucho
          que contar
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <img src="/assets/m2-tarjeta.svg" alt="m2" />
            <h6>150 m2</h6>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assets/hab-tarjeta.svg" alt="hab" />
            <h6>2 Habs.</h6>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assets/bano-tarjeta.svg" alt="baño" />
            <h6>1 Baño</h6>
          </div>
        </div>
        <p className="my-2 text-base font-semibold">Vaqueros, Direccion X</p>
        <div className="flex items-center gap-4 mt-4 ">
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
  );
};

export default Card;

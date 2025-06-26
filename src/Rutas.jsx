const Rutas = () => {
  return (
    <div className="text-white flex flex-col gap-4 w-full h-[85vh] sm:h-[75vh] overflow-y-auto">
      <div className="my-4 text-base sm:mt-4 sm:text-xl text-center">
        <h1>ALQUILER-VENTA-COMPRA-TASACIONES INMOBILIARIAS</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-10 lg:gap-20 mx-auto w-full h-full max-h-full sm:items-center">
        <div className="mx-auto sm:mx-0">
          <img
            className="max-h-[40vh] object-scale-down"
            src="/assets/logo-contacto.svg"
            alt="Logo"
          />
        </div>
        <div className="text-xs gap-2 mx-auto sm:mx-0 sm:text-sm">
          <div className="mx-4 mb-8">
            <h2>DIEGO CHA USANDIVARAS</h2>
            <p className="flex items-center gap-2 mt-3 mb-2">
              <img
                className="w-4 h-4"
                src="/assets/celu-contacto.svg"
                alt="celu"
              />
              3876859356
            </p>
            <p className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src="/assets/email-contacto.svg"
                alt="email"
              />
              CHASITO1@GMAIL.COM
            </p>
          </div>
          <div className="mx-4">
            <h2>ANDREA FLORENCIA ROMERAO</h2>
            <p className="flex items-center gap-2 mt-3 mb-2">
              <img
                className="w-4 h-4"
                src="/assets/celu-contacto.svg"
                alt="celu"
              />
              3875771956
            </p>
            <p className="flex items-center gap-2">
              <img
                className="w-5 h-5"
                src="/assets/email-contacto.svg"
                alt="email"
              />
              ANDREAFLORENCIAROMERO@GMAIL.COM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rutas;

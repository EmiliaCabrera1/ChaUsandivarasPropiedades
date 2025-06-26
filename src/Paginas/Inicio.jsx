const Inicio = () => {
  return (
    <div>
      <div className=" block w-full m-20">
        <select
          className="w-[20%] text-white border border-white bg-transparent p-1 rounded-lg"
          name="Propiedad"
          id="propiedad"
        >
          <option value="Casa"></option>
          <option value="Departamento"></option>
          <option value="Terreno"></option>
          <option value="Comercio"></option>
        </select>
        <select name="Operacion" id="operacion"></select>
        <select name="Ubicacion" id="Ubicacion"></select>
        <button></button>
      </div>
      <div>
        <img
          className="max-h-[40vh] object-scale-down"
          src="/assets/logo-contacto.svg"
          alt="Logo"
        />
      </div>
      <h2></h2>
    </div>
  );
};

export default Inicio;

const Encabezado = () => {
  return (
    <header>
      <nav className="h-[15vh] flex justify-between items-center p-4 pl-10 shadow border-b border-white">
        <figure>
          <img src="./assets/logonav.svg" alt="Logo" className="h-10" />
        </figure>
        <button className="text-white text-sm px-4 py-2 rounded-sm border border-white mx-10">
          CONTACTO
        </button>
      </nav>
    </header>
  );
};

export default Encabezado;

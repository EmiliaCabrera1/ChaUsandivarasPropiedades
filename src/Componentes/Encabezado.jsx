const Encabezado = () => {
  return (
    <header>
      <nav className="h-[10vh] sm:h-[15vh] flex justify-between items-center pl-2 sm:p-4 sm:pl-10 shadow border-b border-white">
        <figure>
          <img src="./assets/logonav.svg" alt="Logo" className="h-10" />
        </figure>
        <button className="text-white text-xxs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-sm border border-white mx-4 sm:mx-10">
          CONTACTO
        </button>
      </nav>
    </header>
  );
};

export default Encabezado;

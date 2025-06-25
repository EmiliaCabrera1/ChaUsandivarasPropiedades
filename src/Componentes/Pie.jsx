const Pie = () => {
  return (
    <footer>
      <div className="h-[10vh] flex justify-center items-center gap-6 p-4 shadow border-t border-white p-10">
        <button className=" w-7 h-7">
          <img src="./assets/wapp.svg" alt="Logo whatsapp" className="h-10" />
        </button>
        <button className=" w-7 h-7">
          <img src="./assets/insta.svg" alt="Logo instagram" className="h-10" />
        </button>
        <button className=" w-7 h-7 ">
          <img src="./assets/gmail.svg" alt="Logo gmail" className="h-10" />
        </button>
      </div>
    </footer>
  );
};

export default Pie;

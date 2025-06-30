import Rutas from "./Rutas";
import Pie from "./Componentes/Pie";
import Encabezado from "./Componentes/Encabezado";

function App() {
  return (
    <div className="flex flex-col h-screen bg-azul">
      <Encabezado />
      <main className="w-full h-[85vh] sm:h-[75vh] overflow-y-auto">
        <Rutas />
      </main>
      <Pie />
    </div>
  );
}

export default App;

import Rutas from "./Rutas";
import Pie from "./Componentes/Pie";
import Encabezado from "./Componentes/Encabezado";

function App() {
  return (
    <div className="flex flex-col h-screen bg-azul">
      <Encabezado />
      <main className="overflow-y-auto mb-10 md:mb-10 h-[75vh]">
        <Rutas />
      </main>
      <Pie />
    </div>
  );
}

export default App;

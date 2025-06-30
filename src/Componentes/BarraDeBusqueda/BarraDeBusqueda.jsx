import SelectPersonalizado from "../SelectPersonalizado";

const opcionesPropiedades = [
    { valor: "hide", etiqueta: "Propiedades" },
    { valor: "casa", etiqueta: "Casa" },
    { valor: "departamento", etiqueta: "Departamento" },
    { valor: "terreno", etiqueta: "Terreno" },
    { valor: "comercio", etiqueta: "Comercio" },
];

const opcionesOperacion = [
    { valor: "alquiler", etiqueta: "Alquiler" },
    { valor: "venta", etiqueta: "Venta" },
];

const opcionesUbicacion = [
    { valor: "centro", etiqueta: "Centro" },
    { valor: "tresCerritos", etiqueta: "Tres Cerritos" },
];

const BarraDeBusqueda = () => {

    const buscar = (e) => {
        console.log("Buscando propiedades...");
        console.log(e);
    }

    return (
        <form action='/test-sbmit.php' method="post">
            <div className="flex space-x-6 flex-wrap space-y-4 justify-center">
                <SelectPersonalizado
                    id="tipoPropiedad"
                    opciones={opcionesPropiedades} />
                <SelectPersonalizado
                    id="tipoOperacion"
                    opciones={opcionesOperacion} />
                <SelectPersonalizado
                    id="ubicacion"
                    opciones={opcionesUbicacion} />
                <button type="submit" className="w-40 h-10 bg-white rounded-lg border-2 border-white" onClick={buscar} >
                    Buscar
                </button>
            </div>
        </form>
    )
}

export default BarraDeBusqueda
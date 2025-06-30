import BarraDeBusqueda from "../Componentes/BarraDeBusqueda/BarraDeBusqueda";
import Card from "../Componentes/Card";

const propiedades = [{
  img: "/assets/img-prueba.jpg",
  valor: 57.00,
  descripcion: "Descripcion, vendo casa en vaqueros bla b la comoda comodisima mucho que contar",
  m2: 150,
  habitaciones: 2,
  banos: 1,
  direccion: "Vaqueros, Direccion X",
  imgs: [
    "/assets/img-prueba.jpg",
    "/assets/img-prueba.jpg",
    "/assets/img-prueba.jpg"
  ]
}, {
  img: "/assets/img-prueba.jpg",
  valor: 180.00,
  descripcion: "Descripcion, vendo casa en vaqueros bla b la comoda comodisima mucho que contar",
  m2: 150,
  habitaciones: 2,
  banos: 1,
  direccion: "Vaqueros, Direccion X",
    imgs: [
    "/assets/img-prueba.jpg",
    "/assets/img-prueba.jpg",
    "/assets/img-prueba.jpg"
  ]
}]

const Inicio = () => {
  return (
    <div className="mt-8 sm:mt-14">
      <BarraDeBusqueda />
      <div>
        {propiedades.map((propiedad, index) => (
          <Card key={index}
            propiedad={propiedad} />))}
      </div>
    </div>)
}

export default Inicio
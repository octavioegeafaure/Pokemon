import { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = () => {

  const [store, dispatch] = useContext(FormContext)

  const sendData = ()=>{
    alert("Solicitud enviada :)")
    dispatch({ type: "SEND"})
  }

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {store?.data?.nombre}</p>
          <p>Apellido: {store?.data?.apellido}</p>
          <p>Email: {store?.data?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {store?.data?.nombrePokemon}</p>
        </div>
        <div className="fila">
          <p>Tipo: {store?.data?.tipoPokemon}</p>
        </div>
        <div className="fila">
          <p>Elemento: {store?.data?.elementoPokemon}</p>
        </div>
        <div className="fila">
          <p>Altura: {store?.data?.alturaPokemon}</p>
        </div>
        <div className="fila">
          <p>Edad: {store?.data?.edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={sendData}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;

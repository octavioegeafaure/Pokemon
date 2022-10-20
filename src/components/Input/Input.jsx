import { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, alt, type = "text" }) => {
  const [store, dispatch] = useContext(FormContext);
  const [inputState, setInputState] = useState("");

  const onChange = (e) => {
    setInputState(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();
    {if (e.target.alt !== 'pokemon') {
      console.log(store)
      dispatch({
        type: "ACTUALIZAR_ENTRENADOR",
        payload: { ...store?.data, [e.target.name]: e.target.value },
      })
    } else dispatch({
        type: "ACTUALIZAR_POKEMON",
        payload: { ...store?.data, [e.target.name]: e.target.value },
      });
    }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={inputState}
        name={name}
        alt={alt}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

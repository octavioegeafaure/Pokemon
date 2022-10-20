// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";

export const FormContext = createContext();

const initialState = {};

const inputReducer = (state, action) => {
  switch (action.type) {
      case 'ACTUALIZAR_ENTRENADOR':
          return {
            ...state,
            data: action.payload
          }
      case 'ACTUALIZAR_POKEMON':
          return {
            ...state, 
            data: action.payload
          }
      case 'SEND' :
          return state = null;
      default :
        return state
  }
}



export const FormularioProvider = ({children}) => {
  const [store, dispatch] = useReducer(inputReducer, initialState)

  return (
    <FormContext.Provider value={[store, dispatch]}>
        {children}
    </FormContext.Provider>
  )
}



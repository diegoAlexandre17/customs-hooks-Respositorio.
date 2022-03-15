import React, { useState } from "react";

const useForm = (initialState = {}) => {
  //CustomHook que se encarga de manejar los formularios
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
      //Esta sintaxis la usamos para establecer el nuevo estado, donde la propiedad que haya cambiado en target.name (dependiendo del input que se haya usado, por ejemplo si se uso el input de name el valor de target.name sera name, si se uso el input del correo, el valor de target.name sera email), esto lo asignara a su propiedad correspondiente,  si es email o si es name
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;

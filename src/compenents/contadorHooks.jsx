import React, { useState } from "react";

export default function ContadorHooks() {
  //use state recibre dos parametros, el valor que tendra el estado y la funcion que lo va actualizar
  //se usa el nombre de la variable y se recomineda usar el set en la funcion actualizar

  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
 
  return (
    <>
      <h2>Hooks-User state</h2>
      <h3>{contador}</h3>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </>
  );
}

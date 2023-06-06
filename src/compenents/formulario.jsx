import React, { useState } from "react";

//formulario sencillo donde cada item del formulario tiene su propio estado
/* export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

const handleSubmit=(e)=>{
    e.preventDefault()
    alert("datos enviados")
}

  return (
    <>
      <h2>formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre</label>
        {/*         //input controlado por el estado
         */ /* }{" "} */
/*   <input
          id="nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <h3>Elige tu sabor de JS favorito</h3>
        <input defaultChecked type="radio" name="sabor" id="vainilla" value="vainilla" onChange={e=>setSabor(e.target.value)} />
        <label htmlFor="vainilla">Vainilla</label>
        <input type="radio" name="sabor" id="react" value="react" onChange={e=>setSabor(e.target.value)} />
        <label htmlFor="react">React</label>
        <input type="radio" name="sabor" id="angular" value="angular" onChange={e=>setSabor(e.target.value)} />
        <label htmlFor="angular">Angular</label>
        <input type="radio" name="sabor" id="vue" value="vue" onChange={e=>setSabor(e.target.value)} />
        <label htmlFor="vue">Vue</label>
        <input type="radio" name="sabor" id="svelte" value="svelte" onChange={e=>setSabor(e.target.value)} />
        <label htmlFor="svelte">Svelte</label>

        <p>Selecciona tu lenguaje favorito</p>
        <select name="name" onChange={e=>setLenguaje(e.target.value)} defaultValue="- - -">
            <option value="">- - -</option>
            <option value="js">JavaScript</option>
            <option value="php">PHP</option>
            <option value="py">Phython</option>
            <option value="go">GO</option>
            <option value="rb">Ruby</option>
        </select>
<br />
        <label htmlFor="terminos">Acepto los terminos</label>
      <input type="checkbox" name="terminos" id="terminos" value onChange={(e)=> setTerminos(e.target.checked)} />
    
    <input type="submit" value="submit" />
      </form>
    </> */
/* );
} */

//formulario donde se tiene una sola varibale de estado, se guarda cada input en un objeto
export default function Formulario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChecked = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("datos enviados");
  };

  return (
    <>
      <h2>formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre</label>
        {/*         //input controlado por el estado
         */}{" "}
        <input
          id="nombre"
          type="text"
          name="nombre"
          defaultValue={""}
          onChange={handleChange}
        />
        <h3>Elige tu sabor de JS favorito</h3>
        <input
          defaultChecked
          type="radio"
          name="sabor"
          id="vainilla"
          value="vainilla"
          onChange={handleChange}
        />
        <label htmlFor="vainilla">Vainilla</label>
        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          name="sabor"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Selecciona tu lenguaje favorito</p>
        <select name="name" onChange={handleChange} defaultValue="- - -">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Phython</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto los terminos</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          defaultChecked={false}
          onChange={handleChecked}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

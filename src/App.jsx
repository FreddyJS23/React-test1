import React from "react";
import "./App.css";
//import de un export defaul
import Concepto from "./compenents/Concepto";
//impor de un export por nombre
import { ConceptoFuncional } from "./compenents/Concepto";
import EstadoSinHook from "./compenents/estadoSinHook";

import RenderizadoCondicional from "./compenents/renderizadoCondicional";
import RenderizadoElemento from "./compenents/RenderizadoElemento";
import {EventosES6,EventosES7, MasSobreEventos} from "./compenents/eventos"
import ComunicacionCompente from "./compenents/ComunicacionComponentes"
import CicloVida from "./compenents/cicloVida"
import AjaxApis from "./compenents/ajaxApis"
import ContadorHooks from "./compenents/contadorHooks"
import ScrollHooks from "./compenents/scrollHook"
import RelojHooks from "./compenents/relojHooks"
import AjaxApisHooks from "./compenents/ajaxApisHooks"
import HooksPersonalizado from "./compenents/hooksPersonalizados";
import Referencias from "./compenents/referencias";
import Formulario from "./compenents/formulario";
import Estilos from "./compenents/estilos";


function App() {
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Concepto msj="soy compenente" />
      </section>
      <section>
        <ConceptoFuncional msj="soy compenente funcional y exportado por nombre" />
      </section>

      <section>
        <EstadoSinHook />
      </section>

      <section>
        <RenderizadoCondicional />
      </section>

      <section>
        <RenderizadoElemento />
      </section>
      
      <section>
        <EventosES6 />
      </section>
      <section>
        <EventosES7 />
      </section>
     
      <section>
        <MasSobreEventos />
      </section>
      <section>
        <ComunicacionCompente />
      </section>
      
            
      <section>
        <CicloVida />
      </section>
            
      <section>
        <AjaxApis />
      </section>
     
     
      <section>
        <ContadorHooks />
      </section>
      
      <section>
        <ScrollHooks />
      </section>
      
      <section>
        <RelojHooks />
      </section>
    
      <section>
        <AjaxApisHooks />
      </section>

<section>
    <HooksPersonalizado/>
</section>

<section>
  <Referencias />
</section>
    
<section>  <Formulario/> </section>

<section><Estilos/> </section>

      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

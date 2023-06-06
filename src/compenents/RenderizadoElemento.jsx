import React, { Component } from "react";
import DataFramework from "../helpers/data.json";

 const Data=(props)=>{
    return(
        <li>
            <a href={props.dataFramework.web} target="_blank" >{props.dataFramework.name}</a>
        </li>
    )
}
 

export default class RenderizadoElemento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    return (
      <div>
        <h2>renderizado de elementos</h2>
        <h3>Estaciones dle año</h3>
        <ol>
          
          {this.state.seasons.map((el,index) => (
            //key es el id que necesita react
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks</h3>
        <ul>
            {DataFramework.frameworks.map((el,index)=>(  <Data key={el.id} dataFramework={el} />))}
        </ul>
      </div>
    );
  }
}

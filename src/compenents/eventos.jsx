import React, { Component } from "react";




export class EventosES6 extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0
 
   };
//bindiar metodo para usar this
   this.Sumar=this.Sumar.bind(this)
   this.Restar=this.Restar.bind(this)

}

 Sumar() {
   console.log("sumando")
    this.setState({contador:this.state.contador + 1})
}
 Restar() {
    this.setState({contador:this.state.contador - 1})
}


  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <h3>{this.state.contador}</h3>

        <button onClick={this.Sumar}>+</button>
        <button onClick={this.Restar}>-</button>
      </div>
    );
  }
}



//properties initializer
export class EventosES7 extends Component {
state={
    contador:0
}

//funciones flechas heredan el this donde se encuentran por eso no precisan del binding
 Sumar=()=> {
   console.log("sumando")
    this.setState({contador:this.state.contador + 1})
}
 Restar=()=> {
    this.setState({contador:this.state.contador - 1})
}


  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
        <h3>{this.state.contador}</h3>

        <button onClick={this.Sumar}>+</button>
        <button onClick={this.Restar}>-</button>
      </div>
    );
  }
}

/* ------------- funcion con return implicito se hace parentesis ------------ */
//const Boton=(props)=>(  <button onClick={props.myOnClick}>Boton en componente para evento personalizado</button>)


/* ------------- funcion con return implicito se hace parentesis y tecnina de destructuracion de props ------------ */
const Boton=({myOnClick})=>(  <button onClick={myOnClick}>Boton en componente para evento personalizado</button>)

export class MasSobreEventos extends Component{

handlerClick=(e,parametro)=>{
    //synthetic event de react
    console.log(e)
    //evento nativo
    console.log(e.nativeEvent)

    console.log(parametro)
}
    render(){
    return(
        <div><h2>Mas sobre eventos</h2>
        <button onClick={(e)=>this.handlerClick(e,"Pasando parametro por evento")}>Saludar</button>
       
{/*        evento personalizado en componente*/}
        <Boton myOnClick={(e)=>this.handlerClick(e,"Pasando parametro por un evento personalizado")} />
        </div>
   
    )
}

}
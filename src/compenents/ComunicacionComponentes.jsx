import React, { Component } from 'react'

export default class Padre extends Component{
    state={
        contador:0
    }

incrementarContador=()=>(
    this.setState({contador:this.state.contador + 1})
   

    )
    
    render(){
        return(
           //fragmento
           <>
            <h2>comunicacion entre componenetes</h2>
            <Hijo incrementarContador={this.incrementarContador} mensaje="mensaje hijo1" />
            </>
        )
    }
} 
//una accion del componente hijo afecta al padre ocasionando que se renderize de nuevo producto del cambio de estado
function Hijo(props){
    return(
       <>
        <h2>{props.mensaje}</h2>
        <button onClick={props.incrementarContador}>Incrementar contador</button>
       </>
    )
}
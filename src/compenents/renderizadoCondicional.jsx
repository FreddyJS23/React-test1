import React, { Component } from "react";

const Login=()=>{
    return(
        <div><h3>Login</h3></div>
    )
}
const Logout=()=>{
    return(
        <div><h3>Logout</h3></div>
    )
}

export default class RenderizadoCondicional extends Component {
  constructor(props){
    super(props)
    this.state={
        session:true
    };
  }
  
    render() {
    return (
      <div>
        <h2>Renderizado condicional</h2>
      
       {/*  operador ternirario (condional  ? caso true :caso false) */}
        
        {this.state.session ? <Login /> : <Logout />}
      </div>
    )
  }
}

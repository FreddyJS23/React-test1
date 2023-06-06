import React, { Component } from 'react'

const ContadorHijo=(props)=>{

   return <div><h2>{props.ContadorHijo}</h2></div>
}


export default class Estado extends Component{
//recibir props componente de clase
    constructor(props){
    super(props)
    //crear estado
    this.state={
        contador:0
    }
/* setInterval(() => {
    this.setState({
        contador:this.state.contador + 1
    })
        
    
}, 1000); */

}
    render(){
        return(
            <div><h2>Estado sin hook</h2>
            <p>{this.state.contador}</p>
            
            <ContadorHijo ContadorHijo={this.state.contador} />
            </div>
            
        )
    }
}
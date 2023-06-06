import React, { Component } from "react";


class Hora extends Component{
    constructor(props){
        super(props)
    }
    //fase de eliminacion de un componente
    componentWillUnmount(){
        console.log("El componente ha sido eliminado")
    }
     
    
render(){
    return(
        <h2>{this.props.hora}</h2>
    )
}
}







export default class cicloVida extends Component {
  constructor(props) {
    super(props);
    //fase montaje de un componente
    console.log(0, "El componente se inicializa pero no esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible:false
    };
    this.temporizador = null; 
}



    
Tictac = () => {
  this.temporizador = setInterval(() => {
    this.setState({ hora: new Date().toLocaleTimeString() });
  }, 1000);
};

Iniciar = () => {
  this.Tictac();
  this.setState({
    visible:true
  })
};

Detener = () => {
  clearInterval(this.temporizador);
  this.setState({
    visible:false
  })
};

//cuando se hagan peticiones no se hacen en el contructor sino aca, tambien abarca fase de montaje
componentDidMount(){
    console.log(1,"El componente ya esta en el DOM")
  
}

//fase de actualizacion de componente
componentDidUpdate(preProps,preState){
    console.log("EL estado o las props del componente han cambiado")
    console.log(preProps)
    console.log(preState)
}




  render() {
    console.log(
      4,
      "El componente se dibuja o redibuja si hay cambio en el DOM"
    );
    return (
      <>
        <h2>Cliclo de vida de componente de clase</h2>
{/*        cumple la condicion si es verdadera(operador cortocircuito)*/}
       {this.state.visible && <Hora hora={this.state.hora} />} 
        <button onClick={this.Iniciar}>Iniciar</button>
        <button onClick={this.Detener}>Detener</button>
      </>
    );
  }
}

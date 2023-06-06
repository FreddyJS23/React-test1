import React,{Component} from 'react';

//componente de clase, con los hooks se usa menos
class Concepto extends Component {
    
    render() { 
    return(     
        <div className='container-concepto'>
         
            <div className='container-concepto-texto'>
                <h2 className='titulo-concepto'>Que son las celulas</h2>
                <h3> {this.props.msj}</h3>
                <p className='texto-concepto'>La célula (del latín cellula, diminutivo de cella, ‘celda’)1​ es la unidad morfológica y funcional de todo ser vivo. De hecho, la célula es el elemento de menor tamaño que puede considerarse vivo.2​ De este modo, puede clasificarse a los organismos vivos según el número de células que posean: si solo tienen una, se les denomina unicelulares (como pueden ser los protozoos o las bacterias, organismos microscópicos); si poseen más, se les llama pluricelulares.</p>
            </div>

            
        </div>
   )}
}

//componente funcional (funcion no declarada)
function ConceptoFuncional(props){ 

    return (

        <div className='container-concepto'>
         
            <div className='container-concepto-texto'>
                <h2 className='titulo-concepto'>Que son las celulas</h2>
                <h3>{props.msj}</h3>
                <p className='texto-concepto'>La célula (del latín cellula, diminutivo de cella, ‘celda’)1​ es la unidad morfológica y funcional de todo ser vivo. De hecho, la célula es el elemento de menor tamaño que puede considerarse vivo.2​ De este modo, puede clasificarse a los organismos vivos según el número de células que posean: si solo tienen una, se les denomina unicelulares (como pueden ser los protozoos o las bacterias, organismos microscópicos); si poseen más, se les llama pluricelulares.</p>
            </div>

            
        </div>
        )
  }

//componente funcional (funcion expresada)(en la funcion tipo flecha el return es implicito, es decir se retorna sola)
const ConceptoFuncionalExpresada=props=>{ 

      <div className='container-concepto'>
         
            <div className='container-concepto-texto'>
                <h2 className='titulo-concepto'>Que son las celulas</h2>
                <h3> {props.msj}</h3>
                <p className='texto-concepto'>La célula (del latín cellula, diminutivo de cella, ‘celda’)1​ es la unidad morfológica y funcional de todo ser vivo. De hecho, la célula es el elemento de menor tamaño que puede considerarse vivo.2​ De este modo, puede clasificarse a los organismos vivos según el número de células que posean: si solo tienen una, se les denomina unicelulares (como pueden ser los protozoos o las bacterias, organismos microscópicos); si poseen más, se les llama pluricelulares.</p>
            </div>

            
        </div>
       
  }



//expor por defalut
export default Concepto;

//export por nombre
export {ConceptoFuncional}
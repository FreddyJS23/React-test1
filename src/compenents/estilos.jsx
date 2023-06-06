import React from 'react'
import './estilos.css'
import estiloModule from './estilos.module.css'

export default function Estilos() {
    return(
        <section className='estilos'>
            <h2>estlos css en react</h2>
            <h3 className='estilo-hojaExterna'>estilo de react en hoja exterta</h3>
            <h3 style={{borderRadius:"3rem", color:"red"}}>estilo react en linea</h3>
            <h3 className={estiloModule.error}>estilos react en modulo</h3>
            <h3 className={estiloModule.succes}>estilos react en modulo</h3>
        </section>
    )
}
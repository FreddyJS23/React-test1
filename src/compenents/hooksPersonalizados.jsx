import React from 'react'
import {useFetch} from '../hooks/useFetch'

export default function HooksPersonalizado(){
    let url = "https://pokeapi.co/api/v2/pokemons/";

    let {data,isPending,error}=useFetch(url)

    return(
       <>
        {console.log(useFetch())}
        <h2>Hook personalizado</h2>
        <h3>{JSON.stringify(isPending)}</h3>
        <h3><p>{JSON.stringify(error)}</p></h3>
        <h3><pre style={{whiteSpace:"pre-wrap"}} ><code>{JSON.stringify(data)}</code></pre></h3>
       </>
    )
}
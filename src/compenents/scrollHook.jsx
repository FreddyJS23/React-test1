import React, { useState, useEffect } from "react";

export default function ScrollHook() {
  const [scrollY, setScrollY] = useState(0);

  
  useEffect(() => {
    console.log("moviendo scroll");

    const detectarScrollY = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScrollY);
  
    //fase desmontaje
  return()=>{  window.removeEventListener("scroll", detectarScrollY);
}
  
  }, [scrollY]);

  useEffect(
    () => {
      console.log("fase montaje");
    },
    //se utiliza para control variable de estados va dentro de un array, osea se va cambiar cuando la varibale cambie
    //pero si se quiere simular una fase de montaje es decir que se ejecute una sola vez, se deja el array vacio
    []
  );

  useEffect(() => {
    console.log("fase de actualizacion");
  });
  
  
  useEffect(() => {
    
    return()=>{ console.log("fase de desmontaje"); }
   
  
  
  });

  return (
    <>
      <h2>Hook useEffect y el ciclo de vida</h2>
      <p>ScrollY del navegador {scrollY}</p>
    </>
  );
}

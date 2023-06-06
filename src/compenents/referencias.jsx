import React, { createRef,useRef } from "react";

export default function Referencias() {
 //crear ref en componente de clase
  //let refMenu=createRef()
  
  let refMenuBton=useRef();
  let refMenu=useRef();

 const handleToggleMenu=(e)=>{

  let menu=document.getElementById("menu")

/*  
 if(menu.style.display== "none"){ 

 menu.style.display="block";

 e.target.textContent="Cerrar"

 }else{
  menu.style.display="none"
  e.target.textContent="Menu"
 } */
 
 if(refMenu.current.style.display== "none"){ 

 refMenu.current.style.display="block";

 refMenuBton.current.textContent="Cerrar"

 }else{
  refMenu.current.style.display="none"
  refMenuBton.current.textContent="Menu"
 }
} 
  return (
    <>
      <h2>referencias</h2>
      <button id="menu-bton" ref={refMenuBton} onClick={handleToggleMenu}>menu</button>
     
      <nav id="menu" ref={refMenu} style={{display:"none"}}>
        {/* //crea 5 a y br, y enumera lass seccion del 1 al 5
        a*5{seccion $} */}

        <a href="#">seccion 1</a><br />
        <a href="#">seccion 2</a><br />
        <a href="#">seccion 3</a><br />
        <a href="#">seccion 4</a><br />
        <a href="#">seccion 5</a><br />
      </nav>
    </>
  );
}

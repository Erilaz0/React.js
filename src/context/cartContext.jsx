import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext()


export const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({ children }) =>{

   

    const [carrito , SetCarrito] = useState(carritoLocalStorage)

   const handleAgregarCarrito = (planta,cantidad) => {//funcion para agregar plantas al carrito
    
    
     if(planta.nombre && planta.precio){
      const agregarAlCarro = {...planta,cantidad} //aca se guarda el producto que selecionamos al apretar agregar al carrito junto con su cantidad
      const carritoCont = [...carrito] //contiene todos los productos junto con su cantidad despues pasarle al SetCarrito su nuevo valor
      const consultarCarrito = carrito.find((item)=> item.id === agregarAlCarro.id) //aca estabamos filtrando para que no puedan agregarse productos reptidos pero no lo terminamos aun luego borra esto

      if (consultarCarrito){
           consultarCarrito.cantidad += cantidad
           
                           }
      
      else( 
            carritoCont.push(agregarAlCarro)
           ) //aca agregamos al carrito lo q ya teniamos en el carrito mas el nuevo item para que asi no se sobreescriba el valor que habia antes y asi poder tener todos los productos
      SetCarrito(carritoCont)
      
      }
      

      
      }
    
    const cantidadCarrito = () => {
 
      return carrito.reduce((acumulador,planta) => acumulador + planta.cantidad, 0)

    }

    const precioTotalPlantas = () => {

     return carrito.reduce((acumulador,planta) => acumulador + planta.precio * planta.cantidad,0)

    }

    const borrarCarrito = () =>{SetCarrito([])}

     //al pasarle children en el medio estamos diciendo que queremos que todos los componentes que esten dentro del cartcontext.provider hereden lo q les pasamos por el provider value

     useEffect(()=>{

        localStorage.setItem("carrito", JSON.stringify(carrito))
        },[carrito])                                                                                                             
   return(
        <CartContext.Provider value={{ carrito , handleAgregarCarrito, cantidadCarrito , precioTotalPlantas , borrarCarrito}}>

             {children} 
           

        </CartContext.Provider>



    )



}
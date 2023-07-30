import cart from "../assets/plantap.png"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext"

const imagenes = {

    img:{
            height:"100px",
            width:"100px",


    },
 }

const letraColor = {

     st:{
           color:"white"


     }


}


export const CartWidget = () =>{ 

  
const { cantidadCarrito } = useContext(CartContext)
//importamos la cantidad otal de productos que hay en el carro para ponerla junto al logo del carrito

return (
    <div>
      <Link className="menu-link" to="/carrito">
        <img src={cart} style={imagenes.img} alt="planta"></img>
        <span style={{color:"black"}}> { cantidadCarrito() } </span>
  </Link>
  </div>
  )
  }


import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { StyleDivCarrito, fontSize } from "../style/CartStyle";

export const Carrito = ()=>{

    const {carrito, precioTotalPlantas, borrarCarrito} = useContext(CartContext)//importamos lo q hay en el carrito el precio total de las plantas y la funcion para borrar el contenido del carrito

   

   const handleEliminarCarrito = ()=>{
        borrarCarrito()

      }



    return(
   
        <div style={{backgroundColor:"#ABFAB6",
                     paddingBottom:"1%",
                     paddingTop:"3%",
        }}>
            

        {
        
        carrito.map((planta) => (
       <div style={StyleDivCarrito} key={planta.id}>
       
        <img style={{height:"100px",
                     width:"100px"
                     
                     }} src={planta.img} ></img>
       
        <h1 style={fontSize}>{planta.nombre} </h1>
        <p style={fontSize}>    precio por unidad: ${planta.precio} </p>
        <p style={fontSize}>    precio total: ${planta.precio * planta.cantidad} </p>
        <p style={fontSize}>    cant:{planta.cantidad} </p>
        
       </div>
       
        
        


        ))
        //al encerrar el boton con el link, hacemos que al apretar el boton en la url se ponga /FinalizarCompra y asi renderize el formulario
        }
        
        
       
        <> 

        <h1 style={{marginLeft:"190px"}}>Precio Total: ${precioTotalPlantas()}</h1>
        <button style={{height:"30px",marginLeft:"190px",borderRadius:"10px"}} onClick={handleEliminarCarrito}>Vaciar Carrito</button>
        <Link to={"/FinalizarCompra"}>
        <button style={{height:"30px",marginLeft:"20px",borderRadius:"10px"}}>Finalizar Compra</button>
        </Link>
        

        </> 


        </div>
    )

}
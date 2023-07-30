import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { CartContext } from "../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config"
import { FormularioStyle, FormularioDivStyle} from "./FormularioStyle"


export const FinalizarCompra = () =>{

    const { carrito, precioTotalPlantas, borrarCarrito } = useContext(CartContext)

    const [ped, SetPed] = useState("")

    const { register , handleSubmit , watch } = useForm() //gracias a el hook form facilitamos el obtener los datos de un formulario y almacenarlos en un solo lugar

    

    const send = (infoCompra) =>{

        if (infoCompra.email != infoCompra.confirmarEmail) {
            alert("Los correos electrónicos no coinciden. Por favor, inténtalo de nuevo.");
            return;
          }
        const pedido = {
              //enviamos la info del form, todo el carrito y la funcion q contiene el precio total de todas las plantas, funcion la cual ceamos en el cartcontext 
              cliente: infoCompra,
              plantas: carrito,
              total: precioTotalPlantas()

        }
        

        const dbFacturas = collection(db,"pedidos")
        addDoc(dbFacturas,pedido)
        .then((factura) => { SetPed(factura.id)
                             borrarCarrito()
        }
               

        )
    }

    if (ped){//lo q hacemos aca es poner un conicional para un retrn, de esta manera si se cumle el condicional el otro return q es el del formulario no aparecera denuevo una ves completada la compra
         return(

               <div className="container">
                  <h1>Gracias por preferir PlantIcomerce</h1>
                  <p>Tu numero de compra es: {ped}</p>

               </div>

         )


    }
     
    


    return(
    
    
    //la data de handlesubmit q es almacenada en register y luego en handlesubmit se almacena finalmente en send
        <div style={FormularioDivStyle}>
        
        <form style={FormularioStyle} onSubmit={handleSubmit(send)}> 
         <input  type="text" placeholder="Nombre" {...register("nombre")}/>
         <input type="email" placeholder="Email" {...register("email")}/>
         <input type="email" placeholder="Confirmar Email" {...register("confirmarEmail")}/>
         <input type="phone" placeholder="Telefono"{...register("telefono")}/>

          <button type="submit">Finalizar Compra</button>

        </form>


     </div>
    
    )  

}


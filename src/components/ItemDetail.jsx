import { CartContext } from "../context/cartContext"
import { ItemCount } from "./itemCount"
import { useContext, useState } from "react"
import { ItemDetailStyle } from "./ItemDetailStyle"

export const ItemDetail = ({planta}) => {

  const {handleAgregarCarrito} = useContext(CartContext)

  const [cantidad , SetCantidad] = useState(1)

    const handleResta =  () =>{
        cantidad > 1 && SetCantidad(cantidad - 1)}

    const handleSumar = () =>{SetCantidad(cantidad + 1)}
    
   
  
  
  
  
  const letterStyle = {fontSize :"28px"}

 return (

    

    <>
    <div style={{display:"flex"}}>
    <img src={planta.img} style={{height:"400px",}} alt={planta.category} />
     <div style={{display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#CBFAAB",
                  paddingLeft:"20px",
                  paddingRight:"20px",
     
    }}>
      <div style={ItemDetailStyle}>{planta.nombre}</div>
      <div style={ItemDetailStyle}>Categoria: {planta.categoria}</div>
      <div style={ItemDetailStyle}>Precio: ${planta.precio}</div>
      <div style={ItemDetailStyle}>Tiempo de Vida: {planta["tiempo de vida"]} Años</div>
      <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleResta={handleResta} handleAgregarCarrito={()=>{handleAgregarCarrito(planta,cantidad)}}/>
      </div>
      </div>
    </>


 )
   
 }

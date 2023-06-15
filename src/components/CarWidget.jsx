import cart from "../assets/plantap.png"

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


export const CartWidget = () =>( 
  <>
  <img src={cart} style={imagenes.img} alt="planta"></img> <span style={letraColor.st}>0</span>
  </>
)
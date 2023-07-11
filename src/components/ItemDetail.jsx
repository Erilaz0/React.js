

export const ItemDetail = ({planta}) => {
    
 return (

    <>
      <div>{planta.nombre}</div>
      <div>{planta.category}</div>
      <div>{planta.precio}</div>
      <div>{planta.tiempo_de_vida}</div>
      <img src={planta.img} alt={planta.category}/>
    </>


 )
   
 }

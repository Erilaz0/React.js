


export const ItemCount = ({cantidad, handleResta, handleSumar,handleAgregarCarrito}) => {

    

return(
   
   <div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <button style={{width:"50px",height:"30px"}} onClick={handleResta}>-</button>
            <p>{cantidad}</p>
          <button style={{width:"50px",height:"30px"}} onClick={handleSumar}>+</button>
        </div>
     <button style={{marginTop:"40px",marginLeft:"30px"}} onClick={handleAgregarCarrito}>Agregar al carrito</button>
    </div>
    
)







}
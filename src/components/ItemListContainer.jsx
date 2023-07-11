import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/productos.json'
import { ItemList } from './itemList';






export const ItemListContainer = (props) => { 
   const [products,SetProducts] = useState([])

   const {id} = useParams()

   useEffect(()=>{ //cada ves que itemlistcontainer se renderize se ejecutara este useEffect
      const promesa = new Promise((resolve, reject) => {

         setTimeout(()=>{

          resolve(data) //guardamos la dta del json


         },2000)
      })
      promesa.then(result =>{
   
        if(id){ SetProducts(result.filter(item => item.category === id))}

         else{SetProducts(result)}


      }) //aca es cuando la data del json pasa a esatr dentro de la variable products, ya que setProducts es la funcion
                                                 //encargada de modificar el valor de la variable que lleva a su lado, en este caso le decimos que products va a pasar a valer data.

   },[id])


   return( 
   <Container>
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (<div>Loading...</div> ) : ( <ItemList products = {products}/>
      //aca products ya es === data, por lo que podemos empezar a usar lo que hay en el json, para ello primero nos aseguramos de que este vacio o no
      //y con map recorremos los arrays del json y mostramos lo que contiene



         
      )}
   </Container>
   )
}
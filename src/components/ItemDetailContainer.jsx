import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc} from "firebase/firestore"
import { db } from "../firebase/config"





export const ItemDetailContainer = (props) => { 
   const [product,SetProduct] = useState([])

   const {id} = useParams()

   useEffect(()=>{ 


     const itemDataBaseDetail = doc(db,"items",id)//de la base de datos obtenemos de la coleccion items el articulo que tenga el mismo id que en la url
     getDoc(itemDataBaseDetail)
      .then((snapshot) => {

         SetProduct({...snapshot.data(), id : snapshot.id}) //obtenemos el product y su id, y lo almacnamos en SetProduct para que lo unico q se muestre sea el producto dl cual accedemos al detalle

         

      })


   },[id])


   return( 
   <Container>
      <h1>{props.greeting}</h1>
      {product.length > 0 ? (<div>Loading...</div> ) : ( <ItemDetail planta = {product}/>
      //aca products ya es === data, por lo que podemos empezar a usar lo que hay en el json, para ello primero nos aseguramos de que este vacio o no
      //y con map recorremos los arrays del json y mostramos lo que contiene



         
      )}
   </Container>
   )
}
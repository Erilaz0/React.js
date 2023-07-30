import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemList } from './itemList';
import { collection, getDocs , query , where } from "firebase/firestore"
import { db } from "../firebase/config"





export const ItemListContainer = (props) => { 
   const [products , SetProducts] = useState([])

   const {id} = useParams()

   useEffect(()=>{ //cada ves que itemlistcontainer se renderize se ejecutara este useEffect
    
   //llamamos a la coleccion "items" en la base de datos  
   const itemDataBase = collection(db,"items")

   //si hay un id en la url que ponga en pantalla los productos de la base de datos que coincidan con el id, si no, que los ponga todos
   const queryCat = id?( query(itemDataBase, where("categoria", "==", id)) ) : (itemDataBase ) 
    
   //con get docs es que accedemos a los datos de la base de datos, significa obtener documentos
   getDocs(queryCat)
   .then((snapshot) => {
      //recorremos los productos de la base de datos con map y los seteamos con set products, en este punto products ya tiene almacenado los productos 
      SetProducts(snapshot.docs.map((pr)=>{
        
         return {...pr.data(),id: pr.id} //aca le decimo que aparte de devolver la data del item que tambien devuelva el item con el id
      }))

   })
      

   },[id])


   return( 
   <Container>
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (<div>Loading...</div> ) : ( <ItemList products = {products}/>
     



         
      )}
   </Container>
   )
}
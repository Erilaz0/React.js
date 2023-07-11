import {Item} from "./Item"

export const ItemList = ({products}) => products.map(planta => <Item key={planta.id} planta={planta}/>)
//aca nos encargamos de usar la funcion map apra recorrer las plantas del json
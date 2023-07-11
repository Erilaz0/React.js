import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardImg from "react-bootstrap/esm/CardImg"
import {Link} from "react-router-dom"

export const Item = ({planta}) => {
    
 return <Card
 style={{marginLeft:"2%",
         marginTop:"5%"
}}
 key={planta.id}
 className="float-start"
>
<CardImg variant="top" style={{height:"300px",
                                width:"400px",
                                
}} src={planta.img}/>
 <Card.Body>
 <Card.Title>{planta.nombre}</Card.Title>
 <Card.Text>{planta.category}</Card.Text>
 <Link to = {`/item/${planta.category}`}>
  <Button variant="primary">ver detalle</Button>
 </Link>
 </Card.Body>
</Card>
   
 }
 

 //esto es solamente la card
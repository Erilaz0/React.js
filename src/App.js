import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar} from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Carrito } from "./components/carrito"
import { CartProvider } from "./context/cartContext"
import { FinalizarCompra } from "./components/FinalizarCompra"

export default function App() {

 

   return(      
                                                       
   <CartProvider>
   <BrowserRouter>
   <NavBar/>
   <Routes>

      <Route path="/" element={<ItemListContainer greeting = "plantIcomerce"/>} />
      <Route path="/category/:id" element={<ItemListContainer greeting = "plantIcomerce"/>} />
      <Route path="/item/:id" element={<ItemDetailContainer greeting = "plantIcomerce"/>} />
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/FinalizarCompra" element={<FinalizarCompra/>}/>
   </Routes>
   
   
   </BrowserRouter>
   </CartProvider>
   )
}


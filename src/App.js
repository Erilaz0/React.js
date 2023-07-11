import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar} from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"


export default function App() {
   return( 
   
   <BrowserRouter>
   <NavBar/>
   <Routes>

      <Route path="/" element={<ItemListContainer greeting = "plantIcomerce"/>} />
      <Route path="/category/:id" element={<ItemListContainer greeting = "plantIcomerce"/>} />
      <Route path="/item/:id" element={<ItemDetailContainer greeting = "plantIcomerce"/>} />
   </Routes>
   
   
   </BrowserRouter>
   
   )
}


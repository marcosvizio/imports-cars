import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home";


function App() {
  return (
   <BrowserRouter> 
      <NavBar/>
      <Routes> 
        <Route path="/" element={<Home/>} />  
        <Route path="/products" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      </Routes>


   </BrowserRouter>
  );
}

export default App;

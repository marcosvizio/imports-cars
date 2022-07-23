import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Home } from "./Pages/Home";
import { Cart } from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
   <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes> 
      <Route exact path="/" element={<Home/>} />  
      <Route exact path="/products" element={<ItemListContainer/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route exact path="/detail/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </CartProvider>
   </BrowserRouter>
  );
}

export default App;

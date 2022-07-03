import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greetings={"Bienvenidos"} />
    </div>
  );
}

export default App;

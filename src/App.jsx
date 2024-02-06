import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola, bienveni@ a Libros Lichu!"} />
    </div>
  );
};

export default App;

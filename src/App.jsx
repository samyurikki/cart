// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./CartContext";

function App() {
  const { isLoading } = useGlobalContext();
  console.log(isLoading);
  if (isLoading) {
    console.log("working");
    return <h3>Loading...</h3>;
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;

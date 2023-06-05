import { Banner } from "./components/Banner/Banner";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import { Transfer } from "./components/Transfer/Transfer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Transfer />
      <Transfer />
      <Transfer />
    </div>
  );
}

export default App;

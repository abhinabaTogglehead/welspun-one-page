import "./App.scss";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

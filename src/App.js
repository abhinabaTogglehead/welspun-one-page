import "./App.scss";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { DatePicker } from "antd";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
    </div>
  );
}

export default App;

import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

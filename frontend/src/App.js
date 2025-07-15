import "./App.css";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";
import { Footer, Navbar } from "./Components";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

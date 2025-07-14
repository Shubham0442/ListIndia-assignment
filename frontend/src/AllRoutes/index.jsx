import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewBusiness from "../Pages/NewBusiness";
import PrivateRoute from "../HOC/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/new-business"
        element={
          <PrivateRoute>
            <NewBusiness />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;

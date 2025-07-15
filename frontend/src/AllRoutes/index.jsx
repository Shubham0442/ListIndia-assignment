import { Route, Routes } from "react-router-dom";
import { Home, Login, NewBusiness, Register } from "../Pages";
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

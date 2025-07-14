import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state?.loginReducer);

  if (
    user &&
    user?.firstname &&
    user?.lastname &&
    localStorage?.getItem("user_token")
  ) {
    return children;
  } else return <Navigate to="/login" />;
};

export default PrivateRoute;

import { useNavigate } from "react-router-dom";
import BW_logo from "../../assests/BW-logo.png";
import Button from "../Button";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.loginReducer);

  // console.log(token, user);

  const buttons = [
    { title: "Login", width: "70px", route: "/login" },
    { title: "Register", width: "80px", route: "/register" },
    { title: "Add Business", width: "100px", route: "/new-business" }
  ];

  return (
    <div className="w-full h-14 flex items-center justify-between px-5">
      <div className="w-[150px] h-14 flex items-center justify-center">
        <img
          className="w-full h-full object-contain"
          src={BW_logo}
          alt="logo"
        />
      </div>
      <div className="w-fit flex items-center justify-between gap-2">
        {!user &&
          buttons?.map((el) => (
            <Button
              key={el?.title}
              customStyles={{ width: el?.width }}
              title={el?.title}
              onClick={() => navigate(el.route)}
            />
          ))}
        {user && user.firstname && user.lastname ? (
          <>
            <Avatar sx={{ width: 24, height: 24 }}>{user?.firstname[0]}</Avatar>
            <Button
              key={buttons[2]?.title}
              customStyles={{ width: buttons[2]?.width }}
              title={buttons[2]?.title}
              onClick={() => navigate(buttons[2].route)}
            />
          </>
        ) : (
          <Button
            key={buttons[2]?.title}
            customStyles={{ width: buttons[2]?.width }}
            title={buttons[2]?.title}
            onClick={() => navigate(buttons[2].route)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;

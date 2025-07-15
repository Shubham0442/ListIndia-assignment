import { useNavigate } from "react-router-dom";
import BW_logo from "../../assests/BW-logo.png";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { handlelogout } from "../../redux/actions/loginActions";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.loginReducer);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();

  console.log("user", user);

  const buttons = [
    { title: "Login", width: "70px", route: "/login" },
    { title: "Register", width: "80px", route: "/register" },
    { title: "Add Business", width: "100px", route: "/new-business" }
  ];

  return (
    <div className="w-full h-14 flex items-center justify-between px-5">
      <div
        className="w-[150px] h-14 flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <img
          className="w-full h-full object-contain"
          src={BW_logo}
          alt="logo"
        />
      </div>
      {window?.innerWidth > 650 ? (
        <div className="w-fit flex items-center justify-between gap-2">
          {!user?.firstname || !user?.lastname ? (
            buttons?.map((el) => (
              <Button
                key={el?.title}
                customStyles={{ width: el?.width }}
                title={el?.title}
                onClick={() => navigate(el.route)}
              />
            ))
          ) : user?.firstname && user?.lastname ? (
            <>
              <Avatar sx={{ width: 24, height: 24 }}>
                {user?.firstname[0]}
              </Avatar>
              <Button
                customStyles={{ width: "50px" }}
                title="Logout"
                onClick={() => dispatch(handlelogout())}
              />
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
      ) : (
        <div className="w-fit flex items-center justify-between gap-2">
          {user?.firstname && user?.lastname && (
            <Avatar sx={{ width: 24, height: 24 }}>{user?.firstname[0]}</Avatar>
          )}
          <ClickAwayListener onClickAway={() => setOpenDropdown(false)}>
            <div className="w-full">
              <div
                className="rounded-full w-8 h-8 flex items-center justify-center text-base border border-[var(--border)] cursor-pointer"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <GiHamburgerMenu />
              </div>
              {openDropdown && (
                <div className="w-40 absolute top-12 right-0 h-auto rounded-md border border-[var(--border)] shadow-sm py-2 bg-white">
                  {(!user?.firstname || !user.lastname) &&
                    buttons?.map((el) => (
                      <div
                        className="w-full h-8 px-2 cursor-pointer text-left text-sm text-[var(--para)] flex items-center justify-start hover:bg-slate-300"
                        onClick={() => {
                          navigate(el.route);
                          setOpenDropdown(false);
                        }}
                      >
                        {el?.title}
                      </div>
                    ))}
                  {user && user?.firstname && user.lastname && (
                    <>
                      <div
                        className="w-full h-8 mb-2 px-2 cursor-pointer text-left text-sm text-[var(--para)] flex items-center justify-start hover:bg-slate-300"
                        onClick={() => {
                          navigate("/new-business");
                          setOpenDropdown(false);
                        }}
                      >
                        Add Business
                      </div>
                      <div className="w-full px-2 mb-2">
                        <Button
                          customStyles={{ width: "60px", height: "32px" }}
                          title="Logout"
                          onClick={() => dispatch(handlelogout())}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};

export default Navbar;

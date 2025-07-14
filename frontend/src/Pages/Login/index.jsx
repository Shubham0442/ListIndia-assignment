import { useState } from "react";
import { Button, InputField, PageHeading } from "../../Components";
import ToastComponent from "../../functions/ToastComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/loginActions";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = () => {
    console.log("hello..............");
    if (!loginForm?.email || loginForm?.email === "") {
      return ToastComponent("fail", "Enter email");
    } else if (!loginForm?.password || loginForm?.password === "") {
      return ToastComponent("fail", "Enter password");
    }
    dispatch(login(loginForm))?.then((res) => {
      if (res?.type === "USER_LOGIN_SUCCESS") {
        navigate("/");
        ToastComponent("success", "Login SuccessFul!");
      } else {
        ToastComponent("fail", "Please check your login cridentials");
      }
    });
  };

  return (
    <div className="lg:w-[27%] md:w-[65%] sm:w-[60%] sx:w-[85%] m-auto h-auto">
      <PageHeading heading="Login" />
      <div className="w-full h-auto text-left">
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">Email</label>
          <InputField
            name="email"
            onChange={handleChange}
            value={loginForm?.email}
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="w-full text-sm font-semibold">Password</label>
          <InputField
            type="password"
            name="password"
            onChange={handleChange}
            value={loginForm?.password}
          />
        </div>
        <div className="mb-2">
          <Button title="Login" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;

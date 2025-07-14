import { useState } from "react";
import { Button, InputField, PageHeading } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ToastComponent from "../../functions/ToastComponent";
import { register } from "../../redux/actions/registerActions";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = () => {
    if (!registerForm?.email || registerForm?.email === "") {
      return ToastComponent("fail", "Enter email");
    } else if (!registerForm?.password || registerForm?.password === "") {
      return ToastComponent("fail", "Enter password");
    } else if (!registerForm?.firstname || registerForm?.firstname === "") {
      return ToastComponent("fail", "Enter firstname");
    } else if (!registerForm?.lastname || registerForm?.lastname === "") {
      return ToastComponent("fail", "Enter lastname");
    }
    dispatch(register(registerForm))?.then((res) => {
      if (res?.type === "USER_REGISTER_SUCCESS") {
        navigate("/login");
        ToastComponent("success", "Registration SuccessFul!");
      } else {
        ToastComponent("fail", "Something went wrong, please try again!");
      }
    });
  };

  return (
    <div className="lg:w-[27%] md:w-[65%] sm:w-[60%] sx:w-[85%] m-auto h-auto">
      <PageHeading heading="Register" />
      <div className="w-full h-auto text-left">
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">firstname</label>
          <InputField
            name="firstname"
            onChange={handleChange}
            value={registerForm?.firstname}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">Lastname</label>
          <InputField
            name="lastname"
            onChange={handleChange}
            value={registerForm?.lastname}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">Email</label>
          <InputField
            name="email"
            onChange={handleChange}
            value={registerForm?.email}
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="w-full text-sm font-semibold">Password</label>
          <InputField
            type="password"
            name="password"
            onChange={handleChange}
            value={registerForm?.password}
          />
        </div>
        <div className="mb-2">
          <Button title="Register" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Register;

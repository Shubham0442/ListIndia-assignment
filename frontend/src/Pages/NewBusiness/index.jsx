import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ToastComponent from "../../functions/ToastComponent";
import { Button, InputField, PageHeading } from "../../Components";
import TextAreaField from "../../Components/TextAreaField";
import { register } from "../../redux/actions/registerActions";
import { addNewBusiness } from "../../redux/actions/businessAction";

const NewBusiness = () => {
  const [businessForm, setBusinessForm] = useState({
    name: "",
    category: "",
    location: "",
    description: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setBusinessForm({ ...businessForm, [name]: value });
  };

  const handleSubmit = () => {
    if (!businessForm?.name || businessForm?.name === "") {
      return ToastComponent("fail", "Enter business name");
    } else if (!businessForm?.category || businessForm?.category === "") {
      return ToastComponent("fail", "Enter category");
    } else if (!businessForm?.location || businessForm?.location === "") {
      return ToastComponent("fail", "Enter firstname");
    }
    dispatch(addNewBusiness(businessForm))?.then((res) => {
      if (res?.type === "ADD_NEW_BUSINESS_SUCCESS") {
        navigate("/");
        ToastComponent("success", "Business details savedsSuccessFully!");
      } else {
        ToastComponent("fail", "Something went wrong, please try again!");
      }
    });
  };

  return (
    <div className="lg:w-[27%] md:w-[65%] sm:w-[60%] sx:w-[85%] m-auto h-auto">
      <PageHeading heading="Add New Business" />
      <div className="w-full h-auto text-left">
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">Name</label>
          <InputField
            name="name"
            onChange={handleChange}
            value={businessForm?.name}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">Category</label>
          <InputField
            name="category"
            onChange={handleChange}
            value={businessForm?.category}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="w-full text-sm font-semibold">Location</label>
          <InputField
            name="location"
            onChange={handleChange}
            value={businessForm?.location}
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="w-full text-sm font-semibold">Description</label>
          <TextAreaField
            name="description"
            onChange={handleChange}
            value={businessForm?.description}
            maxHeigth="150px"
          />
        </div>
        <div className="mb-2">
          <Button title="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default NewBusiness;

import { Bounce } from "react-toastify";

export const commonToasterStyleProps = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  closeButton: "none"
};

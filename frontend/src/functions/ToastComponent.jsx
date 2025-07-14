import { toast } from "react-toastify";
import { commonToasterStyleProps } from "../utils";

const ToastComponent = (type, text) => {
  const commonProps = commonToasterStyleProps;

  switch (type) {
    case "success":
      toast.success(text, commonProps);
      break;
    case "fail":
      toast.error(text, commonProps);
      break;
    case "info":
      toast.info(text, commonProps);
      break;
    case "warn":
      toast.warn(text, commonProps);
      break;
    default:
      toast(text, commonProps);
      break;
  }
};

export default ToastComponent;

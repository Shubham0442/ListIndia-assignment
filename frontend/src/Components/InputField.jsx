import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

const InputField = ({
  value = "",
  name,
  onChange,
  isDisabled = false,
  type = "text",
  icon,
  height = "32px",
  placeholder = "",
  passwordField = false,
  borderRadius = "4px",
  customStyle = {}
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        height: height,
        cursor: isDisabled ? "not-allowed" : "auto",
        borderRadius: borderRadius,
        ...customStyle
      }}
      className="w-full bg-[var(--button-fields-bg)] border border-[var(--border)] rounded-sm flex items-center justify-start"
    >
      {icon ? (
        <div
          style={{ width: height }}
          className="w-32px h-full flex items-center justify-center text-[var(--para)]"
        >
          {icon}
        </div>
      ) : null}
      <input
        type={showPassword ? "text" : type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          cursor: isDisabled ? "not-allowed" : "auto",
          width: icon ? "calc(100% - 32px)" : "100%"
        }}
        disabled={isDisabled}
        className="border-0 h-full rounded-[5px] text-[var(--para)] text-[13px] bg-transparent flex items-center focus-visible:outline-none pl-1.5 placeholder:text-[var(--input-placeholder-text)] placeholder:text-[13px]"
      />
      {passwordField && (
        <div
          style={{
            width: height,
            height: height
          }}
          className="flex items-center justify-center border-l border-[var(--border)] text-[var(--para)] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </div>
      )}
      {type === "search" && (
        <div className="h-[70%] w-fit text-[13px] text-[var(--para-light)] px-2 bg-[var(--searchbar-indicator-bg)] mr-1.5 rounded">
          /
        </div>
      )}
    </div>
  );
};

export default InputField;

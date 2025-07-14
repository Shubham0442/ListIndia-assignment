import { useState } from "react";

const Button = ({
  title = "",
  type = "contained", // outlined / solid
  onClick,
  icon,
  height = "32px",
  isDisabled = false,
  buttonBg = "var(--primary)",
  buttonType = "button",
  fontSize = "13px",
  customStyles = {},
  tooltipTitle = "",
  hovered = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => hovered && setIsHovered(true)}
      onMouseLeave={() => hovered && setIsHovered(false)}
      type={buttonType}
      style={{
        height: height,
        cursor: !isDisabled ? "pointer" : "not-allowed",
        background:
          type === "contained"
            ? buttonBg
            : isHovered && type === "outlined"
            ? "var(--hover-bg)"
            : "var(--button-fields-bg)",
        border: type === "outlined" ? "1px solid var(--border)" : "none",
        color:
          type === "contained"
            ? "var(--white)"
            : isHovered
            ? "var(--primary)"
            : "var(--heading-text)",
        fontSize: fontSize,
        ...customStyles
      }}
      disabled={isDisabled}
      className="w-full font-medium flex items-center justify-center gap-1.5 rounded-md"
    >
      {icon ? (
        <div className="h-full flex text-center items-center justify-center text-base">
          {icon}
        </div>
      ) : null}
      <p className="flex items-center justify-center">{title}</p>
    </button>
  );
};

export default Button;

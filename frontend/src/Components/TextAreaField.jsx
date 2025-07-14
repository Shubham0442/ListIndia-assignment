const TextAreaField = ({
  value = "",
  onChange,
  isDisabled = false,
  rows = 1,
  maxHeigth = "150px",
  placeholder = "",
  borderRadius = "4px",
  height = "150px",
  onKeyDown = () => {},
  border = true,
  reSize,
  name = ""
}) => {
  return (
    <div
      style={{
        cursor: isDisabled ? "not-allowed" : "auto",
        borderRadius: borderRadius,
        border: border ? "1px solid var(--border)" : ""
      }}
      className="w-full h-auto bg-[var(--button-fields-bg)] rounded-sm flex items-center justify-start"
    >
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        style={{
          cursor: isDisabled ? "not-allowed" : "auto",
          maxHeight: maxHeigth,
          height: height,
          minHeight: height,
          resize: reSize || "initial"
        }}
        disabled={isDisabled}
        rows={rows}
        className="w-full p-1.5 border-0 h-full rounded-[6px] text-[var(--para)] text-[13px] bg-[var(--button-fields-bg)] flex items-center focus-visible:outline-none pl-1.5 placeholder:text-[var(--input-placeholder-text)] placeholder:text-[13px]"
      />
    </div>
  );
};

export default TextAreaField;

import React, { useState } from "react";
import IconButton from "../iconButton/IconButton";
import ErrorMessage from "../errorMessage/ErrorMessage";

interface IDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}

export default function DefaultTextField({
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocus] = useState(false);
  const borderColor = !value
    ? "border-mono300"
    : isFocused
    ? "border-secondary"
    : "border-primary";

  return (
    <div>
      <div
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

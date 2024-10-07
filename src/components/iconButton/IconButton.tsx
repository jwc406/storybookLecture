import React from "react";

interface IIconButtonProps {
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  alt: string;
}

export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}

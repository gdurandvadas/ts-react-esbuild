import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      className={`wooden-button ${disabled ? "disabled" : ""}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {text.toUpperCase()}
    </button>
  );
};

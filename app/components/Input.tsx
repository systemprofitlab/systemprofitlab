import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
};

export default function Input({
  value,
  onChange,
  placeholder,
  className = "",
  type = "text",
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
}
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "../styles/button.scss";
interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}
const Button = ({ children, className, ...props }: IPropsButton) => {
  return (
    <button
      type="button"
      className={`btn fontWeight ${className}`}
      {...props}
    >
      <div>{children}</div>
    </button>
  );
};

export default Button;

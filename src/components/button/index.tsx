import "./index.scss";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { FC } from "react";

interface ButtonProps {
  title: string;
  isOutlineButton?: boolean; 
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ title, isOutlineButton = false, className = "", onClick }) => {
  const isBlackTheme = useSelector(getBlackTheme);

  if (isOutlineButton) {
    className += " button_outline";
  } else {
    className += " button_fill";
  }

  return (
    <button
      type="button"
      className={`button  ${isBlackTheme ? "button_black" : ""} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

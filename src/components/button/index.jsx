import "./index.scss";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

export const Button = ({ title, isOutlineButton, className = "", onClick }) => {
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

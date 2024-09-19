import "./index.scss";
import sun from "./images/sun.svg";
import moon from "./images/moon.svg";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { CHANGE_THEME_ACTION } from "../../store/actions/themeActions";
import { AppDispatch } from "../../store";

export const ModeButton:FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isBlackTheme = useSelector(getBlackTheme);

  const handleChangeTheme = () => {
    dispatch(CHANGE_THEME_ACTION);
  };

  return (
    <div className="mode-btn" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};

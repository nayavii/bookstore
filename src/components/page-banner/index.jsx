import "./index.scss";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

export const PageBanner = ({ img, size }) => {
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <div className={`page-banner ${isBlackTheme ? "page-banner_black" : ""}`}>
      <img src={img} alt="page-banner" className={`${size} ?? ''`} />
    </div>
  );
};

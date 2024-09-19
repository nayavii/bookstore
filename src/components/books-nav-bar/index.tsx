import "./index.scss";
import { ChangeEvent, FC, useState } from "react";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { Button } from "../button";

interface BooksNavBarProps {
  handleSearch: (searchValue: string) => void;
}

export const BooksNavBar:FC<BooksNavBarProps> = ({ handleSearch }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    handleSearch("");
  };

  return (
    <div className={`navBar ${isBlackTheme ? "navBar_black" : ""}`}>
      <div className="container">
        <div className="navBar__wrapper">
          <input
            className={`navBar__search ${
              isBlackTheme ? "input_black" : "input"
            }`}
            type="text"
            placeholder="Search books..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <Button title="Clean" onClick={handleClearSearch} />
        </div>
      </div>
    </div>
  );
};

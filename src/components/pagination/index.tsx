import "./index.scss";
import React, { FC } from "react";
import { Button } from "../button";

interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}

export const Pagination:FC<IPagination> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page:number) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <Button
        title="Previous"
        className={`pagination__button ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      />

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`pagination__num ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <Button
        title="Next"
        className={`pagination__button ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

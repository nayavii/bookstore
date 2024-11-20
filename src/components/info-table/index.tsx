import "./index.scss";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getBlackTheme, getBook } from "../../store/selectors";
import { renderStars } from "../../utils";
import { Book } from '../../typings/book';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CustomizedTable:FC = () => {
  const isBlackTheme = useSelector(getBlackTheme);

  const book = useSelector(getBook) as Book;
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 500 }}
        aria-label="customized table"
        className={`table ${isBlackTheme ? "table_black" : ""}`}
      >
        <TableBody>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color"
            >
              Price
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color">
              {book?.price}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color_light"
            >
              Rating
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color_light">
              {renderStars(book?.rating)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color"
            >
              Authors
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color">
              {book?.authors}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color_light"
            >
              Publisher
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color_light">
              {book?.publisher}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color"
            >
              Pages
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color">
              {book?.pages}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color_light"
            >
              Year
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color_light">
              {book?.year}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color"
            >
              Description
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color">
              {book?.desc}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color_light"
            >
              ISBN-10
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color_light">
              {book?.isbn10}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className="table__color"
            >
              ISBN-13
            </StyledTableCell>
            <StyledTableCell align="left" className="table__color">
              {book?.isbn13}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;

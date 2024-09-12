import './index.scss'
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { renderStars } from "../../utils";
import { getBlackTheme, getBook } from '../../store/selectors';

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

export const CustomizedTable = () => {

  const isBlackTheme = useSelector(getBlackTheme)

  const book = useSelector(getBook);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table" className={`table ${isBlackTheme ? 'table_black' : ''}`} >
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row"className='table__color'>
              Price
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color'>{book?.price}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color_light'>
              Rating
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color_light'>
              {renderStars(book?.rating)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color'>
              Authors
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color'>{book?.authors}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color_light'>
              Publisher
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color_light'>{book?.publisher}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color'>
              Pages
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color'>{book?.pages}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color_light'>
              Year
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color_light'>{book?.year}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color'>
              Description
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color'>{book?.desc}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color_light'>
              ISBN-10
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color_light'>{book?.isbn10}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" className='table__color'>
              ISBN-13
            </StyledTableCell>
            <StyledTableCell align="left" className='table__color'>{book?.isbn13}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;

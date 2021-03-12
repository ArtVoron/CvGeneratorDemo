import React from "react";
import { useHistory } from "react-router";

import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PropTypes from "prop-types";

import { Pagination } from "./Pagination";

const columns = [
  { id: "firstName", label: "First name", minWidth: 170 },
  { id: "lastName", label: "Last name", minWidth: 170 },
  { id: "experience", label: "Experience", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 50 },
  // {
  //   id: "population",
  //   label: "Population",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toLocaleString("en-US"),
  // },
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CVsTable({ cvs, deleteCV }) {
  const rows = cvs;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const history = useHistory();

  const previewCv = (e) => {
    debugger;
    history.push(`/preview-cv/${e}`);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                <Typography variant="h6">{column.label}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.name}
              className="tableRow"
              //   onClick={() => {
              //     previewCv(row.id);
              //   }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.experience}</TableCell>
              <TableCell>
                <DeleteForeverIcon
                  onClick={() => {
                    deleteCV(row.id);
                  }}
                  style={{ color: "#5D6D7E", cursor: "pointer" }}
                  className="deleteIcon"
                />
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
            />
          </TableRow>
          <Card>
            <CardContent>
              <Typography>List CV</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  previewCv(1);
                }}
              >
                View CV
              </Button>
            </CardContent>
          </Card>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

CVsTable.propTypes = {
  cvs: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteCV: PropTypes.func.isRequired,
};

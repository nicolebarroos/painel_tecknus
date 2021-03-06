import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../services/api.json";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  border: {
    boxShadow: "0px 0px 0px 0px  ",
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} classes={{ root: classes.border }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "15px",
              }}
            >
              Nome
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              Quantidade de acessos
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {api.quantidade_acessos.map((item, index) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingLeft: "70px" }}
              >
                {item.quantidade_acessos}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

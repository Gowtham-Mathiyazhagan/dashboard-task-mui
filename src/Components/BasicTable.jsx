import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ props }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ textTransform:"uppercase" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "secondary.light", color: "white" }}>
            {props?.head.map((data) => (
              <TableCell key={data}>{data}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.rows.map((row) => (
            <TableRow
              key={row}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((data) => (
                <TableCell  align="left">{data}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

//   <TableCell align="right">Calories</TableCell>
//   <TableCell align="right">Fat&nbsp;(g)</TableCell>
//   <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//   <TableCell align="right">Protein&nbsp;(g)</TableCell>

// {rows.map((row) => (
// 	<TableRow
// 	  key={row.name}
// 	  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// 	>
// 	  <TableCell component="th" scope="row">
// 		{row.name}
// 	  </TableCell>
// 	  <TableCell align="right">{row.calories}</TableCell>
// 	  <TableCell align="right">{row.fat}</TableCell>
// 	  <TableCell align="right">{row.carbs}</TableCell>
// 	  <TableCell align="right">{row.protein}</TableCell>
// 	</TableRow>
//   ))}

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Collapse from '@mui/material/Collapse';


export default function BasicTable({ props, view, edit }) {
  const handleView = ()=>{

  }
  const handleEdit = ()=>{

  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ textTransform: "uppercase" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "secondary.light"}}>
            {view && <TableCell>view</TableCell>}

            {props?.head.map((data, i) => (
              <TableCell  key={i.toString()}>{data}</TableCell>
            ))}
            {view && <TableCell>view</TableCell>}
            {edit && <TableCell>edit</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.rows.map((row) => (
            <TableRow
              key={row}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((data, i) => (
                <TableCell   key={i.toString()} align="left">
                  {data}
                </TableCell>
              ))}
              {view && (
                <TableCell>
                  <IconButton
                    aria-label="view"
                    onClick={handleView}
                    color="secondary"
                  >
                    <RemoveRedEyeOutlinedIcon />
                  </IconButton>
                </TableCell>
              )}
              {edit && (
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    onClick={handleEdit}
                    color="secondary"
                  >
                    <CreateOutlinedIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

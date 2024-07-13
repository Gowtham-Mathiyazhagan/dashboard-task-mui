import React, { useState } from "react";
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
import Collapse from "@mui/material/Collapse";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Box } from "@mui/material";

export default function BasicTable({ props, view, edit, collapse }) {
  const [open, setOpen] = useState(Array(props?.rows.length).fill(false));

  const handleView = () => {};
  const handleEdit = () => {};

  const handleCollapse = (index) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      return newOpen.map((data, i) => (i === index ? !data : false));
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ textTransform: "uppercase" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "secondary.light" }}>
            {collapse && <TableCell />}
            {props?.head.map((data, i) => (
              <TableCell key={i.toString()}>{data}</TableCell>
            ))}
            {view && <TableCell>view</TableCell>}
            {edit && <TableCell>edit</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex.toString()}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {collapse && (
                  <TableCell>
                    <IconButton
                      aria-label="collapse"
                      onClick={() => handleCollapse(rowIndex)}
                      color="secondary"
                    >
                      {open[rowIndex] ? (
                        <RemoveCircleOutlineOutlinedIcon />
                      ) : (
                        <ControlPointOutlinedIcon />
                      )}
                    </IconButton>
                  </TableCell>
                )}
                {row.map((data, i) => (
                  <TableCell key={i.toString()} align="left">
                    {data}
                  </TableCell>
                ))}
                {(view || collapse) && (
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

              {collapse && (
                <TableRow>
                  <TableCell sx={{ padding: 0 }} colSpan={12}>
                    <Collapse in={open[rowIndex]} timeout="auto" unmountOnExit>
                      <Box>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{ width: "200px" }} />
                              {props.collapse[rowIndex].map((data, i) => (
                                <TableCell
                                  sx={{ width: "200px" }}
                                  key={i.toString()}
                                  align="center"
                                >
                                  {data}
                                </TableCell>
                              ))}
                              <TableCell sx={{ width: "200px" }} />
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

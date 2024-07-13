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
import { Box, Typography } from "@mui/material";

export default function CollapseTable({ props }) {
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
            <TableCell />
            {props?.head.map((data, i) => (
              <TableCell key={i.toString()}>{data}</TableCell>
            ))}
            <TableCell>view</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.rows.map((rowData, rowIndex) => (
            <React.Fragment key={rowIndex.toString()}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
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

                {rowData.row.map((row, i) => (
                  <TableCell key={i.toString()} align="left">
                    {row}
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton
                    aria-label="view"
                    onClick={handleView}
                    color="secondary"
                  >
                    <RemoveRedEyeOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ padding: 0 }} colSpan={12}>
                  <Collapse in={open[rowIndex]} timeout="auto" unmountOnExit>
                    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center",padding:"10px", margin:"20px", border:"2px solid var(--hover)"}}>
						<Typography sx={{fontWeight:"600",fontSize:"20px"}}>Hulk</Typography>
                      <Table sx={{width:'800px', }}>
                        <TableHead>
                          <TableRow sx={{ backgroundColor: "secondary.light" }}>
                            {props?.head.map((data, i) => (
                              <TableCell key={i.toString()}>{data}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowData.collapseRow.map((collapseData, i) => (
                            <TableRow>
                              {collapseData.map((data) => (
                                <TableCell
                                  key={i.toString()}
                                >{data}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

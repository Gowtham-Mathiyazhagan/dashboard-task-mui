import React from "react";
import Grid from "@mui/material/Grid";
import {
  SelectDate,
  SelectTextFieldCompo,
  TextFieldCompo,
} from "./CustomField";

const GroupTextField = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "search" }} />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "search" }} />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "select", menu: ["x", "x", "x"] }}
          />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "search" }} />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "search" }} />
        </Grid>
      </Grid>

      <Grid container></Grid>
    </>
  );
};

export default GroupTextField;

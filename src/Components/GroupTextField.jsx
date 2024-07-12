import React from "react";
import Grid from "@mui/material/Grid";
import {
  SelectDateCompo,
  SelectTextFieldCompo,
  StyledTypoAddresource,
  TextFieldCompo,
} from "./CustomField";
import { Stack, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useActive } from "./Layout";

const GroupTextField = () => {
  const navigate = useNavigate();
  const activeObj = useActive(); // to set active field in drawer
  const handleClick = () => {
    navigate("/item/viewresource");
    activeObj.setActive("view resource");
  };
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
      {/* </Grid> */}
      {/* Second form data */}
      <Stack direction={"row"} justifyContent={"center"} position={"relative"}>
        <Box
          width={"20%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "15px",
          }}
        >
          <StyledTypoAddresource variant="h6" color="initial">
            abc
          </StyledTypoAddresource>
          <StyledTypoAddresource variant="h6" color="initial">
            abc
          </StyledTypoAddresource>
          <StyledTypoAddresource variant="h6" color="initial">
            abc
          </StyledTypoAddresource>
        </Box>
        <Box width={"80%"}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: "10px",
            }}
          >
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{ label: "select", menu: ["x", "x", "x"] }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{ label: "select", menu: ["x", "x", "x"] }}
              />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{ label: "select", menu: ["x", "x", "x"] }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{ label: "select", menu: ["x", "x", "x"] }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{ label: "select", menu: ["x", "x", "x"] }}
              />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "search" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <SelectDateCompo />
            </Grid>
            <Grid item md={3}>
              <SelectDateCompo />
            </Grid>{" "}
            {/*row complete */}
          </Grid>
        </Box>
        <Box sx={{ position: "absolute", bottom: "-100px", right: "180px" }}>
          <Button
            variant="contained"
            sx={{
              float: "right",
              width: "50px",
              mb: "20px",
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: ".5",
              },
            }}
            onClick={handleClick}
          >
            submit
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default GroupTextField;

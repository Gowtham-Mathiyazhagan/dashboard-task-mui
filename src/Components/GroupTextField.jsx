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

const GroupTextField = ({ padding }) => {
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
          <TextFieldCompo props={{ label: "emp no", name: "empNo" }} />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "name", name: "name" }} />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{
              label: "platform",
              menu: ["x", "x", "x"],
              name: "platform",
            }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "track", menu: ["x", "x", "x"], name: "track" }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{
              label: "applications",
              menu: ["x", "x", "x"],
              name: "application",
            }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "jl", menu: ["x", "x", "x"], name: "jl" }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "role", menu: ["x", "x", "x"], name: "role" }}
          />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{
              label: "location",
              menu: ["x", "x", "x"],
              name: "location",
            }}
          />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "unit", name: "unit" }} />
        </Grid>
        <Grid item md={2.5}>
          <SelectTextFieldCompo
            props={{ label: "bundle", menu: ["x", "x", "x"], name: "bundle" }}
          />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo
            props={{ label: "project code", name: "projectCode" }}
          />
        </Grid>
        <Grid item md={2.5}>
          <TextFieldCompo props={{ label: "emp du", name: "empDu" }} />
        </Grid>
      </Grid>
      {/* Second form data */}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        position={"relative"}
        paddingTop={padding}
      >
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
            run
          </StyledTypoAddresource>
          <StyledTypoAddresource variant="h6" color="initial">
            rdu
          </StyledTypoAddresource>
          <StyledTypoAddresource variant="h6" color="initial">
            mnt
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
              <TextFieldCompo props={{ label: "run", name: "run" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "run cnx", name: "runCnx" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "run ent", name: "runEnt" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "oth", name: "oth" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "cnx-it", name: "cnxIt" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "ent-it", name: "entIt" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "mnt cnx", name: "mntCnx" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "mnt ent", name: "mntEnt" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "mnt", name: "mnt" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "cnx", nam: "cnx" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "ent", nam: "ent" }} />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo props={{ label: "oh", nam: "oh" }} />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo
                props={{ label: "offshare rate", name: "offshareRate" }}
              />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo
                props={{ label: "onsite rate", name: "onsiteRate" }}
              />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo
                props={{ label: "total rate", name: "totalRate" }}
              />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{
                  label: "buffer user",
                  menu: ["x", "x", "x"],
                  name: "bufferUser",
                }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{
                  label: "new user",
                  menu: ["x", "x", "x"],
                  name: "newUser",
                }}
              />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo
                props={{ label: "current country", name: "currentCountry" }}
              />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{
                  label: "working mode",
                  name: "workingMode",
                  menu: ["x", "x", "x"],
                }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{
                  label: "project unit",
                  name: "projectUnit",
                  menu: ["x", "x", "x"],
                }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectTextFieldCompo
                props={{
                  label: "project type",
                  name: "projectType",
                  menu: ["x", "x", "x"],
                }}
              />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <TextFieldCompo
                props={{ label: "project name", name: "projectName" }}
              />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo
                props={{ label: "reporting to", name: "reportingTo" }}
              />
            </Grid>
            <Grid item md={3}>
              <TextFieldCompo
                props={{
                  label: "currentnetwork dc(city)",
                  name: "currentNetwork",
                }}
              />
            </Grid>{" "}
            {/*row complete */}
            <Grid item md={3}>
              <SelectDateCompo
                props={{
                  label: "allocation start date",
                  name: "allocationStart",
                }}
              />
            </Grid>
            <Grid item md={3}>
              <SelectDateCompo
                props={{ label: "allocation end date", name: "allocationEnd" }}
              />
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
                backgroundColor: "secondary.light",
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

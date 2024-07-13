import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { headLineTypo } from "../theme/customThemeData";
import BasicTable from "../Components/BasicTable";
import { dashboardTable } from "../Data/data";
import { SelectTextFieldCompo } from "../Components/CustomField";

const Buffer = () => {
  return (
<>
<Box display="flex" flexDirection="column" gap={5}>
      <Typography variant="h5" sx={headLineTypo}>
        buffer resource
      </Typography>
      <Stack flexDirection={"row"} gap={"20px"}>
        <SelectTextFieldCompo
          props={{ label: "select", menu: ["x", "x", "x"] }}
        />
        <SelectTextFieldCompo
          props={{ label: "select", menu: ["x", "x", "x"] }}
        />
        <SelectTextFieldCompo
          props={{ label: "select", menu: ["x", "x", "x"] }}
        />
        <SelectTextFieldCompo
          props={{ label: "select", menu: ["x", "x", "x"] }}
        />
      </Stack>
      <BasicTable props={dashboardTable} view={true} edit={true} />
    </Box>
</>
  )
}

export default Buffer
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { headLineTypo } from "../theme/customThemeData";
import BasicTable from "../Components/BasicTable";
import { dashboardTable } from "../Data/data";
import { SelectDateCompo, TextFieldCompo } from "../Components/CustomField";

const ResourceTrack = () => {
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Typography variant="h5" sx={headLineTypo}>
        resource track
      </Typography>
      <Stack flexDirection={"row"} gap={"20px"}>
        <TextFieldCompo props={{ label: "search" }} />
        <TextFieldCompo props={{ label: "search" }} />
        <SelectDateCompo />
        <SelectDateCompo />
      </Stack>
      <BasicTable props={dashboardTable}  />
    </Box>
  );
};

export default ResourceTrack;

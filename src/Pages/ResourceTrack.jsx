import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { headLineTypo } from "../theme/customThemeData";
import { collapseleTableData, dashboardTable } from "../Data/data";
import { SelectDateCompo, TextFieldCompo } from "../Components/CustomField";
import CollapseTable from "../Components/CollapseTable";

const ResourceTrack = () => {
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Typography variant="h5" sx={headLineTypo}>
        resource track
      </Typography>
      <Stack flexDirection={"row"} gap={"20px"}>
        <TextFieldCompo props={{ label: "search" }} />
        <TextFieldCompo props={{ label: "search" }} />
        <SelectDateCompo props={{ label: "date" }}/>
        <SelectDateCompo props={{ label: "date" }}/>
      </Stack>
      <CollapseTable props={collapseleTableData}  />
    </Box>
  );
};

export default ResourceTrack;

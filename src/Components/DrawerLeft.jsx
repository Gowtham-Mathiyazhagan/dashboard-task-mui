import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { drawerData, MenuPath } from "../Data/data";
import { listItem, listItemTypo } from "../theme/customThemeData";
import { StyledItemBtn } from "./CustomField";
import { useNavigate } from "react-router-dom";
import { useActive } from "./Layout";

const DrawerLeft = ({drawerActive}) => {
  const navigate = useNavigate();

  //  here access the coustom hook
  const activeObj = useActive()

  const handleDrawerClose = () => {
    drawerActive.setOpenDrawer(false);
  };

  const handleClickDrawerItem = (data) => {
    activeObj?.setActive(data[0]);
    navigate(`/item/${data[1]}`);
  };
  return (
    <>
      <Box
        sx={
          MenuPath()
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <Drawer
          variant="persistent"
          elevation={2}
          anchor="left"
          open={drawerActive.openDrawer}
          onClose={handleDrawerClose}
          hideBackdrop
          PaperProps={{
            sx: {
              height: "100vh",
              top: "70px", // Adjust the top position
              position: "fixed", // Override default position
              zIndex:0,
            },
          }}
        >
          <Toolbar sx={{ height: "85%", width: "100%" }}>
            <Box width="150px">
              <List>
                {Object.keys(drawerData).map((keyVal) => {
                  return (
                    <ListItem key={keyVal} sx={listItem}>
                      <Typography
                        variant="body1"
                        color="seconadry.hover"
                        sx={listItemTypo}
                        component={"h1"}
                      >
                        {keyVal}
                      </Typography>
                      {drawerData[keyVal].map((data) => {
                        return (
                          <StyledItemBtn
                            key={data}
                            sx={
                              activeObj.active === data[0]
                                ? {
                                    backgroundColor: "secondary.light",
                                    color: "common.white",
                                  }
                                : null
                            }
                            onClick={() => handleClickDrawerItem(data)}
                          >
                            <Typography variant="h6" sx={{ fontSize: "12px" }}>
                              {data[0]}
                            </Typography>
                          </StyledItemBtn>
                        );
                      })}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Toolbar>
        </Drawer>
      </Box>
    </>
  );
};

export default DrawerLeft;

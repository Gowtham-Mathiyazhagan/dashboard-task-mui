import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {NavbarField} from "./CustomField";
import { Box, Menu, MenuItem, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { navButtonIcon, navIcon } from "../theme/customThemeData";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { MenuPath } from "../Data/data";

const Navbar = ({ drawerActive }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseDrawerClose = () => {
    drawerActive?.setOpenDrawer(!drawerActive?.openDrawer);
  };
  return (
    <>
      <AppBar position="fixed" color="secondary" sx={{ zIndex: 10 }}>
        <Toolbar
          spacing={10}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton
            aria-label="menu-item"
            onClick={handleCloseDrawerClose}
            sx={
              MenuPath() // this path deterimine the Icon have to show or unshow
                ? { display: "none" }
                : { display: "block", navButtonIcon }
            }
          >
            {drawerActive?.openDrawer ? (
              <CloseIcon sx={navIcon} />
            ) : (
              <MenuIcon sx={navIcon} />
            )}
          </IconButton>
          <Typography
            variant="h6"
            flexGrow={1}
            sx={{
              textTransform: "capitalize",
              mx: "20px",
              fontSize: "30px",
              fontWeight: "900",
              letterSpacing: "2px",
            }}
          >
            lg allocation
          </Typography>

          {/* TextField imported from CustomField */}
          <Box flexGrow={1}>
            <NavbarField props={{ navName: "search item" }} />
          </Box>

          {/* Login Sysytem */}
          <Box>
            <Tooltip title="User Setting">
              <IconButton
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={navButtonIcon}
              >
                <PersonIcon sx={navIcon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={
                MenuPath() // this path deterimine the Icon have to show or unshow
                  ? { display: "none" }
                  : { display: "block", mt: "45px" }
              }
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu} sx={{ height: "20px" }}>
                <Typography
                  textAlign="center"
                  sx={{
                    color: "secondary.hoverText",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                  onClick={() => navigate("/")}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

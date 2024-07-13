import { Backdrop, Box, colors, IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import GroupTextField from "./GroupTextField";
import { closeButtonIcon, closeIcon, navButtonIcon, navIcon } from "../theme/customThemeData";
import CloseIcon from "@mui/icons-material/Close";

const ViewEditForm = () => {
	const [open, setOpen] = useState(false)
	const handleClick = () =>{
setOpen(false)
	}
  return (
    <>
	<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onChange={handleClick}
>
      <StyleViewEditBox>
		<IconButton sx={closeButtonIcon} >
		<CloseIcon sx={closeIcon} />
		</IconButton>
        <GroupTextField padding={5} />
      </StyleViewEditBox>
 </Backdrop>
    </>
  );
};

const StyleViewEditBox = styled(Box)`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 95;
  height: 90vh;
  width: 90vw;
  background-color: white;
  border: 2px solid var(--dark-purple-sec);
  overflow-x: scroll;
  padding-bottom:50px;
`;

export default ViewEditForm;

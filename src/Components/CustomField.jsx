import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Box, ListItemButton, MenuItem, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StyledDate } from "../theme/customThemeData";
import { useSelector, useDispatch } from "react-redux";

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    font-size: 13px;
    color: var(--white);
  }
  & .MuiOutlinedInput-root {
    & fieldset,
    &:hover fieldset,
    &.Mui-focused fieldset {
      border: 2px solid var(--hover);
    }
  }
  & .MuiInputLabel-root {
    font-size: 13px;
    color: var(--white);
    text-transform: capitalize;
    &.MuiInputLabel-shrink {
      color: var(--white);
    }
  }
`;

// Navbar serach component
export const NavbarField = ({ props }) => {
  const [textData, setTextData] = useState({ navbar: "" });

  function handleChange(e) {
    setTextData({ ...textData, navbar: e.target.value });
  }
  return (
    <>
      <StyledTextField
        label={props.navName}
        value={textData.navbar}
        onChange={handleChange}
        size="small"
        sx={{ width: "400px" }}
      />
    </>
  );
};

// styled btn for drawer
export const StyledItemBtn = styled(ListItemButton)`
  height: 32px;
  width: 150px;
  text-transform: capitalize;
  border-radius: 8px !important;

  &:hover {
    color: var(--dark-purple-sec);
    background-color: var(--hover) !important;
  }
`;

// styled box for layout

export const StyledBox = styled(Box)`
  width: 100%;
  float: right;
  margin-top: 70px;
  padding: 10px 20px;
  transition: all 0.2s linear;
`;

// styled text field for group textfield

const StyledGroupTextField = styled(TextField)`
  & .MuiInputBase-root {
    font-size: 13px;
    color: var(--text);
  }
  & .MuiOutlinedInput-root {
    & fieldset,
    &:hover fieldset,
    &.Mui-focused fieldset {
      border: 1px solid black;
    }
  }
  & .MuiInputLabel-root {
    font-size: 13px;
    color: var(--text);
    text-transform: capitalize;
    &.MuiInputLabel-shrink {
      color: var(--text);
    }
  }
`;

// GroupText component
export const TextFieldCompo = ({ props }) => {
  const [groupText, setgroupText] = useState({ text: "" });
  const dispatch = useDispatch()

  const perUser = useSelector((state)=> state.formData.perUserData)
  const newPerUser = [{...perUser[0], empNo:"12323"}]
  console.log(newPerUser)
  function handleChange(e) {
    
  }
  return (
    <>
      <StyledGroupTextField
        label={props.label}
        name={props.name}
        // value={groupText.text}
        onChange={()=>handleChange(props.name)}
        size="small"
        sx={{ width: "100%" }}
      />
    </>
  );
};

export const SelectTextFieldCompo = ({ props }) => {
  const [groupText, setgroupText] = useState({ text: "" });

  function handleChange(e) {
    setgroupText({ ...groupText, text: e.target.value });
  }
  return (
    <>
      <StyledGroupTextField
        label={props.label}
        name={props.name}
        value={groupText.text}
        onChange={handleChange}
        size="small"
        sx={{ width: "100%" }}
        select
      >
        <MenuItem sx={{ fontSize: "13px" }} value={""}>
          none
        </MenuItem>
        {props.menu.map((data, i) => (
          <MenuItem
            key={i.toString()}
            sx={{ fontSize: "13px" }}
            value={{ data }}
          >
            {data}
          </MenuItem>
        ))}
      </StyledGroupTextField>
    </>
  );
};

export const SelectDateCompo = ({ props }) => {
  const [date, setDate] = useState(null);

  function handleChange(val) {
    setDate(val.d);
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props.label}
          name={props.name}
          value={date}
          onChange={handleChange}
          slotProps={{
            textField: {
              size: "small",
              sx: { ...StyledDate },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export const StyledTypoAddresource = styled(Typography)`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 800 !important;
`;

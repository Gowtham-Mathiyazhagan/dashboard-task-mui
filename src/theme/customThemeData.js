// Navbar icon style
export const navButtonIcon = {
  "&:hover": { boxShadow: "0 0 5px 1px white" },
  transition: ".2s linear",
};

export const navIcon = { fontSize: "30px", color: "common.white" };

//  Drawer list
export const listItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const listItemTypo = {
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "700",
};

// style for top headline text

export const headLineTypo = {
  fontWeight: "600",
  textTransform: "capitalize",
  textDecoration: "underline #d946ef",
};

//  date style
export const StyledDate = {
  width:"100%",
  '& .MuiInputBase-root': {
    fontSize: '13px',
    color: 'var(--text)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid black',
    },
    '&:hover fieldset': {
      border: '1px solid black',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid black',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '13px',
    color: 'var(--text)',
    textTransform: 'capitalize',
    '&.MuiInputLabel-shrink': {
      color: 'var(--text)',
    },
  },
}
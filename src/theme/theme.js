import { createTheme } from "@mui/material";

export const coustomTheme = createTheme({
	typography:{
		fontFamily:"Poppins,sans-serif"
	},
	palette:{
		secondary:{
			main:"#c026d3",    //--dark-purple			
			light:"#d946ef", //--dark-purple-sec
			hover:"rgb(245, 208, 254)", // --hover
			hoverText:"#e879f9" //--hover-text
		}
	}
})
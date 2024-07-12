import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { cardDashboard } from "../Data/data";

const CardDashboard = () => {
  return (
    <>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
        {cardDashboard.map((data, i) => {
          return (
            <Card
              key={data.title}
              sx={{height:"130px",width:"150px", backgroundColor: `${data.bg}`, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}
            >
              <CardMedia component="img" sx={{height:'50px',width:'50px'}} image={data.icon} alt={data.title} />
              <CardContent sx={{ color: `${data.color}`, textAlign:"center", textTransform:"capitalize" }}>
                <Typography gutterBottom variant="body1" component="h1" sx={{fontSize:"13px"}}>
                  {data.title}
                </Typography>
                <Typography variant="h6" component="h3" fontWeight='600'>
                  {data.no}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default CardDashboard;

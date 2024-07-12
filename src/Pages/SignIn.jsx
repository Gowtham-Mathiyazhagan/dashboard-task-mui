import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const defaultTheme = createTheme();

  // navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // handle signin
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* <ThemeProvider theme={defaultTheme}> */}
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            width:"100%",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" fontWeight={"600"}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleClick("/item/dashboard")}
            >
              Sign In
            </Button>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
              }}
            >
              <Grid
                item
                xs
                sx={{ color: "blue", cursor: "pointer" }}
                onClick={() => handleClick("/password")}
              >
                Forgot password?
              </Grid>
              <Grid
                item
                sx={{ color: "blue", cursor: "pointer" }}
                onClick={() => handleClick("/signup")}
              >
                {"Don't have an account? Sign Up"}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
};

export default SignIn;

import React from "react";
import Route from "./Routes/route";
import { ThemeProvider } from "@emotion/react";
import { coustomTheme } from "./theme/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={coustomTheme}>
        <Route />
      </ThemeProvider>
    </>
  );
};

export default App;

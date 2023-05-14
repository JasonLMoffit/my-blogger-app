import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import "/src/style.scss";
import { router } from "./utils/router";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

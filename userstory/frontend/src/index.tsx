import { App } from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

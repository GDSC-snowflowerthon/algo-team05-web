import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mode } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

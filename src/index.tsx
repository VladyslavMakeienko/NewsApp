import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from "store/store";
import { HashRouter } from "react-router-dom";
import { mainTheme } from "styles/GlobalStyle";
import { GeneralData } from "components/organisms/wrappers";
import { App } from "./App";

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mainTheme}>
        <HashRouter>
          <CssBaseline />
          <GeneralData>
            <App />
          </GeneralData>
        </HashRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,

  document.getElementById("root")
);

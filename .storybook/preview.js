import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mainTheme } from "../src/styles/GlobalStyle";
import { store } from "../src/store/store";

const withThemeProvider = (Story, context) => {
  return (
    <Provider store={store}>
      <Emotion10ThemeProvider theme={mainTheme}>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Story {...context} />
          </BrowserRouter>
        </ThemeProvider>
      </Emotion10ThemeProvider>
    </Provider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

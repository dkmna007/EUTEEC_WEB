import { createMuiTheme } from "@material-ui/core/styles";
import variables, {
  primary,
  secondary,
  background,
  transparent
} from "./variables";
import card from "./Overides/peaCard";
import button from "./Overides/peaButton";
export const DARK_THEME = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "dark",
    primary,
    secondary,
    // background,
    transparent
  },
  shape: {
    borderRadius: 8
  },

  overrides: [card, button].reduce(
    (prev, curr) => ({
      ...prev,
      ...curr(variables)
    }),
    {}
  ),

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});
